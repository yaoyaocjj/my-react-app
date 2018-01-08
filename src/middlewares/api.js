import 'isomorphic-fetch'

const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
}

const API_ROOT = `${window.location.protocol}//${window.location.host}/`
const credentials = 'same-origin'

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
async function callApi(endpoint, headers, method, body) {
    const fullUrl = endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint
    let options = body ? { method, headers, body, credentials } : { method, headers, credentials }

    const response = await fetch(fullUrl, options)
    const json = await response.json()

    if (!response.ok) {
        let error = new Error('Something bad happened')
        error.response = json || {}
        throw error
    }
    return json
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API')

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default ({ dispatch, getState }) => next => async action => {
    const callAPI = action[CALL_API]

    if (typeof callAPI === 'undefined') {
        return next(action)
    }

    let { types, endpoint, method, headers, body } = callAPI

    if (typeof endpoint === 'function') endpoint = endpoint(getState())

    if (typeof endpoint !== 'string') throw new Error('Specify a string endpoint URL.')

    method = !method ? 'GET' : method
    headers = headers ? headers : defaultHeaders
    body = !body ? null : body

    function actionWith(data) {
        const finalAction = Object.assign({}, action, data)
        delete finalAction[CALL_API]
        return finalAction
    }

    let response = null
    const [requestType, successType, failureType] = types
    next(actionWith({ type: requestType }))
    try {
        response = await callApi(endpoint, headers, method, body)
        if (Array.isArray(successType)) {
            successType.forEach(function(type) {
                next(actionWith({ response, type: type }))
            })
        } else {
            next(actionWith({ response, type: successType }))
        }
        return response
    } catch (error) {
        error = error.response || error.message
        next(
            actionWith({
                type: failureType,
                error
            })
        )
        response = { error }
    } finally {
        return response
    }
}

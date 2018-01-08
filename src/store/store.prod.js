import { createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import api from '../middlewares/api'
import devtool from '../devtool'
import rootReducer from '../reducers/rootReducer'

export const history = createHistory()
const router = routerMiddleware(history)

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, api, router)
    )
    return store
}

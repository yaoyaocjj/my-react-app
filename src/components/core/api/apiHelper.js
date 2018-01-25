import react from 'react';
import 'fetch-polyfill';

const request = (path, params) => {
    return fetch(path, params).then((response) => {
        if (response.status >= 400) {
            return response.text().then((text) => {
                throw {
                    statusCode: response.status,
                    statusText: response.statusText,
                    responseText: text,
                    message: `{\n\t statusCode: ${response.status},\n\t statusText: "${response.statusText}",\n\t responseText: "${text}"\n}`
                };
            });
        }
        return response && response.json();
    });
};

const requestWrapper = (path, method, headOptions = {}, body = '', type) => {
    let params = {
        method: method,
        headers: { Accept: 'application/json', ...headOptions },
        timeout: 5000
    };
    if(!!body) params.body = body;
    return request(path, params, type);
};

const get = (path, headOptions = {}, type) => {
    return requestWrapper(path, 'GET', headOptions, '', type);
};

const post = (path, body, headOptions = {}) => {
    return requestWrapper(path, 'POST', headOptions, body);
};

const put = (path, body, headOptions = {}) => {
    return requestWrapper(path, 'PUT', headOptions, body);
};

const clear = (path, headOptions = {}) => {
    return requestWrapper(path, 'DELETE', headOptions);
};

export default { get, post, put, clear };
import React from 'react'
import { render } from 'react-dom'
import Root from './components/core/root'
import configureStore, { history } from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'

const store = configureStore()
render(<Root store={store} history={history} />, document.querySelector('#root'))
registerServiceWorker()

import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { ui } from './ui'
import { home } from './home'

export default combineReducers({
    router,
    ui,
    home
})

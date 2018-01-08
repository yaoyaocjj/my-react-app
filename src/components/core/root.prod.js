import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import Routes from './routes'
import DevTool from '../../devtool'
import Home from '../../components/Home'

export default ({ store, history }) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>{Routes()}</Switch>
        </ConnectedRouter>
    </Provider>
)

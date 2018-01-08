import React from 'react'
import { Provider } from 'react-redux'
import { Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import Routes from '../routes'
import DevTool from '../../devtool'

export default ({ store, history }) => (
    <Provider store={store}>
        <div>
            <ConnectedRouter history={history}>
                <Switch>{Routes()}</Switch>
            </ConnectedRouter>
            <DevTool />
        </div>
    </Provider>
)

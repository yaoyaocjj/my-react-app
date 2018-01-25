import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Property from "./propertyList/Property";

export default () => [
    <Route exact path="/" component={Home} key='1'/>,
    <Route path="/property/:id" component={Property} key='2'/>
]
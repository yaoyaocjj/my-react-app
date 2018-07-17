import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Property from './propertyList/Property'
import RotateBox from './rotateBox/RotateBox'
import Box from './box/Box'

export default () => [
    <Route exact path="/" component={Home} key='1'/>,
    <Route path="/rotate-box" component={RotateBox} key='3'/>,
    <Route path="/box" component={Box} key='3'/>,
    <Route path="/property/:id" component={Property} key='2'/>
]
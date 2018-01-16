import React, { Component } from 'react'
import avatar from '../../resource/avatar.jpeg';
import './avatar.css'

export default class Avatar extends Component {
    render() {
        return (
                <div className="avatar">
                    <img className="avatar-img" src={avatar} alt=""/>
                    <span className="avatar-name">Emily Caldwell</span>
                </div>
        )
    }
}

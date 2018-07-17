import React, { Component } from 'react'
import './rotateBox.css'

class RotateBox extends Component {
    render() {
        return (
            <div className="rotate-box">
                <div className="face one">one</div>
                <div className="face two">two</div>
                <div className="face three">three</div>
                <div className="face four">four</div>
                <div className="face five">five</div>
                <div className="face six">six</div>
            </div>
        )
    }
}

export default RotateBox
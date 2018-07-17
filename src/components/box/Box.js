import React, { Component } from 'react'
import './box.css'

class Box extends Component {
    render() {
        return (
            <div className="box">
                <div className="face top">TOP</div>
                <div className="face left">LEFT</div>
                <div className="face right">RIGHT</div>
            </div>
        )
    }
}

export default Box
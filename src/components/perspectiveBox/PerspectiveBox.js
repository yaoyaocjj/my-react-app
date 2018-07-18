import React, { Component } from 'react'
import './perspectiveBox.css'

class PerspectiveBox extends Component {
    render() {
        return (
            <div className="perspective-box">
                <div className="face front">FRONT</div>
                <div className="face back">BACK</div>
                <div className="face left">LEFT</div>
                <div className="face right">RIGHT</div>
                <div className="face top">TOP</div>
                <div className="face bottom">BOTTOM</div>
            </div>
        )
    }
}

export default PerspectiveBox
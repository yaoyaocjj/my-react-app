import React, { Component } from 'react'
import {Grid, Row, Col } from 'react-bootstrap'
import Property from "./Property"
import './propertyList.css'

export default class Properties extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <div className="properties">
                    <Grid>
                        <Row className="show-grid">
                            <Col sm={12} md={6} xs={12}>
                                <div className="nav">
                                    <div className="title">
                                        <h1>Available listings</h1>
                                        <span>1-20 of 40 properties</span>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} xs={12}>
                                <div className="filter">
                                    <button>Filters</button>
                                    <label>Sort by:</label>
                                    <select>
                                        <option>New Applications</option>
                                        <option>1 Applications</option>
                                        <option>2 Applications</option>
                                        <option>3 Applications</option>
                                    </select>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                    <Grid>
                        { this.props.properties && this.props.properties.map((property) => (
                                <Property property={property} key={property.ID}/>
                        )) }
                    </Grid>
                </div>
        )
    }
}
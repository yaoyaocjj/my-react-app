import React, { Component } from 'react'
import {Grid, Row, Col } from 'react-bootstrap'
import './searchBox.css'

export default class SearchBox extends Component {
    render() {
        return (
                <div className="search-box">
                    <Grid>
                        <Row className="show-grid">
                            <Col md={12} sm={12} xs={12}>
                                <div className="search">
                                    <input placeholder="Search by address, suburb or property ID"/>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
        )
    }
}
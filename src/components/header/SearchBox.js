import React, { Component } from 'react'
import {Grid, Row, Col } from 'react-bootstrap'
import './searchBox.css'

export default class SearchBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchValue: ""
        }
        this.handleFilterProperties = this.handleFilterProperties.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.setState({
            searchValue: event.target.value
        })
    }

    handleFilterProperties() {
        this.props.handleFilterProperties(this.state.searchValue);
    }

    render() {
        return (
                <div className="search-box">
                    <Grid>
                        <Row className="show-grid">
                            <Col md={12} sm={12} xs={12}>
                                <div className="search">
                                    <input placeholder="Search by address, suburb or property ID" onChange={this.handleInput}/>
                                    <button className="search-button" onClick={this.handleFilterProperties}>
                                        <i className="iconfont search-icon">&#xe648;</i>
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
        )
    }
}
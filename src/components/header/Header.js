import React, { Component } from 'react'
import {Grid, Row, Col } from 'react-bootstrap'
import './header.css'
import Avatar from "../avatar/Avatar";
import SearchBox from "./SearchBox";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={12} sm={6}>
                            <div className="crumbs">
                                <span><a href="##" className="main-rea">realestate.com.ru</a></span>
                                <span><a href="##" className="main-rea">1form</a></span>
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <div className="avatar-container">
                    <span className="avatar-logo">PIPPIN & HALL</span>
                    <div className="avatar-detail">
                        <Avatar/>
                    </div>
                </div>
                <SearchBox />
            </div>
        )
    }
}
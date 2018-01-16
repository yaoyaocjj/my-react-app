import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import './property.css'
import Avatar from "../avatar/Avatar";

export default class Property extends Component {
    render() {
        const property = this.props.property;
        return (
                <div className="property">
                    <Grid>
                        <Row className="show-grid">
                            <Col md={3} sm={6} xs={12} className="thumbnail">
                                <div className="avatar-container"><Avatar /></div>
                                <img src={property.thumbnail} className="property-image"/>
                            </Col>
                            <Col md={3} sm={6} xs={12}>
                                <div className="detail">
                                    <div className="address">{property.address}</div>
                                    <div className="address-detail">{property.addressDetail}</div>
                                    <div className="type">{property.type}</div>
                                    <div className="info">
                                        <span className="item"><i className="iconfont">&#xe61a;</i><span>{property.beds}</span></span>
                                        <span className="item"><i className="iconfont">&#xe6a5;</i><span>{property.bathrooms}</span></span>
                                        <span className="item"><i className="iconfont">&#xe76e;</i><span>{property.cars}</span></span>
                                    </div>
                                    <div className="id">{property.ID}</div>
                                </div>
                            </Col>
                            <Col md={3} sm={6} xs={12}>
                                <div className="price-info">
                                    <div className="price">{property.price}</div>
                                    <div className="bond">Bond: {property.bond}</div>
                                    <div className="available">Available: {property.available}</div>
                                </div>
                            </Col>
                            <Col md={3} sm={6} xs={12} className="application-col">
                                <div className="application">
                                    <div className="applications">{property.applications} New Applications</div>
                                    <div className="shortlisted">{property.shortlisted} Shortlisted</div>
                                    <div className="total">{property.total} Total</div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
        )
    }
}
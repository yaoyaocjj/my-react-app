import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Header from '../header/Header'
import Footer from "../footer/Footer"
import PropertyList from "../propertyList/PropertyList"
import { bindActionCreators } from 'redux'
import { fetchPropertyList, filterProperties } from "../../actions/property"
import './home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleFilterProperties = this.handleFilterProperties.bind(this);
    }

    componentDidMount() {
        this.props.actions.fetchPropertyList();
    }

    handleFilterProperties(searchValue) {
        this.props.actions.dispatch(filterProperties(searchValue));
    }

    render() {
        return (
            <div className="ams">
                <Header key={'header'} handleFilterProperties={this.handleFilterProperties}/>
                { this.props.isFetching && <i className="iconfont loading-icon">&#xe6b1;</i> }
                <PropertyList key={'property'} properties={this.props.properties}/>
                <Footer key={'footer'} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ui: state.ui,
    properties: state.home.properties,
    isFetching: state.home.isFetching
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        fetchPropertyList,
        filterProperties
    }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))

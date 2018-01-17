import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Header from '../header/Header'
import Footer from "../footer/Footer";
import PropertyList from "../propertyList/PropertyList";
import { bindActionCreators } from 'redux';

class Home extends Component {
    render() {
        return [
            <Header key={'header'}/>,
            <PropertyList key={'property'} />,
            <Footer key={'footer'} />
        ]
    }
}

const mapStateToProps = state => ({
    ui: state.ui
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({}, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))

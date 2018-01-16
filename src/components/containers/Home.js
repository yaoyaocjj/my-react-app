import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Header from '../header/Header'
import Footer from "../footer/Footer";
import Properties from "../properties/Properies";

class Home extends Component {
    render() {
        return (
                <div>
                    <Header />
                    <Properties />
                    <Footer />
                </div>
        )
    }
}

const mapStateToProps = state => ({
    ui: state.ui
})

export default withRouter(connect(mapStateToProps)(Home))

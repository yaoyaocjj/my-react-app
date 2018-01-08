import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Header from './header/Header'

class Home extends Component {
    render() {
        return <Header />
    }
}

const mapStateToProps = state => ({
    ui: state.ui
})

export default withRouter(connect(mapStateToProps)(Home))

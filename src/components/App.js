
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { HandleGetData } from '../actions/shared'
//import LoadingBar from 'react-redux-loading'
//import Nav from './Nav'
// import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(HandleGetData())
  }
  render() {
    return (
        <div>
          APP
        </div>
    )
  }
}




export default connect()(App)
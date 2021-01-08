
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { HandleGetData } from '../actions/shared'
import SignIn from './SignIn'
import QuestionPreview from './QuestionPreview'
import AllQuestions from './AllQuestions'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Question from './Question'
//import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
// import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(HandleGetData())
  }
  render() {
    return (
      <Router>
      <Fragment>
      
          {this.props.loading===true?
          <div>Loading</div>:
          
          //<QuestionPreview questionID={'8xf0y6ziyjabvozdd253nd'}/>
        //<AllQuestions questionIDS={["8xf0y6ziyjabvozdd253nd", "6ni6ok3ym7mf1p33lnez",  "am8ehyc8byjqgar0jgpub9",  "loxhs1bqm25b708cmbf3g"]}/>
        <div>
         <Nav/>
        <Route path='/' exact render={()=>(<Question qid={"8xf0y6ziyjabvozdd253nd"}/>) }/>
        </div>}
       </Fragment>
      </Router>   
    )
  }
}




//export default connect()(App)

export default connect(
  ({ questions })=>(
    { loading:  Object.keys(questions).length === 0
     }
  )  
  )(App)
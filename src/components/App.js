
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { HandleGetData } from '../actions/shared'
import SignIn from './SignIn'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Question from './Question'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import PollResult from './PollResult'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
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
          {this.props.authorized=== false?<SignIn/>:
          this.props.loading===true?
          <div>Loading</div>:
          <div>
         <Nav/>
        {/* <Route path='/' exact render={()=>(<PollResult qid={"xj352vofupe1dqz9emx13r"}/>) }/> */}
        {/* <Route path='/' exact render={()=>(<Question match={{params:{qid:'8xf0y6ziyjabvozdd253nd'}}}/>) }/> */}
        <Route path='/newQuestion' exact component={NewQuestion}/>
        <Route path ='/' exact component ={Dashboard}/>
        <Route path ='/question/:qid' exact component={Question}/>
        <Route path ='/PollResult/:qid' exact component={PollResult}/>
        <Route path ='/LeaderBoard' render={()=>(<LeaderBoard userId="sarahedo"/>)}/>
        </div>}
       </Fragment>
      </Router>   
    )
  }
}




//export default connect()(App)

export default connect(
  ({ questions,users ,authedUser})=>(
    { loading: Object.keys(users).length === 0 ||  Object.keys(questions).length === 0,
      authorized: authedUser!==null
     }
  )  
  )(App)
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Progress } from 'semantic-ui-react'
import styles from 'semantic-ui-css/semantic.min.css'
import { FiArrowDown } from "react-icons/fi"

class PollResult extends Component {
    
    render() {
        console.log(styles)
        console.log("esult props",this.props)
      return (
          <div className='container rounded border p-3 m-2' >
              <div className='row justify-content-start'>
                 <h4 className='col'>Question asked by {this.props.user.name} :</h4>                 
            </div>
            <div className='row justify-content-start p-3'>
                 <img className = 'avatar-big rounded-circle col-md-auto' src={this.props.user.avatarURL} />
                 <div className= 'col-md-auto'>
                 <h5>Results:</h5>
                 {this.props.useranswer==='optionOne'?<h6 className="row justify-content-center">Your choice</h6>:<h6 className="row justify-content-center">Other choice</h6>}
                 <div className={this.props.useranswer==='optionOne'?'addBg border border-dark rounded p-3 m-3':'border border-dark rounded p-3 m-3'}>
                 
                    Would you rather {this.props.question.optionOne.text}?
                    <div>

                    <Progress percent={this.props.question.optionOne.votes.length>0?(this.props.question.optionOne.votes.length*100/(this.props.question.optionOne.votes.length+this.props.question.optionTwo.votes.length)):0} indicating />
                    <h5 style={{align:'center'}}>{this.props.question.optionOne.votes.length} out of {this.props.question.optionOne.votes.length+this.props.question.optionTwo.votes.length} votes</h5>
                    </div>
                 </div>
                 {this.props.useranswer==='optionTwo'?<h6 className="row justify-content-center">Your choice</h6>:<h6 className="row justify-content-center">Other choice</h6>}
                 <div className={this.props.useranswer==='optionTwo'?'addBg border border-dark rounded p-3 m-3':'border border-dark rounded p-3 m-3 '}>

                    Would you rather {this.props.question.optionTwo.text}?
                    <Progress percent={this.props.question.optionTwo.votes.length>0?(this.props.question.optionTwo.votes.length*100/(this.props.question.optionOne.votes.length+this.props.question.optionTwo.votes.length)):0} indicating />
                    <h5 style={{align:'center'}}>{this.props.question.optionTwo.votes.length} out of {this.props.question.optionOne.votes.length+this.props.question.optionTwo.votes.length} votes</h5>
                 </div>
                 </div>
            </div>
          </div>
      )
    }
  }
  
  
  
  
  export default withRouter(connect(
      (state, passedProps)=>{

          const { questions, authedUser, users }= state
          const { qid }= passedProps.match.params
          const user= users[questions[qid].author]
          const question=questions[qid]
          const UserAnswer= users[authedUser].answers[qid]
          console.log("answer",UserAnswer)
          return {
              question:question, authedUser:authedUser, qid:qid, user: user,useranswer:UserAnswer
          }
      }
  )(PollResult))
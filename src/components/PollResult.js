import React, { Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Progress } from 'semantic-ui-react'
import styles from 'semantic-ui-css/semantic.min.css'

class PollResult extends Component {
    
    render() {
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
                    <h5>{this.props.question.optionOne.votes.length>0?Math.round(this.props.question.optionOne.votes.length*100/(this.props.question.optionOne.votes.length+this.props.question.optionTwo.votes.length)):0}%</h5>
                    <h5 style={{align:'center'}}>{this.props.question.optionOne.votes.length} out of {this.props.question.optionOne.votes.length+this.props.question.optionTwo.votes.length} votes</h5>
                    </div>
                 </div>
                 {this.props.useranswer==='optionTwo'?<h6 className="row justify-content-center">Your choice</h6>:<h6 className="row justify-content-center">Other choice</h6>}
                 <div className={this.props.useranswer==='optionTwo'?'addBg border border-dark rounded p-3 m-3':'border border-dark rounded p-3 m-3 '}>

                    Would you rather {this.props.question.optionTwo.text}?
                    <Progress percent={this.props.question.optionTwo.votes.length>0?(this.props.question.optionTwo.votes.length*100/(this.props.question.optionOne.votes.length+this.props.question.optionTwo.votes.length)):0} indicating />
                    <h5>{this.props.question.optionTwo.votes.length>0?Math.round(this.props.question.optionTwo.votes.length*100/(this.props.question.optionOne.votes.length+this.props.question.optionTwo.votes.length)):0}%</h5>
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
          const { question_id }= passedProps
          const user= users[questions[question_id].author]
          const question=questions[question_id]
          const UserAnswer= users[authedUser].answers[question_id]
          return {
              question:question, authedUser:authedUser, question_id:question_id, user: user,useranswer:UserAnswer
          }
      }
  )(PollResult))
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import QuestionPreview from './QuestionPreview'
import AllQuestions from './AllQuestions'

class Dashboard extends Component {

    state={
        viewAnswered: true
    }

    answered=()=>{
        this.setState({viewAnswered:true})
    }
    unanswered=()=>{
        this.setState({viewAnswered:false})
    }
  render() {
    console.log("dashborad props",this.props)
    return (
        <div className='row justify-content-center'>
            <div className='row justify-content-center border rounded w-50 p-3 m-2'>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button onClick={this.answered} type="button" className="btn btn-secondary">answered questions</button>
                <button onClick={this.unanswered} type="button" className="btn btn-secondary">unanswered questions</button>
            </div>
            <AllQuestions questionIDS={this.state.viewAnswered?this.props.AnsweredQ:this.props.UnansweredQ}/>
            </div>
        </div>
    )
  }
}




export default connect(
    (state)=>{
        const { authedUser, questions } = state
        let AnsweredQ=[]
        let UnansweredQ=[]
        if(authedUser !=null){
            Object.keys(questions).forEach((id)=>{
                if(questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser)){
                    AnsweredQ.push(id)
                }
                else{
                    UnansweredQ.push(id)
                }

            })
        }
        return {
            AnsweredQ :  AnsweredQ, UnansweredQ: UnansweredQ, authedUser: authedUser
        }
    }
)(Dashboard)
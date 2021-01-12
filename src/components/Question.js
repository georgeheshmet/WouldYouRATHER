import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { HandleAnswer } from '../actions/shared'
import PollResult from './PollResult'

class Question extends Component {

    state={
        value:''
    }

    handleSelection=(event)=>{
        event.preventDefault()
        console.log(event.target.answer.value)
        const answer = event.target.answer.value
        if(answer.length<1){
            alert("please choose an answer")
        }
        else
        {

        const { authedUser, question_id } =this.props
        
        console.log("passed rpos x ",authedUser ,question_id,answer)
        
        
        this.props.dispatch(HandleAnswer({authedUser ,question_id,answer })).then(()=>(
            this.props.history.push(`/question/${this.props.question_id}`)
        )).catch((e)=>
            alert(`error ${e} occured`))
                        
        }
        }
    handleChange=(event)=>{
        this.setState(()=>({value:event.target.value}))
    }
    render() {
        if(this.props.error === true){
            return <Redirect to ='/errorPage'/>
        }
      return (
       
          <div className='container rounded border p-3 m-2' >
              { Object.keys(this.props.users[this.props.authedUser].answers).includes(this.props.question_id) === true?
              <PollResult question_id = {this.props.question_id} />:
            <div>
            <div className='row justify-content-start'>
                 <h6 className='col'>{this.props.user.name} asks:</h6>                 
            </div>
            <div className='row justify-content-start p-3'>
                 <img className = 'avatar-big rounded-circle col-md-auto' src={this.props.user.avatarURL} alt='alt'/>
                 <div className = 'col-md-auto'>
                     <h2>Would you rather....</h2>
                     <div>
                     <form onChange={this.handleChange} onSubmit={(event)=>(this.handleSelection(event))}>
                         <div>
                             
                         <input  type='radio' name='answer' value='optionOne'/>
                         <label className='p-3'>{this.props.question.optionOne.text}</label> 
                         </div>
                         <div>
                         <input  type='radio' name='answer' value='optionTwo'/>
                         <label className='p-3'>{this.props.question.optionTwo.text}</label> 
                         </div>
                         <button className="btn btn-primary" disabled={this.state.value===''} type="submit" >submit</button>
                    </form>
                    </div>
                 </div>
            </div>
            </div>
            }
          </div>
      )
    }
  }
  
  
  
  
  export default withRouter(connect(
      (state, passedProps)=>{

          const { questions, authedUser,users }= state
          const { question_id }= passedProps.match.params
          let error = false
          const  question  = questions[question_id]
          if( question === undefined ){
                error =true
                return { error : error }
          }
          return {
              question:questions[question_id], authedUser:authedUser, error: error, question_id:question_id, user:users[questions[question_id].author], users: users
          }

      }
  )(Question))
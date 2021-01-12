import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { HandleAnswer } from '../actions/shared'

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
            this.props.history.push(`/PollResult/${this.props.question_id}`)
        )).catch((e)=>
            alert(`error ${e} occured`))
                        
        }
        }
    handleChange=(event)=>{
        this.setState(()=>({value:event.target.value}))
    }
    render() {
        console.log(this.props)
      return (
          <div className='container rounded border p-3 m-2' >
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
      )
    }
  }
  
  
  
  
  export default withRouter(connect(
      (state, passedProps)=>{

          const { questions, authedUser,users }= state
          const { question_id }= passedProps.match.params

          const  question  = questions[question_id]
          if( question === undefined ){
            passedProps.history.push('/errorPage')
          }
          return {
              question:questions[question_id], authedUser:authedUser, question_id:question_id, user:users[questions[question_id].author]
          }

      }
  )(Question))
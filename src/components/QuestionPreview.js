import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { previewText } from '../utils/helper'

class QuestionPreview extends Component {

    
    render() {
        
      return (
          <div className='container rounded border p-3 m-2' >

              <div className ="row justify-content-center" >
              <img             
                        src={this.props.user.avatarURL}
                        alt={`Avatar`}
                        className='avatar'
                             />                        
                    <div className='col'>                    
                        <h2  >{this.props.user.name} asks:</h2>
                    </div>
              </div>
            <div  className ="row justify-content-center">

            <div className='col'> 
            <h3  > Would you rather</h3>
            <p >...{previewText(this.props.question.optionOne.text)}...</p>
            <button type="button" className="btn btn-primary btn-sm">view poll</button>
            </div>
            
            </div>
            
          </div>
      )
    }
  }
  
  
  
  
  export default connect(
      (state, passedProps)=>{
          console.log(passedProps)
          const { questions, users, authedUser } =state
          const questionID  = passedProps.questionID
          const question= questions[questionID]
          //console.log("question now", question)
          //const { author }= question
         //console.log("question hey",author)
          return{
             question: question, user: users[question.author]
          }

      }
  )(QuestionPreview)
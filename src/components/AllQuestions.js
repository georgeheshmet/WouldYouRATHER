import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import QuestionPreview from './QuestionPreview'

export default class AllQuestions extends Component {


  render() {
    console.log(this.props)
    return (
        <div className='row justify-content-center'>
            <div className='row justify-content-center  p-3 m-2'>
                {this.props.questionIDS.map((ID)=>(
                    <QuestionPreview key ={ID} questionID={ID}/>
                ))}

            </div>
        </div>
    )
  }
}




// export default connect(
//     (state)=>{
//         const { questions } = state
//         return {
//             questions : questions
//         }
//     }
// )(AllQuestions)
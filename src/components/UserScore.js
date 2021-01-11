import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'


class UserScore extends Component {

    
    render() {


      const { users, userId } =this.props 
      const user = users[userId] 
      return (
          <div className='container rounded border p-3 m-2' >
                <div className='row justify-content-center'>
                         <img className = 'avatar-big rounded-circle col-md-auto' src={user.avatarURL} />
                         <div className='col-md-auto'>
                             <h4 className='row '>{user.name}</h4>
                             <div className='mt-5'>
                                <h6 className='row'>Answered questions  {Object.keys(user.answers).length}</h6>
                                <h6 className='row'>Created questions  {user.questions.length}</h6>
                             </div>
                         </div>

                         <div className='ml-5 mt-5 col-md-auto'>
                            <h5 className='m-auto p-3 row border'>Score</h5>
                            <div className='m-auto row justify-content-center border p-3'>
                                <h4 className="number-big text-white rounded-circle bg-info p-3">{user.questions.length+Object.keys(user.answers).length}</h4>
                            </div>
                         </div>
                </div>

          </div>
      )
    }
  }
  
  
  
  
  export default connect(
      (state,passedProps)=>{
          const { users }= state
          const { userId } = passedProps
          return {users: users, userId: userId }
      }
  )(UserScore)
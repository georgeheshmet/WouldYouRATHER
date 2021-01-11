import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import  UserScore  from './UserScore'

class LeaderBoard extends Component {

    
    render() {
        const { users } =this.props
        let userIDS  =Object.keys(users).map((user)=>(user))
        userIDS= userIDS.sort((a, b)=>(users[b].questions.length + Object.keys(users[b].answers).length- (users[a].questions.length + Object.keys(users[a].answers).length)))
      return (
          <div className='container mt-2'>
                
                <h2 style={{textAlign:'center'}} className='text-info '>LeaderBoard !</h2>
                <div className='row justify-content-center'>
                {userIDS.map((ID)=>(<UserScore userId={ID}/>))}
                </div>
          </div>
      )
    }
  }
  
  
  
  
  export default connect(
      (state)=>{
          const { users }= state
          return {users: users }
      }
  )(LeaderBoard)
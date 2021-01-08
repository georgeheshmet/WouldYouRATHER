import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import logo from '../utils/Images/WouldYou.png' 
import Select from 'react-select'
import { SetAuthUser } from '../actions/authedUser'
// import { HandleGetData } from '../actions/shared'
//import LoadingBar from 'react-redux-loading'
//import Nav from './Nav'
// import { BrowserRouter as Router, Route} from 'react-router-dom'

class SignIn extends Component {

  state={
      value: '',
      options: [...Object.keys(this.props.users).map((user)=>{
        return {value: this.props.users[user].id , label: <div><img className = 'avatar' src={this.props.users[user].avatarURL} />{this.props.users[user].name} </div>}} )]
  }
  
  HandelUpdate=(event)=>{
    console.log("event",event.value)  
    this.setState(()=>({value:event.value}))
  }

  HandleSubmit=()=>{
      console.log(this.state.value)
      this.props.dispatch(SetAuthUser(this.state.value))
  }
  render() {
    //   const {users} = this.props
    //   const options=[]
      
    //   Object.keys(users).forEach((user)=>{
    //             options.push({value: users[user].name , label: <div><img className = 'avatar' src={users[user].avatarURL} />{users[user].name} </div>})} )    

    return (
        <div>
          <div>
                <h2 style={{textAlign : 'center'}}>Welcome to The would you rather App!</h2>
                <h3 style={{textAlign : 'center'}}> PLease sign in to continue</h3>
          </div>
          <div>
          <div style={{textAlign : 'center'}}>
          <img
          style={{ width: 100, height: 100}}
            src={logo}
            alt={'Would you rather image'}
            className='mr-1'
            />
            </div>
          </div> 

         <label style={{textAlign : 'center'}}>Please sign in:</label>
         <Select name="trial"  options ={this.state.options} onChange={(event)=>this.HandelUpdate(event)}/>
         <button className="btn btn-primary" disabled={this.state.value===''} onClick={this.HandleSubmit} type="submit">Submit</button>

         {/* //   <select name="Username" id="username">
        // //       {Object.keys(users).map((user)=>(
        // //           <option value={users[user].name}> <div><img src={users[user].avatarURL} alt=''/>hi </div></option>))}
        // //   </select> */}
        </div>
    )
  }
}




export default connect(
    (state)=>{
        const users = state.users
        return { authedUser :state.authedUser, users:{...users}}
    }
)(SignIn)
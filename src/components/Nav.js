
import { NavLink } from 'react-router-dom'
import React, { Component} from 'react'
import { connect } from 'react-redux'
import { SetAuthUser } from '../actions/authedUser'


class  Nav extends Component {


  HandleLogOut=()=>{
    this.props.dispatch(SetAuthUser(null))

  }
  render(){
  return (
    <div>
    <nav >
      <ul className='nav nav-tabs' role="tablist">
        <li className="nav-item">
          <NavLink className="nav-link" to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/add' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/leaderboard' activeClassName='active'>
            LeaderBoard
          </NavLink>
        </li>

      </ul>
      <div className='nav justify-content-end border'>

          <div className='nav-item m-2 row justify-content-center'>
            <h5 className='m-auto col-md-auto justify-content-center'>Hello, {this.props.users[this.props.authedUser].name}</h5>
            <img className = 'avatar-small rounded-circle col-md-auto' src={this.props.users[this.props.authedUser].avatarURL} />
            <button type="button" className="btn btn-light btn-md" onClick={this.HandleLogOut}>Log out</button> 
            </div>
        </div>
    </nav>
    </div>
  )
}
}

export default connect(
  (state)=>{
    const { users, authedUser } = state
    return { users: users , authedUser: authedUser}
  }
)(Nav)
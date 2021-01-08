import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
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
          <NavLink className="nav-link" to='/new' activeClassName='active'>
            New Tweet
          </NavLink>
        </li>
      </ul>
    </nav>
    </div>
  )
}
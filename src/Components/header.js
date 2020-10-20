import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
//Few important things to note here { } is ued to bind and Component is a method inside react;
//We will use className here instead of function so Component is required.
const Header=()=>{

  return(
    <div className="header-nav-bar">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Edumato</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link  to="/" className="nav-link">Home</Link>
          </li>

          <li className="nav-item dropdown">
            <Link to="/ViewBooking" className="nav-link">Orders</Link>
          </li>
          </ul>
      </div>
    </nav>
    </div>
  )
}
export default Header

import React, { Component } from 'react';
import './LoginScreen.css';
import logo from '../../logo500.png';
export default class LoginScreen extends Component {

  constructor(props){
    super(props);
    this._handleLogInClick = this._handleLogInClick.bind(this);
  }

  render() {
    return (
      <div className="loginscreen">
        <div className="loginscreen-logo">
          <img src={logo} alt="logo"/>
        </div>
        <form>
          <div className="loginscreen-username">
            <input placeholder="Username"
                   onFocus={(e) => e.target.placeholder = ""}
                   onBlur={(e) => e.target.placeholder = "Username"}/>
          </div>
          <div className="loginscreen-password">
            <input type="password" placeholder="password"
                   onFocus={(e) => e.target.placeholder = ""}
                   onBlur={(e) => e.target.placeholder = "password"}/>
          </div>
          <div className="loginscreen-submit">
            <input type="submit" value="Log In" onClick={(e) => {this._handleLogInClick(e)}}/>
            <input type="submit" value="Register" onClick={(e) => {this._handleRegisterClick(e)}}/>
          </div>
        </form>
      </div>
    )
  }

  _handleLogInClick(e) {
      e.preventDefault();
      this.props.logInHandle(e);
  }

  _handleRegisterClick(e) {
      e.preventDefault();
      this.props.registerHandle(e);
  }
}

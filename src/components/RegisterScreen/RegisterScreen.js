import React, { Component } from 'react';
import "./RegisterScreen.css";
import logo from '../../logo500.png';
export default class RegisterScreen extends Component {

  constructor(props){
    super(props);
    this._handleRegisterClick = this._handleRegisterClick.bind(this);
  }
  render() {
    return (
        <div className="registerscreen">
          <div className="registerscreen-logo">
            <img src={logo} alt="logo"/>
          </div>
          <form>
            <div className="registerscreen-id">
              <input placeholder="ID"
                     onFocus={(e) => e.target.placeholder = ""}
                     onBlur={(e) => e.target.placeholder = "ID"}/>
            </div>
            <div className="registerscreen-email">
              <input placeholder="Email"
                     onFocus={(e) => e.target.placeholder = ""}
                     onBlur={(e) => e.target.placeholder = "Email"}/>
            </div>
            <div className="registerscreen-password">
              <input placeholder="password"
                     onFocus={(e) => e.target.placeholder = ""}
                     onBlur={(e) => e.target.placeholder = "password"}/>
            </div>
            <div className="registerscreen-submit">
              <input type="submit" value="Sign Up" onClick={(e) => {this._handleRegisterClick(e)}}/>
            </div>
          </form>
        </div>
    )
  }
    _handleRegisterClick(e) {
        e.preventDefault();
        this.props.registerHandle(e);
    }
}

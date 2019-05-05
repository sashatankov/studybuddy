import React, { Component } from 'react';
import './Navigation.css';
export default class navigation extends Component {



  constructor(props){
    super(props);
    this.buttonClicked = null;
    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick(event){
    event.preventDefault();
    this.props.buttonClicked(event.target.value);
  }
  render() {
    const logo = require('./logo200.png');
    return (
      <div className="navigation">
        <div className="nav">
          <div className="nav-btn">
            <button onClick={this._handleClick} value='general'>מידע כללי</button>
            <button onClick={this._handleClick} value='exams'>מידע אישי</button>
            <button onClick={this._handleClick} value='studyPlan'>מסלול לימודים</button>
            <button onClick={this._handleClick} value='schedule'>מערכת שעות</button>
            <button onClick={this._handleClick} value='exams'>לוח מבחנים</button>
          </div>

        </div>
        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import './Navigation.css';
export default class navigation extends Component {

  buttonClicked = null;
  _handleClick(val){
    this.props.buttonClicked(val);
  }
  render() {
    const logo = require('./logo200.png');
    return (
      <div className="navigation">
        <div className="nav">
          <div className="nav-btn">
            <button onClick={this._handleClick(this.value)} value='general'>מידע כללי</button>
            <button onClick={this._handleClick(this.value)} value='studyPlan'>מסלול לימודים</button>
            <button onClick={this._handleClick(this.value)} value='schedule'>מערכת שעות</button>
            <button onClick={this._handleClick(this.value)} value='exams'>לוח מבחנים</button>
          </div>

        </div>
        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>
      </div>
    )
  }
}

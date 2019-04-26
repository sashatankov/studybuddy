import React, { Component } from 'react';
import './Navigation.css';
export default class navigation extends Component {


  render() {
    const logo = require('./logo200.png');
    return (
      <div className="navigation">
        <div className="nav">
          <button>מידע כללי</button>
          <button>מסלול לימודים</button>
          <button>מערכת שעות</button>
          <button>לוח מבחנים</button>
        </div>
        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>
      </div>
    )
  }
}

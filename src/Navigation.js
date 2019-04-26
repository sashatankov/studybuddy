import React, { Component } from 'react';
import './Navigation.css';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';
import {Routes} from "./Routes";

export default class navigation extends Component {
  render() {
    const logo = require('./logo200.png');
    return (
      <menu className="navigation">
          <Router>
            <div className="nav">
                <button>
                    <div>
                        <Link to="/">דף הבית</Link>
                    </div>
                </button>
                <button>מידע כללי</button>
                <button>
                    <div>
                        <Link to="/Courses">מסלול לימודים</Link>
                    </div>
                </button>
              <button>מערכת שעות</button>
              <button>לוח מבחנים</button>
                {Routes}
            </div>
          </Router>
        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>
      </menu>
    )
  }
}

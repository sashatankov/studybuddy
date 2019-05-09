import React, { Component } from 'react';
import './CalendarHeader.css';
export default class CalendarHeader extends Component {
  render() {
    return (
      <div className="calendarheader">
        <div className="header-cell">Sun</div>
        <div className="header-cell">Mon</div>
        <div className="header-cell">Tue</div>
        <div className="header-cell">Wed</div>
        <div className="header-cell">Thu</div>
        <div className="header-cell">Fri</div>
        <div className="header-cell">Sat</div>
      </div>
    )
  }
}

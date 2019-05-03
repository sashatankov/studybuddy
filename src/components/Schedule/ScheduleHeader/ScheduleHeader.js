
import React, { Component } from 'react';
import './ScheduleHeader.css';
export default class ScheduleHeader extends Component {
  render() {
    return (
      <div className="scheduleheader">
        <div className="blank"></div>
        <div className="dayName">Sunday</div>
        <div className="dayName">Monday</div>
        <div className="dayName">Tuesday</div>
        <div className="dayName">Wednesday</div>
        <div className="dayName">Thursday</div>
        <div className="blank"></div>
      </div>
    )
  }
}

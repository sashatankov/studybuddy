import React, { Component } from 'react';
import './ScheduleRow.css';
export default class ScheduleRow extends Component {
  render() {
    return (
      <div className="schedulerow">
        <div className="rowCellTime">{this.props.time}</div>
        <div className="rowCell"></div>
        <div className="rowCell"></div>
        <div className="rowCell"></div>
        <div className="rowCell"></div>
        <div className="rowCell right"></div>
        <div className="rowCellTime"></div>
      </div>
    )
  }
}

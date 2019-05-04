import React, { Component } from 'react';
import './ScheduleRow.css';
export default class ScheduleRow extends Component {
  render() {
    return (
      <div className="schedulerow">
        <div className="rowCellTime">{this.props.time}</div>
        <div className="rowCell"><hr/></div>
        <div className="rowCell"><hr/></div>
        <div className="rowCell"><hr/></div>
        <div className="rowCell"><hr/></div>
        <div className="rowCell right"><hr/></div>
        <div className="rowCellTime"> </div>
      </div>
    )
  }
}

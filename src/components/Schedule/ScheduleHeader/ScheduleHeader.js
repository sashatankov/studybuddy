
import React, { Component } from 'react';
import './ScheduleHeader.css';
export default class ScheduleHeader extends Component {

  constructor(props) {
      super(props);
      this.currentDate = new Date();


  }
  _getDate(targetDay) {
      const months31 = [1, 3, 5, 7, 8, 10, 12]; // Jan, Mar, MAy, Jul, Aug, Oct, Dec
      const months30 = [4, 6, 9, 11]; // Apr, Jun, Sep, Nov

      let date = "";
      //day: a number from 0-6;
      const currentDay = this.currentDate.getDay();
      let diff = targetDay - currentDay;
      let day = this.currentDate.getDate() + diff;
      let month = this.currentDate.getMonth() + 1;
      let year = this.currentDate.getYear();
      if(day <= 0){
          if(months31.includes(month)){
              day = month === 8 ? 31 + day : 30 + day
          }
          else if (months30.includes(month)) {
              day = 31 - day;
          }
          else { // month: Feb.
            day = year % 4 === 0 ? 29 + day : 28 + day; // leap year check
          }
          month -= 1;
      }
      date += day.toString() + "/" + month.toString();
      return date;
  }
  render() {
    return (
      <div className="scheduleheader">
        <div className="blank"></div>
        <div className="dayName">  Sunday<br/>{this._getDate(0)}</div>
        <div className="dayName">  Monday<br/>{this._getDate(1)}</div>
        <div className="dayName">  Tuesday<br/>{this._getDate(2)}</div>
        <div className="dayName">  Wednesday<br/>{this._getDate(3)}</div>
        <div className="dayName">  Thursday<br/>{this._getDate(4)}</div>
        <div className="blank"></div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import "./CalendarRow.css";
import Exam from "../../Exam/Exam";
export default class CalendarRow extends Component {


  constructor(props){
    super(props);
    this.calendarMonth = this.props.calendarMonth;
    this.startDate = this.props.startDate;

  }
  _getNumOfDaysInMonth(){
      const months31 = [1, 3, 5, 7, 8, 10, 12]; // Jan, Mar, MAy, Jul, Aug, Oct, Dec
      const months30 = [4, 6, 9, 11]; // Apr, Jun, Sep, Nov
      let m = this.calendarMonth + 1;

      if(months31.includes(m)){
          return 31;
      }
      else if(months30.includes(m)){
          return 30;
      }
      else {
          if(this.firstDayDate.getYear() % 4 === 0){
              return 29;
          }
          else {
              return 28;
          }
      }
    }

  _getDateOfWeekDay(offset){
      // 0 is sun, 6 is Sat
      const days = this._getNumOfDaysInMonth();
      let x =  ((this.startDate + offset) % days);
      if(x === 0){
          return days;
      }
      return x;
  }
  render() {

    return (
      <div className="calendarrow">
        <div className="cal-cell">
            <div className="cal-cell-content">
                {this._getDateOfWeekDay(0)}
            </div>
        </div>
        <div className="cal-cell">
            <div className="cal-cell-content">
                {this._getDateOfWeekDay(1)}
            </div>
        </div>
        <div className="cal-cell">
            <div className="cal-cell-content">
                {this._getDateOfWeekDay(2)}
            </div>
        </div>
        <div className="cal-cell">
            <div className="cal-cell-content">
                {this._getDateOfWeekDay(3)}
            </div>
        </div>
        <div className="cal-cell">
            <div className="cal-cell-content">
                {this._getDateOfWeekDay(4)}
            </div></div>
        <div className="cal-cell">
            <div className="cal-cell-content">
                {this._getDateOfWeekDay(5)}
            </div></div>
        <div className="cal-cell">
            <div className="cal-cell-content">
                {this._getDateOfWeekDay(6)}
            </div>
        </div>
      </div>
    )
  }
}

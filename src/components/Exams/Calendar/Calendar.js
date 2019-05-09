import React, { Component } from 'react';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import CalendarRow from './CalendarRow/CalendarRow';
import './Calendar.css';
export default class Calendar extends Component {


  constructor(props){
    super(props);
    this.calendarMonth = this.props.calendarMonth; // an int; Jan is 0, Dec is 11
    this.firstDayDate = this._getDate();
    this.firstDayInGrid = this._getNumOfDaysInPrevMonth() - this._getWeekOffset()+1;
  }
  _getNumOfDaysInPrevMonth(){
      const months31 = [0, 2, 4, 6, 7, 9, 11]; // Jan, Mar, MAy, Jul, Aug, Oct, Dec
      const months30 = [3, 5, 8, 10]; // Apr, Jun, Sep, Nov

      let m = this.firstDayDate.getMonth() - 1;
      if(m < 0){
          m = 11;
      }
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
  _getDate() {
      const cutDate = new Date();
      const x = new Date(cutDate.getFullYear(), this.calendarMonth, 1);
      console.log('first day of the month');
      console.log(x);
      return x;
  }



  /**
   * returns how many days since the start of the week have passed
   * before the first of the month
   * @private
   */
  _getWeekOffset(){
      return this.firstDayDate.getDay();
  }

  _getDayOfStartOfWeek(weekNum){
      // week of the first day of the month is zero's week

    return ((this.firstDayInGrid + (7 * weekNum)) % this._getNumOfDaysInPrevMonth());
  }
  render() {
    return (
        <div className="calendar">
          <CalendarHeader/>
          <CalendarRow calendarMonth={this.calendarMonth-1} startDate={this._getDayOfStartOfWeek(0)}/>
          <CalendarRow calendarMonth={this.calendarMonth} startDate={this._getDayOfStartOfWeek(1)}/>
          <CalendarRow calendarMonth={this.calendarMonth} startDate={this._getDayOfStartOfWeek(2)}/>
          <CalendarRow calendarMonth={this.calendarMonth} startDate={this._getDayOfStartOfWeek(3)}/>
          <CalendarRow calendarMonth={this.calendarMonth} startDate={this._getDayOfStartOfWeek(4)}/>
        </div>

    )
  }
}

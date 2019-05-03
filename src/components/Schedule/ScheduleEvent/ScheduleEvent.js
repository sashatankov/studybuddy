import React, { Component } from 'react';
import './ScheduleEvent.css';
export default class ScheduleEvent extends Component {

  weekDays = {
    SUNDAY: "Sunday",
    MONDAY: 'Monday',
    TUESDAY: "Tuesday",
    WEDNESDAY: "Wednesday",
    THURSDAY: "Thursday"
  };
  courses = {
    ALGO: 'algo',
    STAT: 'stat',
    LOGIC: 'logic'
  };
  colors = {
    ALGO_COLOR: "rgba(255, 156, 239, 0.8)",
    STAT_COLOR: "rgba(73, 179, 172, 0.8)",
    LOGIC_COLOR: "rgba(73, 179, 93, 0.8)"
  };
  day = 0;
  startTime = 0;
  endTime = 0;
  constructor(props){
      super(props);
      this.course = this.props.course;
      this._setStartEndTime();
      if(this.props.day === this.weekDays.SUNDAY){
        this.day = 1;
      }
      else if(this.props.day === this.weekDays.MONDAY){
          this.day = 2;
      }
      else if(this.props.day === this.weekDays.TUESDAY){
          this.day = 3;
      }
      else if(this.props.day === this.weekDays.WEDNESDAY){
          this.day = 4;
      }
      else if(this.props.day === this.weekDays.THURSDAY){
          this.day = 5;
      }


  }

    _setStartEndTime() {
        this.startTime = parseInt(this.props.starttime.slice(0, 2)) * 100;
        this.endTime = parseInt(this.props.endTime.slice(0, 2)) * 100;
        this.startTime += (parseInt(this.props.starttime.slice(3, 5)) / 60 * 100);
        this.endTime += parseInt(this.props.endTime.slice(3, 5) / 60 * 100);
    }

  _getPositioning(){

      const pos= {
          position: 'absolute',
          left: (8.333 + ((this.day - 1) * 16.666)).toString().concat("%"),
          top: (3.333 + 6.666 * ((this.startTime - 800) / 100)).toString().concat("%"),
          width: "16.666%",
          height: (6.666 * ((this.endTime - this.startTime) / 100)).toString().concat("%"),
          zIndex: '10',
          backgroundColor: this._getColor(),
          borderRadius: "10px",
          textAlign: "center",
          padding: "0"
      };

      return pos;
  }

  _getColor(){
    if(this.course === this.courses.ALGO){
      return this.colors.ALGO_COLOR;
    }
    else if (this.course === this.courses.STAT) {
      return this.colors.STAT_COLOR;
    }
    else if (this.course === this.courses.LOGIC) {
      return this.colors.LOGIC_COLOR;
    }

  }
  render() {

    return (
      <div className="scheduleevent" style={this._getPositioning()}>
        <p>
            {this.props.eventTitle}
            <br/>
            {this.props.classroom}
        </p>
      </div>
    )
  }
}

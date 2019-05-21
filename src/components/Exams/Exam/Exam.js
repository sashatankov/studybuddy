import React, { Component } from 'react';
import './Exam.css';
export default class Exam extends Component {
  title = "";
  classroom = "";
  startTime = "";
  endTime = "";
  utils = "";
  dateText = "";
  courses = {
      ALGO: 'algo',
      STAT: 'stat',
      LOGIC: 'logic',
      NAND: 'nand'
  };
  colors = {
        ALGO_COLOR_LECTURE: "rgba(224, 109, 235, 0.5)", // darker shade
        STAT_COLOR_LECTURE: "rgba(73, 179, 172, 0.5)",
        LOGIC_COLOR_LECTURE: "rgba(73, 179, 93, 0.5)",
    };

  constructor(props){
    super(props);
    this.title = this.props.title;
    this.course = this.props.course;
    this.classroom = this.props.classroom;
    this.startTime = this.props.startTime;
    this.endTime = this.props.endTime;
    this.utils = this.props.utils;
    this.dateText = this.props.date; // format of dd/mm/yyyy
    this.date = this._parseDateText();
    this._handleClick = this._handleClick.bind(this);

  }
  _parseDateText(){
      let day = parseInt(this.dateText.slice(0, 2));
      let month = parseInt(this.dateText.slice(3,5));
      let year = parseInt(this.dateText.slice(6, 10));
      let date = new Date();
      date.setFullYear(year, month - 1, day);
      return date;
  }
  _getWeekDayOffset(){
      return this.date.getDay();
  }
  _handleClick(event){
      event.preventDefault();
      this.props.clickedExam(this);
  }

  render() {
    return (
      <div className="exam" style={this._getStyle()} onClick={this._handleClick}>
        <h4>{this.title}</h4>
        <h4>{this.startTime} - {this.endTime}</h4>
        <h4>{this.classroom}</h4>
      </div>
    )
  }

  _getStyle() {
    const style = {
      backgroundColor: this._getColor(),
      color: "black",
      top: (5 + 5 + Math.floor(this.date.getDate() / 7) * 18).toString().concat("%"),
      left: (10+11.45 * this._getWeekDayOffset()).toString().concat("%")
    };
    return style;
  }

  _getColor(){
        if(this.course === this.courses.ALGO){
            return this.colors.ALGO_COLOR_LECTURE;
        }
        else if (this.course === this.courses.STAT) {
            return this.colors.STAT_COLOR_LECTURE;
        }
        else if (this.course === this.courses.LOGIC) {
            return this.colors.LOGIC_COLOR_LECTURE;
        }

    }
}

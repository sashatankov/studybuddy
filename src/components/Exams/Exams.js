import React, { Component } from 'react';
import Calendar from './Calendar/Calendar.js';
import Exam from './Exam/Exam';
import './Exams.css';
export default class Exams extends Component {

  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="exams">
        <div className="exams-body">
          <Calendar calendarMonth={4}/>
          <Exam title="אלגוריתמים"
                course="algo"
                classroom="קנדה"
                startTime="13:00" endTime="16:00" util="" date="15/05/2019"/>
          <Exam title="מבוא ללוגיקה"
                course="logic"
                classroom="הנדסה"
                startTime="10:00"
                endTime="13:00" util="" date="23/05/2019"/>
          <Exam title="הסתברות"
                course="stat"
                classroom="שפרינצק 217"
                startTime="11:00"
                endTime="12:30" util="מחשבון" date="09/05/2019"/>

        </div>
      </div>


    )
  }
}

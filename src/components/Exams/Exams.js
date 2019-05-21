import React, { Component } from 'react';
import Calendar from './Calendar/Calendar.js';
import Exam from './Exam/Exam';
import './Exams.css';
export default class Exams extends Component {

  exams = [
      {
        id: 1,
        title: "אלגוריתמים",
        course: "algo",
        classroom: "קנדה",
        startTime: "13:00",
        endTime: "16:00",
        util: "מחשבון",
        date: "15/05/2019"
      },
      {
          id: 2,
          title: "מבוא ללוגיקה" ,
          course: "logic",
          classroom: "הנדסה",
          startTime: "10:00",
          endTime: "13:00",
          util:"דף נוסחאות",
          date:"23/06/2019"
      },
      {
          id: 3,
          title:"הסתברות",
          course:"stat",
          classroom:"שפרינצק 217",
          startTime: "11:00",
          endTime: "12:30",
          util: "מחשבון",
          date: "09/05/2019"
      }
  ];
  constructor(props){
    super(props);
    this.state = {
      curMonth: new Date().getMonth()
    };
    this.curMonth = (new Date()).getMonth();
    console.log("exams: ".concat(this.curMonth.toString()));
    this.curYear = (new Date()).getFullYear();
  }
  _showExamDetails(examObj){
      this.props.clicked(examObj);
  }
  _getExams(){
    let currentExams = this.exams.filter((exam)=>{
      return parseInt(exam.date.slice(3,5)) - 1 === this.state.curMonth &&
             parseInt(exam.date.slice(6, 10)) === this.curYear;
    });
    return currentExams.map((exam)=>{
      return (
          <Exam title={exam.title}
                key={exam.id}
                course={exam.course}
                classroom={exam.classroom}
                startTime={exam.startTime}
                endTime={exam.endTime}
                util={exam.util} date={exam.date}
                clickedExam={this._showExamDetails.bind(this)}/>
      );
    });
  }
  render() {
    return (
      <div className="exams">
        <div className="exams-body">
          <Calendar calendarMonth={this.state.curMonth}
                    goToPrevMonth={this._setPrevMonth}
                    goToNextMonth={this._setNextMonth}/>
          {this._getExams()}
        </div>
      </div>


    )
  }
    _setPrevMonth = () => {
      this.setState(prevState => ({
          curMonth: prevState.curMonth - 1
      }));
      if(this.state.curMonth < 0){
          this.setState(prevState => ({
              curMonth: 11
          }));
      }
    };

    _setNextMonth = () => {
        this.setState(prevState => ({
            curMonth: prevState.curMonth + 1
        }));
        if(this.state.curMonth > 11){
            this.setState(prevState => ({
                curMonth: 0
            }));
        }
    };


}

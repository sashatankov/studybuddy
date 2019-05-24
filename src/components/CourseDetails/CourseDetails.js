import React, { Component } from 'react';
import "./CourseDetails.css";


export default class CourseDetails extends Component {


  constructor(props){
    super(props);
    this._hideDetails = this._hideDetails.bind(this);

  }

  render() {
    const details = this.props.CourseObj;
    const sideBarBgColor = {backgroundColor: details._getColor()};
    const titleColor = {color: details._getColor()};

    return (
        <div className="overlay">
          <div id="x" className="overlaybox" >
            <div className="overlaybox-sidebar" style={sideBarBgColor}>

            </div>
            <div className="overlaybox-content">
              <div className="quit" onClick={this._hideDetails}>
                <i className="fas fa-times"> </i>
              </div>
              <h1 style={titleColor}> {details.state.courseName} </h1>
              <p>מספר הקורס: {details.state.courseNumber}</p>
              <p>נ"ז: {details.state.nz}</p>
              <p>סוג הקורס: {details.state.courseType}</p>
              <p>מרצה: {details.state.professor}</p>
              <p>מתרגל/ת: {details.state.TA}</p>
              <p>ממוצע הקורס: {details.state.course_average}</p>
              <p>דרישות קדם: {details.state.prerequisites}</p>
              <p>תאריך מבחן מועד א: {details.state.exam_a_date}</p>
              <p>תאריך מבחן מועד ב: {details.state.exam_b_date}</p>
            </div>
          </div>
        </div>

    )
  }

  _hideDetails(event){
    event.preventDefault();
    this.props.clicked(event);
  }
}

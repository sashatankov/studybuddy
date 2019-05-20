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
              <h1 style={titleColor}> {details.name} </h1>
              <p>מספר הקורס: {details.number}</p>
              <p>נ"ז: {details.nz}</p>
              <p>סוג הקורס: {details.courseType}</p>
              <p>מרצה: {details.professor}</p>
              <p>מתרגל/ת: {details.TA}</p>
              <p>ממוצע הקורס: {details.course_average}</p>
              <p>דרישות קדם: {details.prerequisites}</p>
              <p>תאריך מבחן מועד א: {details.exam_a_date}</p>
              <p>תאריך מבחן מועד ב: {details.exam_b_date}</p>
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

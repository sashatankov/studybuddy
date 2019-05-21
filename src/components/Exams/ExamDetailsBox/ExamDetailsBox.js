import React, { Component } from 'react';
import './ExamDetailsBox.css';
export default class ExamDetailsBox extends Component {

  constructor(props){
    super(props);
    this._hideDetails = this._hideDetails.bind(this);

  }
  _hideDetails(event){
      event.preventDefault();
      this.props.clicked(event);
  }
  render() {
    const exam = this.props.examObj;
    const sideBarBgColor = {backgroundColor: exam._getColor()};
    const titleColor = {color: exam._getColor()};
    return (
      <div className="examdetailsbox-overlay">
        <div id="x" className="examdetailsbox-overlaybox" >
          <div className="examdetailsbox-overlaybox-sidebar" style={sideBarBgColor}>

          </div>
          <div className="examdetailsbox-overlaybox-content">
            <div className="quit" onClick={this._hideDetails}>
              <i className="fas fa-times"> </i>
            </div>
            <h1 style={titleColor}> {exam.title} </h1>
            <h3> {exam.classroom} </h3>
            <h3>
                {exam.startTime} - {exam.endTime}
            </h3>
            <h3> :חומר עזר </h3>
            <h3> {exam.util} </h3>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import "./ScheduleEventDetailsBox.css";

export default class ScheduleEventDetailsBox extends Component {

  constructor(props){
    super(props);
    this._hideDetails = this._hideDetails.bind(this);
    this.overlayClassList = ["overlay"];
  }

  render() {
    const scheduleEvent = this.props.scheduleEventObj;
    const sideBarBgColor = {backgroundColor: scheduleEvent._getColor()};
    const titleColor = {color: scheduleEvent._getColor()};
    let component = null;
    return (
        <div className={this.overlayClassList.join(" ")}>
          <div id="x" className="overlaybox" >
            <div className="overlaybox-sidebar" style={sideBarBgColor}>

            </div>
            <div className="overlaybox-content">
              <div className="quit" onClick={this._hideDetails}>
                <i className="fas fa-times"> </i>
              </div>
              <h1 style={titleColor}> {scheduleEvent.eventTitle} </h1>
              <h3>
                  {scheduleEvent.startTimeText} - {scheduleEvent.endTimeText}
              </h3>
              <h3> {scheduleEvent.classroom} </h3>
              <h4> {scheduleEvent.professor} </h4>
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

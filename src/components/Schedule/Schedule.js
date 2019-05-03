import React, { Component } from 'react';
import ScheduleHeader from './ScheduleHeader/ScheduleHeader.js';
import ScheduleRow from './ScheduleRow/ScheduleRow.js';
import ScheduleEvent from './ScheduleEvent/ScheduleEvent.js';
import './Schedule.css';
export default class Schedule extends Component {
  render() {
    return (
      <div className="schedule">
        <ScheduleHeader/>
        <div className="schedulebody">
          <ScheduleRow time="08:00"/>
          <ScheduleRow time="09:00"/>
          <ScheduleRow time="10:00"/>
          <ScheduleRow time="11:00"/>
          <ScheduleRow time="12:00"/>
          <ScheduleRow time="13:00"/>
          <ScheduleRow time="14:00"/>
          <ScheduleRow time="15:00"/>
          <ScheduleRow time="16:00"/>
          <ScheduleRow time="17:00"/>
          <ScheduleRow time="18:00"/>
          <ScheduleRow time="19:00"/>
          <ScheduleRow time="20:00"/>
          <ScheduleRow time="21:00"/>
          <ScheduleRow time="22:00" className="bottom-row"/>
          <ScheduleEvent day="Sunday"
                         starttime="10:00"
                         endTime="13:00"
                         eventTitle="אלגוריתמים"
                         classroom="קנדה"
                         course="algo"/>

          <ScheduleEvent day="Wednesday"
                         starttime="13:30"
                         endTime="14:45"
                         eventTitle="לוגיקה"
                         classroom="שפריצק 117"
                         course="logic"/>

          <ScheduleEvent day="Monday"
                         starttime="12:00"
                         endTime="14:15"
                         eventTitle="הסתברות"
                         classroom="כימיה 7"
                         course="stat"/>
        </div>




      </div>
    )
  }
}

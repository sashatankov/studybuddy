import React, { Component } from 'react';
import './App.css';
import Message from './Message';
import Navigation from "./Navigation";
import StudyPlan from './StudyPlan';
import PersonalInfo from './personal_info';
import Schedule from './components/Schedule/Schedule';
import ScheduleEventDetailsBox
    from './components/Schedule/ScheduleEventDetailsBox/ScheduleEventDetailsBox'
import CourseDetails from './components/CourseDetails/CourseDetails.js'
import Exams from "./components/Exams/Exams";

class App extends Component {

  screens = {
    GENERAL: 'general',
    EXAMS: 'exams',
    STUDY_PLAN: 'study_plan',
    SCHEDULE: 'schedule',
    PERSONAL: 'personal'
  };

  constructor(){
    super();
    this.state = {
      currentScreen: this.screens.GENERAL,
      overlayBox: ""
    };
    this._hideDetails = this._hideDetails.bind(this);
  }

  _setScreen(val){

    if(val === 'studyPlan'){
      this.setState({currentScreen: this.screens.STUDY_PLAN});
    }
    else if (val === 'general') {
      this.setState({currentScreen: this.screens.GENERAL});
    }
    else if (val === 'schedule'){
      this.setState({currentScreen: this.screens.SCHEDULE});
    }
    else if(val === 'exams'){
      this.setState({currentScreen: this.screens.EXAMS});
    }
    else if (val === 'personal') {
      this.setState({currentScreen: this.screens.PERSONAL});
    }
  }

  _showDetailsSch(scheduleEvent){
    console.log("show details app");
    this.setState({overlayBox:
        (<ScheduleEventDetailsBox
            scheduleEventObj={scheduleEvent}
            clicked={this._hideDetails.bind(this)}/> )});
  }

  _showDetailsCourse(course){
    console.log("show details app");
    this.setState({overlayBox:
          (<CourseDetails
              CourseObj={course}
              clicked={this._hideDetails.bind(this)}/> )});
  }

  _hideDetails(){
    this.setState({overlayBox: ""});
  }

  render() {
    let currentScreenComponent = null;
    if(this.state.currentScreen === this.screens.GENERAL){
      currentScreenComponent = <Message headline="ביטול שיעור" content="השיעור באלגברה לינארית בתאריך 10.4.2019 מבוטל"/>;
    }
    else if (this.state.currentScreen === this.screens.STUDY_PLAN){
      currentScreenComponent = <StudyPlan clicked={this._showDetailsCourse.bind(this)}/>    //TODO
    }
    else if (this.state.currentScreen === this.screens.SCHEDULE){
      currentScreenComponent = <Schedule clicked={this._showDetailsSch.bind(this)}/>;
    }
    else if (this.state.currentScreen === this.screens.PERSONAL){
      currentScreenComponent = <PersonalInfo/>;
    }
    else {
      currentScreenComponent = <Exams/>;
    }
    return (
      <div className="App">
        <Navigation buttonClicked={this._setScreen.bind(this)}/>
        {currentScreenComponent}
        {this.state.overlayBox}
      </div>
    );
  }
}

export default App;

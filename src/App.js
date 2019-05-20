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
import LoginScreen from './components/LoginScreen/LoginScreen';
import RegisterScreen from './components/RegisterScreen/RegisterScreen';
import QuestionsScreen from './components/QuestionsScreen/QuestionsScreen';

class App extends Component {

  screens = {
    GENERAL: 'general',
    EXAMS: 'exams',
    STUDY_PLAN: 'study_plan',
    SCHEDULE: 'schedule',
    PERSONAL: 'personal',
    LOGIN: 'login',
    REGISTER: 'register',
    QUESTIONS: 'questions'
  };


  constructor(){
    super();
    this.state = {
      currentScreen: this.screens.LOGIN,
      overlayBox: ""
    };
    this._hideDetails = this._hideDetails.bind(this);
    this._signUpHandle = this._signUpHandle.bind(this);
  }

  _setScreen(val){

    if(val === 'studyPlan'){
      this.setState({currentScreen: this.screens.STUDY_PLAN});
    }
    else if (val === 'login'){
      this.setState({currentScreen: this.screens.LOGIN});
    }
    else if(val === 'register'){
      this.setState({currentScreen: this.screens.REGISTER});
    }
    else if (val === 'general') {
      this.setState({currentScreen: this.screens.GENERAL});
    }
    else if (val === 'schedule'){
      this.setState({currentScreen: this.screens.SCHEDULE});
    }
    else if (val === 'exams'){
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
  _logIn(e){
    this.setState({currentScreen: this.screens.GENERAL});
  }
  _register(e){
    this.setState({currentScreen: this.screens.REGISTER});
  }
  _signUpHandle(e){
    this.setState({currentScreen: this.screens.QUESTIONS})
  }
  _submitQuestionsHandle(e){
    this.setState({currentScreen: this.screens.STUDY_PLAN})
  }

  render() {
    let currentScreenComponent = null;
    let navigationComponent = null;
    if(this.state.currentScreen !== this.screens.LOGIN){
      navigationComponent = <Navigation buttonClicked={this._setScreen.bind(this)}/>;
    }
    if(this.state.currentScreen === this.screens.GENERAL){
      currentScreenComponent = <Message headline="ביטול שיעור" content="השיעור באלגברה לינארית בתאריך 10.4.2019 מבוטל"/>;
    }
    else if (this.state.currentScreen === this.screens.STUDY_PLAN){
      currentScreenComponent = <StudyPlan clicked={this._showDetailsCourse.bind(this)}/>
    }
    else if (this.state.currentScreen === this.screens.SCHEDULE){
      currentScreenComponent = <Schedule clicked={this._showDetailsSch.bind(this)}/>;
    }
    else if (this.state.currentScreen === this.screens.PERSONAL){
      currentScreenComponent = <PersonalInfo/>;
    }
    else if (this.state.currentScreen === this.screens.EXAMS) {
      currentScreenComponent = <Exams/>;
    }
    else if(this.state.currentScreen === this.screens.LOGIN) {
      currentScreenComponent = <LoginScreen logInHandle={this._logIn.bind(this)} registerHandle={this._register.bind(this)}/>;
    }
    else if(this.state.currentScreen === this.screens.REGISTER){
      currentScreenComponent = <RegisterScreen registerHandle={this._signUpHandle.bind(this)}/>
    }
    else if(this.state.currentScreen === this.screens.QUESTIONS){
      currentScreenComponent = <QuestionsScreen submitHandle={this._submitQuestionsHandle.bind(this)}/>
    }

    return (
      <div className="App">
        {navigationComponent}
        {currentScreenComponent}
        {this.state.overlayBox}
      </div>
    );
  }
}

export default App;

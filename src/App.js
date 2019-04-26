import React, { Component } from 'react';
import './App.css';
import Message from './Message';
import Navigation from "./Navigation";
class App extends Component {

  screens = {
    GENERAL: 'general',
    EXAMS: 'exams',
    STUDY_PLAN: 'study_plan',
    SCHEDULE: 'schedule'
  };

  constructor(){
    super();
    this.state = {
      currentScreen: this.screens.GENERAL
    };
  }

  _setScreen(button){
    // todo
    console.log(button);
  }

  render() {
    let currentScreenComponent = null;
    if(this.state.currentScreen = this.screens.GENERAL){
      currentScreenComponent = <Message headline="ביטול שיעור" content="השיעור באלגברה לינארית בתאריך 10.4.2019 מבוטל"/>;
    }
    else if (this.state.currentScreen = this.screens.STUDY_PLAN){
      // set the currentScreenComponent to studyPlan component
    }
    else if (this.state.currentScreen = this.screens.SCHEDULE){
      // set the currentScreenComponent to schedule component
    }
    else {
      // set the currentScreenComponent to exams component
    }
    return (
      <div className="App">
        <Navigation buttonClicked={this._setScreen.bind(this)}/>
        {currentScreenComponent}
      </div>
    );
  }
}

export default App;

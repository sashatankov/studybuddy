import React, { Component } from 'react';
import './App.css';
import Message from './Message';
import Navigation from "./Navigation";
import StudyPlan from './StudyPlan';

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

  _setScreen(val){
    // todo
    //  let screens = {
    //       GENERAL: 'general',
    //       EXAMS: 'exams',
    //       STUDY_PLAN: 'study_plan',
    //       SCHEDULE: 'schedule'
    //   };
      console.log(val);
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
  }

  render() {
    let currentScreenComponent = null;
    if(this.state.currentScreen === this.screens.GENERAL){
      currentScreenComponent = <Message headline="ביטול שיעור" content="השיעור באלגברה לינארית בתאריך 10.4.2019 מבוטל"/>;

    }
    else if (this.state.currentScreen === this.screens.STUDY_PLAN){
      currentScreenComponent = <StudyPlan/>;
    }
    else if (this.state.currentScreen === this.screens.SCHEDULE){
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

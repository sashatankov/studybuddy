import React, { Component } from 'react';
import './App.css';
import Message from './Message';
import Navigation from "./Navigation";
class App extends Component {
  render() {
    return (
      <div className="App">
          {/*just for example. to remove later*/}
        <Navigation/>
        <Message headline="ביטול שיעור" content="השיעור באלגברה לינארית בתאריך 10.4.2019 מבוטל"/>

      </div>
    );
  }
}

export default App;

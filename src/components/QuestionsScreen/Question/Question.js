import React, { Component } from 'react';
import "./Question.css";
export default class Question extends Component {
  render() {
    return (
      <div className="question">
        <div className="question-content">
          {this.props.text}
        </div>
        <div className="question-options">
          <input type={this.props.type} name={this.props.name} value={this.props.values[0]}/>
          <input type={this.props.type} name={this.props.name} value={this.props.values[1]}/>
          <input type={this.props.type} name={this.props.name} value={this.props.values[2]}/>
          <input type={this.props.type} name={this.props.name} value={this.props.values[3]}/>
        </div>
      </div>
    )
  }
}

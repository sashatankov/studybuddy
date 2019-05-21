import React, { Component } from 'react';
import "./Question.css";
export default class Question extends Component {
  render() {
    return (
      <div className="question">
        <div className="question-content">
            <div className="questions-content-text">
                <span>?</span>{this.props.text}
            </div>
        </div>
        <div className="question-options">
            <div className="question-options-text">
                <div className="question-option-text">
                    {this.props.values[0]}
                    <input type={this.props.type} name={this.props.name} value={this.props.values[0]}/>

                </div>
                <div className="question-option-text">
                    {this.props.values[2]}
                    <input type={this.props.type} name={this.props.name} value={this.props.values[1]}/>

                </div>
                <div className="question-option-text">
                    {this.props.values[2]}
                    <input type={this.props.type} name={this.props.name} value={this.props.values[2]}/>

                </div>


            </div>

        </div>
      </div>
    )
  }
}

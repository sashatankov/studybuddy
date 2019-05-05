import React, { Component } from 'react';

export default class Exam extends Component {
  render() {
    return (
      <div className="exam">
        { this.props.children }
      </div>
    )
  }
}

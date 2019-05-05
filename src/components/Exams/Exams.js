import React, { Component } from 'react';

export default class Exams extends Component {
  render() {
    return (
      <div className="exams">
        { this.props.children }
      </div>
    )
  }
}

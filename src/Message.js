import React, { Component } from 'react';
import './Message.css';
export default class message extends Component {
    render() {
        return (
            <div className="message">
                <div className="headline">
                    <h5>{this.props.headline}</h5>
                </div>
                <div className="content">
                    <p>{this.props.content}</p>
                </div>
            </div>
        )
    }
}
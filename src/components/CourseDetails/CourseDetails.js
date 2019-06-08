import React, { Component } from 'react';
import "./CourseDetails.css";
import Popup from 'reactjs-popup';

const Card = ({ url }) => (
    <div className="card">
      <div className="content">
        <img src={url} width="300%" height="300%" />
      </div>
    </div>
);

const ToolTipPositions = ({text, url}) => (
    <div className="example-warper">

      <Popup
          trigger={<button className="button"> {text} </button>}
          position="left bottom"
          on="hover"
      >
        <Card url={url} />
      </Popup>
    </div>
);


export default class CourseDetails extends Component {

  courseNumbers = {
    C_53336: 53336,
    C_57108: 57108,
    C_67101: 67101,
    C_67109: 67109,
    C_67125: 67125,
    C_67316: 67316,
    C_67317: 67317,
    C_67501: 67501,
    C_67504: 67504,
    C_67925: 67925,
    C_80131: 80131,
    C_80133: 80133,
    C_80134: 80134,
    C_80135: 80135,
    C_80181: 80181,
    C_80423: 80423,
    C_80430: 80430
  };
  links = {
    C_53336: require('./CourseDetails_DATA/53336.grades.jpg'),
    C_57108: require('./CourseDetails_DATA/57108.grades.jpg'),
    C_67101: require('./CourseDetails_DATA/67101.grades.jpg'),
    C_67109: require('./CourseDetails_DATA/67109.grades.jpg'),
    C_67125: require('./CourseDetails_DATA/67125.grades.jpg'),
    C_67316: require('./CourseDetails_DATA/67316.grades.jpg'),
    C_67317: require('./CourseDetails_DATA/67317.grades.jpg'),
    C_67501: require('./CourseDetails_DATA/67501.grades.jpg'),
    C_67504: require('./CourseDetails_DATA/67504.grades.jpg'),
    C_67925: require('./CourseDetails_DATA/67925.grades.jpg'),
    C_80131: require('./CourseDetails_DATA/80131.grades.jpg'),
    C_80133: require('./CourseDetails_DATA/80133.grades.jpg'),
    C_80134: require('./CourseDetails_DATA/80134.grades.jpg'),
    C_80135: require('./CourseDetails_DATA/80135.grades.jpg'),
    C_80181: require('./CourseDetails_DATA/80181.grades.jpg'),
    C_80423: require('./CourseDetails_DATA/80423.grades.jpg'),
    C_80430: require('./CourseDetails_DATA/80430.grades.jpg')
  };

  constructor(props){
    super(props);
    this._hideDetails = this._hideDetails.bind(this);

  }

  _get_url(){
    if(this.props.CourseObj.state.courseNumber === this.courseNumbers.C_53336){
      return this.links.C_53336;
    }
    if(this.props.CourseObj.state.courseNumber === this.courseNumbers.C_57108){
      return this.links.C_57108;
    }
    if(this.props.CourseObj.state.courseNumber === this.courseNumbers.C_67101){
      return this.links.C_67101;
    }
    if(this.props.CourseObj.state.courseNumber === this.courseNumbers.C_67109){
      return this.links.C_67109;
    }
    if(this.props.CourseObj.state.courseNumber === this.courseNumbers.C_67125){
      return this.links.C_67125;
    }
    if(this.props.CourseObj.state.courseNumber === this.courseNumbers.C_67316){
      return this.links.C_67316;
    }
    if(this.props.CourseObj.state.courseNumber === this.courseNumbers.C_67317){
      return this.links.C_67317;
    }
    if(this.props.CourseObj.state.courseNumber === this.courseNumbers.C_67501){
      return this.links.C_67501;
    }
    if(this.props.CourseObj.state.courseNumber === this.courseNumbers.C_67504){
      return this.links.C_67504;
    }
    if(this.props.CourseObj.state.courseNumber === this.courseNumbers.C_67925){
      return this.links.C_67925;
    }
    if(this.props.CourseObj.state.courseNumber === this.courseNumbers.C_80131){
      return this.links.C_80131;
    }
    if(this.props.CourseObj.state.courseNumber === this.courseNumbers.C_80133){
      return this.links.C_80133;
    }
    if(this.props.CourseObj.state.courseNumber === this.courseNumbers.C_80134){
      return this.links.C_80134;
    }
    if(this.props.CourseObj.state.courseNumber === this.courseNumbers.C_80135){
      return this.links.C_80135;
    }
    if(this.props.CourseObj.state.courseNumber === this.courseNumbers.C_80181){
      return this.links.C_80181;
    }
    if(this.props.CourseObj.state.courseNumber === this.courseNumbers.C_80423){
      return this.links.C_80423;
    }
    if(this.props.CourseObj.state.courseNumber === this.courseNumbers.C_80430){
      return this.links.C_80430;
    }
}

  render() {
    const details = this.props.CourseObj;
    const sideBarBgColor = {backgroundColor: details._getColor()};
    const titleColor = {color: details._getColor()};

    return (
        <div className="overlay">
          <div id="x" className="overlaybox" >
            <div className="overlaybox-sidebar" style={sideBarBgColor}>

            </div>
            <div className="overlaybox-content">
              <div className="quit" onClick={this._hideDetails}>
                <i className="fas fa-times"> </i>
              </div>
              <h1 style={titleColor}> {details.state.courseName} </h1>
              <p>מספר הקורס: {details.state.courseNumber}</p>
              <p>נ"ז: {details.state.nz}</p>
              <p>סוג הקורס: {details.state.courseType}</p>
              <p>מרצה: {details.state.professor}</p>
              <p>מתרגל/ת: {details.state.TA}</p>
              <p>ממוצע הקורס: {details.state.course_average}</p>
              <p>דרישות קדם: {details.state.prerequisites}</p>
              <p>תאריך מבחן מועד א: {details.state.exam_a_date}</p>
              <p>תאריך מבחן מועד ב: {details.state.exam_b_date}</p>
              <ToolTipPositions text="סטטיסטיקה" url={this._get_url()}/>
            </div>
          </div>
        </div>

    )
  }

  _hideDetails(event){
    event.preventDefault();
    this.props.clicked(event);
  }
}

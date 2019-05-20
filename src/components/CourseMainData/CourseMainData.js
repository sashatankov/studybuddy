import React, { Component } from 'react';
import './CourseMainData.css';
import {Card} from "grommet-controls";
import { Text } from 'grommet';


class CourseMainData extends Component {

  courseTypes = {
    REQUIRED: "חובה",
    CHOICE: "בחירה",
    REQ_CHOICE: "חובת בחירה",
  };
  colors = {
    REQUIRED: "#EF5455",
    CHOICE: "#e87778",
    REQ_CHOICE: "#edaaaa",
  };

  constructor(props){
      super(props);
      this.name = this.props.name;
      this.courseType = this.props.courseType;
      this.number = this.props.number;
      this.nz = this.props.nz;
      this.professor = this.props.professor;
      this.TA = this.props.TA;
      this.course_average = this.props.course_average;
      this.prerequisites = this.props.prerequisites;
      this.exam_a_date = this.props.exam_a_date;
      this.exam_b_date = this.props.exam_b_date;

      this._handleClick = this._handleClick.bind(this);


  }

  _getColor(){
    if(this.courseType === this.courseTypes.REQUIRED){
          return this.colors.REQUIRED;
    }
    else if(this.courseType === this.courseTypes.CHOICE){
        return this.colors.CHOICE;
    }
    else if(this.courseType === this.courseTypes.REQ_CHOICE){
        return this.colors.REQ_CHOICE;
    }

  }

  _handleClick(event){
      event.preventDefault();
      let x = document.getElementById("overlay-wrapper");
      console.log(x);
      this.props.clickedBox(this);
  }
  render() {

    return (
      <div className="course_main"
           onClick={this._handleClick}>

          <Card elevation='large'>
              <Card.CardTitle border='bottom' background='#EF5455' style={{ textAlign: 'right', flexDirection: 'row-reverse' }}>
                  {this.name}
              </Card.CardTitle>
              <Card.CardContent style={{ fontSize: 'small', textAlign: 'right', flexDirection: 'row-reverse' }}>
                  <Text color="text" style={{ marginTop: 0}}>
                      <p>מספר הקורס: {this.number}, נ"ז: {this.nz}</p>
                      <p>סוג הקורס: {this.courseType}</p>
                  </Text>
              </Card.CardContent>
          </Card>
      </div>
    )
  }
}

export default CourseMainData
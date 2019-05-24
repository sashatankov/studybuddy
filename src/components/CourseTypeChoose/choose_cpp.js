import {Grommet, Menu, TableCell, TableRow, Text} from "grommet/es6";
import React, {Component} from "react";


const customTheme = {
    global: {
        font: {
            family: "Helvetica"
        }
    },
    table: {
        body: {
            background: {
                color: "#FFFAF3",
                opacity: "strong"
            }
        }
    }
};

class Choose_cpp extends Component {

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
        this._handleClick = this._handleClick.bind(this);
        this.state = {
            courseName: "בחר/י קורס", year: "ב", semester: "א", courseType: 'חובת בחירה', courseNumber: "",
            nz: "", prerequisites: "", meetsPrerequisites: "", professor: "", TA: "",
            course_average: "", exam_a_date: "", exam_b_date: "",
            grade: ""
        };
    }

    _getColor(){
        if(this.state.courseType === this.courseTypes.REQUIRED){
            return this.colors.REQUIRED;
        }
        else if(this.state.courseType === this.courseTypes.CHOICE){
            return this.colors.CHOICE;
        }
        else if(this.state.courseType === this.courseTypes.REQ_CHOICE){
            return this.colors.REQ_CHOICE;
        }

    }

    _handleClick(event){
        event.preventDefault();
        let x = document.getElementById("overlay-wrapper");
        console.log(x);
        this.props.click(this);
    }

    render() {
        return (
            <Grommet theme={customTheme}>
                    <TableRow>
                        <TableCell color='#FFFAF3' size="small">
                            <Text alignSelf="center"> { this.state.grade } </Text>
                        </TableCell>
                        <TableCell size="medium">
                            <Text alignSelf="center"> { this.state.meetsPrerequisites } </Text>
                        </TableCell>
                        <TableCell size="small">
                            <Text alignSelf="end"> { this.state.nz } </Text>
                        </TableCell>
                        <TableCell onClick={this._handleClick} size="medium">
                            <Text alignSelf="end"> { this.state.courseNumber } </Text>
                        </TableCell>
                        <TableCell align="right" size="large">
                            <Menu alignSelf="center"
                                dropProps={{ align: { top: "bottom", right: "right" } }}
                                label={this.state.courseName}
                                items={[
                                    { label: "בחר/י קורס", onClick: () => {this.setState(
                                            {
                                                courseName: "בחר/י קורס", year: "ב", semester: "א",
                                                courseType: 'חובת בחירה', courseNumber: "", nz: "", prerequisites: "",
                                                meetsPrerequisites: "", professor: "", TA: "", course_average: "",
                                                exam_a_date: "", exam_b_date: "", grade: ""
                                            }
                                        )} },
                                    { label: "סדנת תכנות C++", onClick: () => {this.setState(
                                        {
                                            courseName: "סדנת תכנות C++", year: "ב", semester: "א",
                                            courseType: 'חובת בחירה', courseNumber: 67317, nz: 2,
                                            prerequisites: "67316, 67125", meetsPrerequisites: "לא",
                                            professor: "דר דינה שניידמן", TA: "גב אביגיל גרינשטיין",
                                            course_average: 88.73, exam_a_date: "18.1.2019", exam_b_date: "8.3.2019",
                                            grade: ""
                                            }
                                        )} },
                                    { label: "סדנת תכנות C++ קורס קיץ", onClick: () => {this.setState(
                                        {
                                            courseName: "סדנת תכנות C++ קורס קיץ", year: "ב", semester: "קיץ",
                                            courseType: 'חובת בחירה', courseNumber: 67319, nz: 2,
                                            prerequisites: "67316, 67125", meetsPrerequisites: "לא",
                                            professor: "גב אביגיל גרינשטיין", TA: "מר יוני שר",
                                            course_average: 88.73, exam_a_date: "31.8.2019", exam_b_date: "7.9.2019",
                                            grade: ""
                                            }
                                        )} }
                                ]}
                            />
                        </TableCell>
                        <TableCell size="medium">
                            <Text> { this.state.courseType } </Text>
                        </TableCell>
                        <TableCell size="small">
                            <Text alignSelf="start"> { this.state.semester } </Text>
                        </TableCell>
                        <TableCell size="xsmall">
                            <Text alignSelf="start"> { this.state.year } </Text>
                        </TableCell>
                    </TableRow>

            </Grommet>

        );
    }
}


export default Choose_cpp;
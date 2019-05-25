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


class Choose_c extends Component {

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
        this.default = {
            courseName: "בחר/י קורס", year: "ב", semester: "א", courseType: 'חובת בחירה', courseNumber: "",
            nz: "", prerequisites: "", meetsPrerequisites: "", professor: "", TA: "",
            course_average: "", exam_a_date: "", exam_b_date: "",
            grade: "", disabled: false
        };
        this.course_67316 = {
            courseName: "סדנת תכנות C", year: "ב", semester: "א",
            courseType: 'חובת בחירה', courseNumber: 67316, nz: 2,
            prerequisites: "67101", meetsPrerequisites: "כן",
            professor: "דר דינה שניידמן", TA: "גב אביגיל גרינשטיין",
            course_average: 76.73, exam_a_date: "2.12.2019",
            exam_b_date: "4.3.2019", grade: "", disabled: false
        };
        this.course_67318 = {
            courseName: "סדנת תכנות C קורס קיץ", year: "ב", semester: "קיץ",
            courseType: 'חובת בחירה', courseNumber: 67318, nz: 2,
            prerequisites: "67101", meetsPrerequisites: "כן",
            professor: "מר יוני שר", TA: "גב אביגיל גרינשטיין",
            course_average: 76.73, exam_a_date: "10.8.2019",
            exam_b_date: "15.8.2019", grade: "", disabled: false
        };
        this.one = this.default;
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

    _setOne(course){
        this.one.disabled = false;
        course.disabled = true;
        this.one = course;
        this.setState(this.one)
    }

    render() {
        return (
            <Grommet theme={customTheme}>
                    <TableRow>
                        <TableCell  color='#FFFAF3' size="small">
                            <Text alignSelf="center"> { this.one.grade } </Text>
                        </TableCell>
                        <TableCell size="medium">
                            <Text alignSelf="center"> { this.one.meetsPrerequisites } </Text>
                        </TableCell>
                        <TableCell size="small">
                            <Text alignSelf="end"> { this.one.nz } </Text>
                        </TableCell>
                        <TableCell onClick={this._handleClick} size="medium">
                            <Text alignSelf="end"> { this.one.courseNumber } </Text>
                        </TableCell>
                        <TableCell align="right" size="large">
                            <Menu alignSelf="center"
                                dropProps={{ align: { top: "bottom", right: "right" } }}
                                label={this.one.courseName}
                                items={[
                                    { label: "בחר/י קורס", onClick: () => {this._setOne(this.default)} },
                                    { label: "סדנת תכנות C", onClick: () => {this._setOne(this.course_67316)},
                                        disabled: this.course_67316.disabled },
                                    { label: "סדנת תכנות C קורס קיץ", onClick: () => {this._setOne(this.course_67318)},
                                        disabled: this.course_67318.disabled }
                                ]}
                            />
                        </TableCell>
                        <TableCell size="medium">
                            <Text> { this.one.courseType } </Text>
                        </TableCell>
                        <TableCell size="small">
                            <Text alignSelf="start"> { this.one.semester } </Text>
                        </TableCell>
                        <TableCell size="xsmall">
                            <Text alignSelf="start"> { this.one.year } </Text>
                        </TableCell>
                    </TableRow>

            </Grommet>

        );
    }
}


export default Choose_c;
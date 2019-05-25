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

class Choose_yasb_pina extends Component {

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
            courseName: "בחר/י קורס", year: "א", semester: "ב", courseType: 'אבן פינה חברה', courseNumber: "",
            nz: "", prerequisites: "", meetsPrerequisites: "", professor: "", TA: "",
            course_average: "", exam_a_date: "", exam_b_date: "",
            grade: "", disabled: false
        };
        this.course_34451 = {
            courseName: "גישות אסטרטגיות ביזמות חברתית", year: "א", semester: "ב",
            courseType: "אבן פינה חברה", courseNumber: 34451, nz: 2, prerequisites: "",
            meetsPrerequisites: "כן", professor: "דר יונתן מירוויס", TA: "",
            course_average: "", exam_a_date: "", exam_b_date: "",
            grade: "", disabled: false
        };
        this.course_57108 = {
            courseName: "מבוא לכלכלה ב", year: "א", semester: "ב",
            courseType: "אבן פינה חברה", courseNumber: 57108, nz: 4,
            prerequisites: "57107", meetsPrerequisites: "לא",
            professor: "דר איתן רגב", TA: "מר קובי מזרחי", course_average: 73.15,
            exam_a_date: "22.7.2019", exam_b_date: "18.8.2019", grade: "", disabled: false
        };
        this.course_53336 = {
            courseName: "יסודות בפסיכולוגיה חברתית", year: "א", semester: "ב",
            courseType: "אבן פינה חברה", courseNumber: 53336, nz: 2,
            prerequisites: "", meetsPrerequisites: "כן", professor: "דר דן אהרון",
            TA: "", course_average: 86, exam_a_date: "19.7.2019",
            exam_b_date: "21.8.2019", grade: "", disabled: false
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
                        <TableCell color='#FFFAF3' size="small">
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
                                    { label: "גישות אסטרטגיות ביזמות חברתית", onClick: () => {this._setOne(this.course_34451)},
                                        disabled: this.course_34451.disabled },
                                    { label: "מבוא לכלכלה ב", onClick: () => {this._setOne(this.course_57108)},
                                        disabled: this.course_57108.disabled },
                                    { label: "יסודות בפסיכולוגיה חברתית", onClick: () => {this._setOne(this.course_53336)},
                                        disabled: this.course_53336.disabled }
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


export default Choose_yasb_pina;
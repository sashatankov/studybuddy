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
        this.state = {
            courseName: "בחר/י קורס", year: "א", semester: "ב", courseType: 'אבן פינה חברה', courseNumber: "",
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
                                                courseName: "בחר/י קורס", year: "א", semester: "ב",
                                                courseType: 'אבן פינה חברה', courseNumber: "", nz: "",prerequisites: "",
                                                meetsPrerequisites: "", professor: "", TA: "", course_average: "",
                                                exam_a_date: "", exam_b_date: "", grade: ""
                                            }
                                        )} },
                                    { label: "גישות אסטרטגיות ביזמות חברתית", onClick: () => {this.setState(
                                        {
                                            courseName: "גישות אסטרטגיות ביזמות חברתית", year: "א", semester: "ב",
                                            courseType: "אבן פינה חברה", courseNumber: 34451, nz: 2, prerequisites: "",
                                            meetsPrerequisites: "כן", professor: "דר יונתן מירוויס", TA: "",
                                            course_average: "", exam_a_date: "", exam_b_date: "",
                                            grade: ""
                                            }
                                        )} },
                                    { label: "מבוא לכלכלה ב", onClick: () => {this.setState(
                                        {
                                            courseName: "מבוא לכלכלה ב", year: "א", semester: "ב",
                                            courseType: "אבן פינה חברה", courseNumber: 57108, nz: 4,
                                            prerequisites: "57107", meetsPrerequisites: "לא",
                                            professor: "דר איתן רגב", TA: "מר קובי מזרחי", course_average: 73.15,
                                            exam_a_date: "22.7.2019", exam_b_date: "18.8.2019", grade: ""
                                            }
                                        )} },
                                    { label: "יסודות בפסיכולוגיה חברתית", onClick: () => {this.setState(
                                            {
                                                courseName: "יסודות בפסיכולוגיה חברתית", year: "א", semester: "ב",
                                                courseType: "אבן פינה חברה", courseNumber: 53336, nz: 2,
                                                prerequisites: "", meetsPrerequisites: "כן", professor: "דר דן אהרון",
                                                TA: "", course_average: 86, exam_a_date: "19.7.2019",
                                                exam_b_date: "21.8.2019", grade: ""
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


export default Choose_yasb_pina;
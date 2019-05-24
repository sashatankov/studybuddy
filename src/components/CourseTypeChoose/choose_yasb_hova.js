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

class Choose_yasb_hova extends Component {

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
            courseName: "בחר/י קורס", year: "א", semester: "ב", courseType: 'חובה', courseNumber: "",
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
                                                courseType: 'חובה', courseNumber: "", nz: "", prerequisites: "",
                                                meetsPrerequisites: "", professor: "", TA: "", course_average: "",
                                                exam_a_date: "", exam_b_date: "", grade: ""
                                            }
                                        )} },
                                    { label: "מבוא לתכנות מונחה עצמים", onClick: () => {this.setState(
                                        {
                                            courseName: "מבוא לתכנות מונחה עצמים", year: "א", semester: "ב",
                                            courseType: "חובה", courseNumber: 67125, nz: 4, prerequisites: "67101",
                                            meetsPrerequisites: "כן", professor: "מר יואב קן-תור", TA: "גב נגה רוטמן",
                                            course_average: 86.51, exam_a_date: "30.6.2019", exam_b_date: "1.8.2019",
                                            grade: ""
                                            }
                                        )} },
                                    { label: "חשבון אינפיטיסימלי 2 לתלמידי מדעי המחשב", onClick: () => {this.setState(
                                        {
                                            courseName: "חשבון אינפיטיסימלי 2 לתלמידי מדעי המחשב", year: "א",
                                            semester: "ב", courseType: "חובה", courseNumber: 80133, nz: 6,
                                            prerequisites: "80131", meetsPrerequisites: "כן",
                                            professor: "מר איתמר צביק", TA: "מר אמיר בכר", course_average: 73.83,
                                            exam_a_date: "4.7.2019", exam_b_date: "6.8.2019", grade: ""
                                            }
                                        )} },
                                    { label: "מבני נתונים", onClick: () => {this.setState(
                                            {
                                                courseName: "מבני נתונים", year: "א", semester: "ב", courseType: "חובה",
                                                courseNumber: 67109, nz: 4,
                                                prerequisites: "67101, 80131 או 80177, 80181 או 80187",
                                                meetsPrerequisites: "כן", professor: "פרופ דורית אהרונוב",
                                                TA: "מר עמיחי הולצר", course_average: 69.97, exam_a_date: "28.7.2019",
                                                exam_b_date: "16.8.2019", grade: ""
                                            }
                                        )} },
                                    { label: "אלגברה לינארית 2", onClick: () => {this.setState(
                                            {
                                                courseName: "אלגברה לינארית 2", year: "א", semester: "ב",
                                                courseType: "חובה", courseNumber: 80135, nz: 6, prerequisites: "80134",
                                                meetsPrerequisites: "כן", professor: "דר קלואי פרין",
                                                TA: "מר אור לנדסבר", course_average: 74.06, exam_a_date: "17.7.2019",
                                                exam_b_date: "20.8.2019", grade: ""
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


export default Choose_yasb_hova;
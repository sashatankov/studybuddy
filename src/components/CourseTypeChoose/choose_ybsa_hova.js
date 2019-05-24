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

class Choose_ybsa_hova extends Component {

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
            courseName: "בחר/י קורס", year: "ב", semester: "א", courseType: 'חובה', courseNumber: "",
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
                                                courseType: 'חובה', courseNumber: "", nz: "", prerequisites: "",
                                                meetsPrerequisites: "", professor: "", TA: "", course_average: "",
                                                exam_a_date: "", exam_b_date: "", grade: ""
                                            }
                                        )} },
                                    { label: "אלגוריתמים", onClick: () => {this.setState(
                                        {
                                            courseName: "אלגוריתמים", year: "ב", semester: "א", courseType: "חובה",
                                            courseNumber: 67504, nz: 5,
                                            prerequisites: "67109 או 67110, 80135 או 80152, 80420 או 80430",
                                            meetsPrerequisites: "לא", professor: "פרופ אלכס סמורודינצקי",
                                            TA: "גב מורן מזרחי", course_average: 82.06, exam_a_date: "24.1.2019",
                                            exam_b_date: "27.2.2019", grade: ""
                                            }
                                        )} },
                                    { label: "סדנה במערכות מחשוב מנאנד לטטריס", onClick: () => {this.setState(
                                        {
                                            courseName: "סדנה במערכות מחשוב מנאנד לטטריס", year: "ב", semester: "א",
                                            courseType: "חובה", ourseNumber: 67925, nz: 5, meetsPrerequisites: "כן",
                                            professor: "מר אביב יעיש", course_average: 83.2, exam_a_date: "28.1.2019",
                                            exam_b_date: "4.3.2019", grade: ""
                                            }
                                        )} },
                                    { label: "מבוא להסתברות וסטטיסטיקה", onClick: () => {this.setState(
                                            {
                                                courseName: "מבוא להסתברות וסטטיסטיקה", year: "ב", semester: "א",
                                                courseType: "חובה", courseNumber: 80430, nz: 6,
                                                prerequisites: "80131 או 80177, 80114 או 80132 או 80133",
                                                meetsPrerequisites: "לא", professor: "פרופ יבגני סטרחוב",
                                                TA: "מר עמיחי למפרט", course_average: 76.99, exam_a_date: "3.2.2019",
                                                exam_b_date: "3.3.2019", grade: ""
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


export default Choose_ybsa_hova;
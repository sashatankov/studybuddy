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

class Choose_yasa_hova extends Component {

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
            courseName: "בחר/י קורס", year: "א", semester: "א", courseType: 'חובה', courseNumber: "",
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
                                                courseName: "בחר/י קורס", year: "א", semester: "א",
                                                courseType: 'חובה', courseNumber: "", nz: "", prerequisites: "",
                                                meetsPrerequisites: "", professor: "", TA: "", course_average: "",
                                                exam_a_date: "", exam_b_date: "", grade: ""
                                            }
                                        )} },
                                    { label: "מבוא למדעי המחשב", onClick: () => {this.setState(
                                        {
                                            courseName: "מבוא למדעי המחשב", year: "א", semester: "א",
                                            courseType: "חובה", courseNumber: 67101, nz: 7, meetsPrerequisites: "כן",
                                            professor: "פרופ אביב זהר", TA: "מר גלעד שטרן", course_average: 82.93,
                                            exam_a_date: "23.1.2019", exam_b_date: "22.2.2019", grade: ""
                                            }
                                        )} },
                                    { label: "חשבון אינפיטיסימלי 1", onClick: () => {this.setState(
                                        {
                                            courseName: "חשבון אינפיטיסימלי 1", year: "א", semester: "א",
                                            courseType: "חובה", courseNumber: 80131, nz: 7, meetsPrerequisites: "כן",
                                            professor: "דר איב גודין", TA: "מר דוד זיסלמן", course_average: 65.81,
                                            exam_a_date: "31.1.2019", exam_b_date: "25.2.2019", grade: ""
                                            }
                                        )} },
                                    { label: "מתמטיקה דיסקרטית", onClick: () => {this.setState(
                                            {
                                                courseName: "מתמטיקה דיסקרטית", year: "א", semester: "א",
                                                courseType: "חובה", courseNumber: 80181, nz: 5,
                                                meetsPrerequisites: "כן", professor: "דר אלכס גורביץ",
                                                TA: "מר יונתן פרוכטר", course_average: 73.34, exam_a_date: "14.2.2019",
                                                exam_b_date: "7.3.2019", grade: ""
                                            }
                                        )} },
                                    { label: "אלגברה לינארית 1", onClick: () => {this.setState(
                                            {
                                                courseName: "אלגברה לינארית 1", year: "א", semester: "א",
                                                courseType: "חובה", courseNumber: 80134, nz: 6,
                                                meetsPrerequisites: "כן", professor: "פרופ צליל סלע",
                                                TA: "מר אורי רוזנשטיין", course_average: 69.49, exam_a_date: "7.2.2019",
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


export default Choose_yasa_hova;
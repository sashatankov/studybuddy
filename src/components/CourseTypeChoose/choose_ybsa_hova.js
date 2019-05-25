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
        this.default = {
            courseName: "בחר/י קורס", year: "ב", semester: "א", courseType: 'חובה', courseNumber: "",
            nz: "", prerequisites: "", meetsPrerequisites: "", professor: "", TA: "",
            course_average: "", exam_a_date: "", exam_b_date: "",
            grade: "", disabled: false
        };
        this.course_67504 = {
            courseName: "אלגוריתמים", year: "ב", semester: "א", courseType: "חובה",
            courseNumber: 67504, nz: 5,
            prerequisites: "67109 או 67110, 80135 או 80152, 80420 או 80430",
            meetsPrerequisites: "לא", professor: "פרופ אלכס סמורודינצקי",
            TA: "גב מורן מזרחי", course_average: 82.06, exam_a_date: "24.1.2019",
            exam_b_date: "27.2.2019", grade: "", disabled: false
        };
        this.course_67925 = {
            courseName: "סדנה במערכות מחשוב מנאנד לטטריס", year: "ב", semester: "א",
            courseType: "חובה", courseNumber: 67925, nz: 5, meetsPrerequisites: "כן",
            professor: "מר אביב יעיש", course_average: 83.2, exam_a_date: "28.1.2019",
            exam_b_date: "4.3.2019", grade: "", disabled: false
        };
        this.course_80430 = {
            courseName: "מבוא להסתברות וסטטיסטיקה", year: "ב", semester: "א",
            courseType: "חובה", courseNumber: 80430, nz: 6,
            prerequisites: "80131 או 80177, 80114 או 80132 או 80133",
            meetsPrerequisites: "לא", professor: "פרופ יבגני סטרחוב",
            TA: "מר עמיחי למפרט", course_average: 76.99, exam_a_date: "3.2.2019",
            exam_b_date: "3.3.2019", grade: "", disabled: false
        };
        this.one = this.default;
        this.two = this.default;
        this.three = this.default;
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

    _setTwo(course){
        this.two.disabled = false;
        course.disabled = true;
        this.two = course;
        this.setState(this.two)
    }

    _setThree(course){
        this.three.disabled = false;
        course.disabled = true;
        this.three = course;
        this.setState(this.three)
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
                                    { label: "אלגוריתמים", onClick: () => {this._setOne(this.course_67504)},
                                        disabled: this.course_67504.disabled },
                                    { label: "סדנה במערכות מחשוב מנאנד לטטריס", onClick: () => {this._setOne(this.course_67925)},
                                        disabled: this.course_67925.disabled },
                                    { label: "מבוא להסתברות וסטטיסטיקה", onClick: () => {this._setOne(this.course_80430)},
                                        disabled: this.course_80430.disabled }
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

                <TableRow>
                    <TableCell color='#FFFAF3' size="small">
                        <Text alignSelf="center"> { this.two.grade } </Text>
                    </TableCell>
                    <TableCell size="medium">
                        <Text alignSelf="center"> { this.two.meetsPrerequisites } </Text>
                    </TableCell>
                    <TableCell size="small">
                        <Text alignSelf="end"> { this.two.nz } </Text>
                    </TableCell>
                    <TableCell onClick={this._handleClick} size="medium">
                        <Text alignSelf="end"> { this.two.courseNumber } </Text>
                    </TableCell>
                    <TableCell align="right" size="large">
                        <Menu alignSelf="center"
                              dropProps={{ align: { top: "bottom", right: "right" } }}
                              label={this.two.courseName}
                              items={[
                                  { label: "בחר/י קורס", onClick: () => {this._setTwo(this.default)} },
                                  { label: "אלגוריתמים", onClick: () => {this._setTwo(this.course_67504)},
                                      disabled: this.course_67504.disabled },
                                  { label: "סדנה במערכות מחשוב מנאנד לטטריס", onClick: () => {this._setTwo(this.course_67925)},
                                      disabled: this.course_67925.disabled },
                                  { label: "מבוא להסתברות וסטטיסטיקה", onClick: () => {this._setTwo(this.course_80430)},
                                      disabled: this.course_80430.disabled }
                              ]}
                        />
                    </TableCell>
                    <TableCell size="medium">
                        <Text> { this.two.courseType } </Text>
                    </TableCell>
                    <TableCell size="small">
                        <Text alignSelf="start"> { this.two.semester } </Text>
                    </TableCell>
                    <TableCell size="xsmall">
                        <Text alignSelf="start"> { this.two.year } </Text>
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell color='#FFFAF3' size="small">
                        <Text alignSelf="center"> { this.three.grade } </Text>
                    </TableCell>
                    <TableCell size="medium">
                        <Text alignSelf="center"> { this.three.meetsPrerequisites } </Text>
                    </TableCell>
                    <TableCell size="small">
                        <Text alignSelf="end"> { this.three.nz } </Text>
                    </TableCell>
                    <TableCell onClick={this._handleClick} size="medium">
                        <Text alignSelf="end"> { this.three.courseNumber } </Text>
                    </TableCell>
                    <TableCell align="right" size="large">
                        <Menu alignSelf="center"
                              dropProps={{ align: { top: "bottom", right: "right" } }}
                              label={this.three.courseName}
                              items={[
                                  { label: "בחר/י קורס", onClick: () => {this._setThree(this.default)} },
                                  { label: "אלגוריתמים", onClick: () => {this._setThree(this.course_67504)},
                                      disabled: this.course_67504.disabled },
                                  { label: "סדנה במערכות מחשוב מנאנד לטטריס", onClick: () => {this._setThree(this.course_67925)},
                                      disabled: this.course_67925.disabled },
                                  { label: "מבוא להסתברות וסטטיסטיקה", onClick: () => {this._setThree(this.course_80430)},
                                      disabled: this.course_80430.disabled }
                              ]}
                        />
                    </TableCell>
                    <TableCell size="medium">
                        <Text> { this.three.courseType } </Text>
                    </TableCell>
                    <TableCell size="small">
                        <Text alignSelf="start"> { this.three.semester } </Text>
                    </TableCell>
                    <TableCell size="xsmall">
                        <Text alignSelf="start"> { this.three.year } </Text>
                    </TableCell>
                </TableRow>

            </Grommet>

        );
    }
}


export default Choose_ybsa_hova;
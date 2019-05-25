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
        this.default = {
            courseName: "בחר/י קורס", year: "א", semester: "א", courseType: 'חובה', courseNumber: "",
            nz: "", prerequisites: "", meetsPrerequisites: "", professor: "", TA: "",
            course_average: "", exam_a_date: "", exam_b_date: "",
            grade: "", disabled: false
        };
        this.course_67101 = {
            courseName: "מבוא למדעי המחשב", year: "א", semester: "א",
            courseType: "חובה", courseNumber: 67101, nz: 7, meetsPrerequisites: "כן",
            professor: "פרופ אביב זהר", TA: "מר גלעד שטרן", course_average: 82.93,
            exam_a_date: "23.1.2019", exam_b_date: "22.2.2019", grade: "", disabled: false
        };
        this.course_80131 = {
            courseName: "חשבון אינפיטיסימלי 1", year: "א", semester: "א",
            courseType: "חובה", courseNumber: 80131, nz: 7, meetsPrerequisites: "כן",
            professor: "דר איב גודין", TA: "מר דוד זיסלמן", course_average: 65.81,
            exam_a_date: "31.1.2019", exam_b_date: "25.2.2019", grade: "", disabled: false
        };
        this.course_80181 = {
            courseName: "מתמטיקה דיסקרטית", year: "א", semester: "א",
            courseType: "חובה", courseNumber: 80181, nz: 5,
            meetsPrerequisites: "כן", professor: "דר אלכס גורביץ",
            TA: "מר יונתן פרוכטר", course_average: 73.34, exam_a_date: "14.2.2019",
            exam_b_date: "7.3.2019", grade: "", disabled: false
        };
        this.course_80134 = {
            courseName: "אלגברה לינארית 1", year: "א", semester: "א",
            courseType: "חובה", courseNumber: 80134, nz: 6,
            meetsPrerequisites: "כן", professor: "פרופ צליל סלע",
            TA: "מר אורי רוזנשטיין", course_average: 69.49, exam_a_date: "7.2.2019",
            exam_b_date: "3.3.2019", grade: "", disabled: false
        };
        this.one = this.default;
        this.two = this.default;
        this.three = this.default;
        this.four = this.default;
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

    _setFour(course){
        this.four.disabled = false;
        course.disabled = true;
        this.four = course;
        this.setState(this.four)
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
                                    { label: "מבוא למדעי המחשב", onClick: () => {this._setOne(this.course_67101)},
                                        disabled: this.course_67101.disabled },
                                    { label: "חשבון אינפיטיסימלי 1", onClick: () => {this._setOne(this.course_80131)},
                                        disabled: this.course_80131.disabled },
                                    { label: "מתמטיקה דיסקרטית", onClick: () => {this._setOne(this.course_80181)},
                                        disabled: this.course_80181.disabled },
                                    { label: "אלגברה לינארית 1", onClick: () => {this._setOne(this.course_80134)},
                                        disabled: this.course_80134.disabled }
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
                                  { label: "מבוא למדעי המחשב", onClick: () => {this._setTwo(this.course_67101)},
                                      disabled: this.course_67101.disabled },
                                  { label: "חשבון אינפיטיסימלי 1", onClick: () => {this._setTwo(this.course_80131)},
                                      disabled: this.course_80131.disabled },
                                  { label: "מתמטיקה דיסקרטית", onClick: () => {this._setTwo(this.course_80181)},
                                      disabled: this.course_80181.disabled },
                                  { label: "אלגברה לינארית 1", onClick: () => {this._setTwo(this.course_80134)},
                                      disabled: this.course_80134.disabled }
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
                                  { label: "מבוא למדעי המחשב", onClick: () => {this._setThree(this.course_67101)},
                                      disabled: this.course_67101.disabled },
                                  { label: "חשבון אינפיטיסימלי 1", onClick: () => {this._setThree(this.course_80131)},
                                      disabled: this.course_80131.disabled },
                                  { label: "מתמטיקה דיסקרטית", onClick: () => {this._setThree(this.course_80181)},
                                      disabled: this.course_80181.disabled },
                                  { label: "אלגברה לינארית 1", onClick: () => {this._setThree(this.course_80134)},
                                      disabled: this.course_80134.disabled }
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
                        <Text alignSelf="start"> { this.two.year } </Text>
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell color='#FFFAF3' size="small">
                        <Text alignSelf="center"> { this.four.grade } </Text>
                    </TableCell>
                    <TableCell size="medium">
                        <Text alignSelf="center"> { this.four.meetsPrerequisites } </Text>
                    </TableCell>
                    <TableCell size="small">
                        <Text alignSelf="end"> { this.four.nz } </Text>
                    </TableCell>
                    <TableCell onClick={this._handleClick} size="medium">
                        <Text alignSelf="end"> { this.four.courseNumber } </Text>
                    </TableCell>
                    <TableCell align="right" size="large">
                        <Menu alignSelf="center"
                              dropProps={{ align: { top: "bottom", right: "right" } }}
                              label={this.four.courseName}
                              items={[
                                  { label: "בחר/י קורס", onClick: () => {this._setFour(this.default)} },
                                  { label: "מבוא למדעי המחשב", onClick: () => {this._setFour(this.course_67101)},
                                      disabled: this.course_67101.disabled },
                                  { label: "חשבון אינפיטיסימלי 1", onClick: () => {this._setFour(this.course_80131)},
                                      disabled: this.course_80131.disabled },
                                  { label: "מתמטיקה דיסקרטית", onClick: () => {this._setFour(this.course_80181)},
                                      disabled: this.course_80181.disabled },
                                  { label: "אלגברה לינארית 1", onClick: () => {this._setFour(this.course_80134)},
                                      disabled: this.course_80134.disabled }
                              ]}
                        />
                    </TableCell>
                    <TableCell size="medium">
                        <Text> { this.four.courseType } </Text>
                    </TableCell>
                    <TableCell size="small">
                        <Text alignSelf="start"> { this.four.semester } </Text>
                    </TableCell>
                    <TableCell size="xsmall">
                        <Text alignSelf="start"> { this.four.year } </Text>
                    </TableCell>
                </TableRow>
            </Grommet>

        );
    }
}


export default Choose_yasa_hova;
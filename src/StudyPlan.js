import React, { Component } from 'react';
import { Heading, Table, TableBody, TableCell, TableRow, Text, Box, Accordion, AccordionPanel } from 'grommet';
import CourseMainData from './components/CourseMainData/CourseMainData.js'

const Menu = ({ click }) => (
    <Accordion>
        <Heading level={2} style={{ textAlign: 'right', flexDirection: 'row-reverse' }}>
            שנה א
        </Heading>
            <AccordionPanel arrow='#EF5455' label='סמסטר א' style={{ textAlign: 'right', flexDirection: 'row-reverse' }}>
                <Box
                    align='center'
                    justify='center'
                    background={{ color: '#EF5455', opacity: 'weak' }}
                    height='medium-large'
                >
                    <Text color='text'>
                        <Courses_YASA click={click}/>
                    </Text>
                </Box>
            </AccordionPanel>
            <AccordionPanel label='סמסטר ב' style={{ textAlign: 'right', flexDirection: 'row-reverse' }}>
                <Box
                    align='center'
                    justify='center'
                    background={{ color: '#EF5455', opacity: 'weak' }}
                    height='medium-large'
                >
                    <Text color='text'>
                        <Courses_YASB click={click}/>
                    </Text>
                </Box>
            </AccordionPanel>
        <Heading level={2} style={{ textAlign: 'right' }}>
            שנה ב
        </Heading>
            <AccordionPanel label='סמסטר א' style={{ textAlign: 'right', flexDirection: 'row-reverse' }}>
                <Box
                    align='center'
                    justify='center'
                    background={{ color: '#EF5455', opacity: 'weak' }}
                    height='medium-large'
                >
                    <Text color='text'>
                        <Courses_YBSA click={click}/>
                    </Text>
                </Box>
            </AccordionPanel>
        <AccordionPanel label='סמסטר ב' style={{ textAlign: 'right', flexDirection: 'row-reverse' }}>
            <Box
                align='center'
                justify='center'
                background={{ color: '#EF5455', opacity: 'weak' }}
                height='medium-large'
            >
                <Text color='text'>Panel 1 contents</Text>
            </Box>
        </AccordionPanel>
        <Heading level={2} style={{ textAlign: 'right' }}>
            שנה ג
        </Heading>
        <AccordionPanel label='סמסטר א' style={{ textAlign: 'right', flexDirection: 'row-reverse' }}>
            <Box
                align='center'
                justify='center'
                background={{ color: '#EF5455', opacity: 'weak' }}
                height='medium-large'
            >
                <Text color='text'>Panel 1 contents</Text>
            </Box>
        </AccordionPanel>
        <AccordionPanel label='סמסטר ב' style={{ textAlign: 'right', flexDirection: 'row-reverse' }}>
            <Box
                align='center'
                justify='center'
                background={{ color: '#EF5455', opacity: 'weak' }}
                height='medium-large'
            >
                <Text color='text'>Panel 1 contents</Text>
            </Box>
        </AccordionPanel>
    </Accordion>
);

const Course = ({ click, name, number, nz, professor, TA, course_average, prerequisites, exam_a_date, exam_b_date, type}) => (
    <CourseMainData clickedBox={ click }
                    name ={ name }
                    courseType= { type }
                    number = { number }
                    nz = { nz }
                    professor = { professor }
                    TA = { TA }
                    course_average = { course_average }
                    prerequisites = { prerequisites }
                    exam_a_date = { exam_a_date }
                    exam_b_date = { exam_b_date }

    />

);

const Courses_YASA = ({ click }) => (
    <Box align='center'>
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Course click={click} name="מבוא למדעי המחשב" number="67101" nz="7" type="חובה"
                                professor="פרופ אביב זהר" TA="מר גלעד שטרן" course_average="82.93" prerequisites="אין"
                                exam_a_date="23.1.2019" exam_b_date="22.2.2019"
                        />
                    </TableCell>
                    <TableCell>
                        <Course click={click} name="חשבון אינפיטיסימלי 1" number="80131" nz="7" type="חובה"
                                professor="דר איב גודין" TA="מר דוד זיסלמן" course_average="65.81" prerequisites="אין"
                                exam_a_date="31.1.2019" exam_b_date="25.2.2019"
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Course click={click} name="מתמטיקה דיסקרטית" number="80181" nz="5" type="חובה"
                                professor="דר אלכס גורביץ" TA="מר יונתן פרוכטר" course_average="73.34" prerequisites="אין"
                                exam_a_date="14.2.2019" exam_b_date="7.3.2019"
                        />
                    </TableCell>
                    <TableCell>
                        <Course click={click} name="אלגברה לינארית 1" number="80134" nz="6" type="חובה"
                                professor="פרופ צליל סלע" TA="מר אורי רוזנשטיין" course_average="69.49" prerequisites="אין"
                                exam_a_date="7.2.2019" exam_b_date="3.3.2019"
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Box>
);

const Courses_YASB = ({ click }) => (
    <Box align='center'>
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Course click={click} name="מבוא לתכנות מונחה עצמים" number="67125" nz="4" type="חובה"
                                professor="מר יואב קן-תור" TA="גב נגה רוטמן" course_average="86.51" prerequisites="67101 ----- עומד בדרישות"
                                exam_a_date="30.6.2019" exam_b_date="1.8.2019"
                        />
                    </TableCell>
                    <TableCell>
                        <Course click={click} name="חשבון אינפיטיסימלי 2 לתלמידי מדעי המחשב" number="80133" nz="6" type="חובה"
                                professor="מר איתמר צביק" TA="מר אמיר בכר" course_average="73.83" prerequisites="80131 ----- עומד בדרישות"
                                exam_a_date="4.7.2019" exam_b_date="6.8.2019"
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Course click={click} name="מבני נתונים" number="67109" nz="4" type="חובה"
                                professor="פרופ דורית אהרונוב" TA="מר עמיחי הולצר" course_average="69.97" prerequisites="67101, 80131 או 80177, 80181 או 80187 ----- עומד בדרישות"
                                exam_a_date="28.7.2019" exam_b_date="16.8.2019"
                        />
                    </TableCell>
                    <TableCell>
                        <Course click={click} name="אלגברה לינארית 2" number="80135" nz="6" type="חובה"
                                professor="דר קלואי פרין" TA="מר אור לנדסבר" course_average="74.06" prerequisites="80134 ----- עומד בדרישות"
                                exam_a_date="17.7.2019" exam_b_date="20.8.2019"
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Box>
);

const Courses_YBSA = ({ click }) => (
    <Box align='center'>
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Course click={click} name="אלגוריתמים" number="67504" nz="5" type="חובה"
                                professor="פרופ אלכס סמורודינצקי" TA="גב מורן מזרחי" course_average="82.06" prerequisites="67109 או 67110, 80135 או 80152, 80420 או 80430"
                                exam_a_date="24.1.2019" exam_b_date="27.2.2019"
                        />
                    </TableCell>
                    <TableCell>
                        <Course click={click} name="סדנה במערכות מחשוב מנאנד לטטריס" number="67925" nz="5" type="חובה"
                                professor="מר אביב יעיש" TA="" course_average="83.29" prerequisites="אין"
                                exam_a_date="28.1.2019" exam_b_date="4.3.2019"
                        />
                    </TableCell>
                    <TableCell>
                        <Course click={click} name="מבוא להסתברות וסטטיסטיקה" number="80430" nz="6" type="חובה"
                                professor="פרופ יבגני סטרוב" TA="מר עמיחי למפרט" course_average="76.99" prerequisites="80131 או 80177, 80114 או 80132 או 80133"
                                exam_a_date="3.2.2019" exam_b_date="3.3.2019"
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Course click={click} name="סדנת תכנות C" number="67316" nz="2" type="חובת בחירה"
                                professor="דר דינה שניידמן" TA="גב אביגיל גרינשטיין" course_average="76.73" prerequisites="67101 ----- עומד בדרישות"
                                exam_a_date="2.12.2019" exam_b_date="4.3.2019"
                        />
                    </TableCell>
                    <TableCell>
                        <Course click={click} name="סדנת תכנות C++" number="67317" nz="2" type="חובת בחירה"
                                professor="דר דינה שניידמן" TA="גב אביגיל גרינשטיין" course_average="88.73" prerequisites="67316, 67125"
                                exam_a_date="18.1.2019" exam_b_date="8.3.2019"
                        />
                    </TableCell>
                    <TableCell>
                        <Course click={click} name="מבוא ללוגיקה" number="80423" nz="4" type="חובת בחירה"
                                professor="פרופ איליה ריפס" TA="מר אור יער" course_average="78.31" prerequisites="80134 ----- עומד בדרישות"
                                exam_a_date="30.1.2019" exam_b_date="26.2.2019"
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Box>
);

class StudyPlan extends Component {

    constructor(props){
        super(props);
        this._showDetails = this._showDetails.bind(this);
    }
    _showDetails(CourseDetails){
        this.props.clicked(CourseDetails);
    }

    render() {
        return (
            <div>
                <div className='menu'>
                    <Menu click={this._showDetails.bind(this)}/>
                </div>
            </div>

        );
    }
}

export default StudyPlan;


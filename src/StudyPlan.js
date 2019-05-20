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
                                professor="פרופ אביב זהר" TA="מר גלעד שטרן" course_average="79.9" prerequisites="אין"
                                exam_a_date="23.1.2019" exam_b_date="22.2.2019"
                        />
                    </TableCell>
                    <TableCell>
                        <Course click={click} name="חשבון אינפיטיסימלי 1" number="80131" nz="7" type="חובה"
                                professor="דר איב גודין" TA="מר דוד זיסלמן" course_average="64.47" prerequisites="אין"
                                exam_a_date="31.1.2019" exam_b_date="25.2.2019"
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Course click={click} name="מתמטיקה דיסקרטית" number="80181" nz="5" type="חובה"
                                professor="דר אלכס גורביץ" TA="מר יונתן פרוכטר" course_average="75.94" prerequisites="אין"
                                exam_a_date="14.2.2019" exam_b_date="7.3.2019"
                        />
                    </TableCell>
                    <TableCell>
                        <Course click={click} name="אלגברה לינארית 1" number="80134" nz="6" type="חובה"/>
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
                        <Course click={click} name="מבוא לתכנות מונחה עצמים" number="67125" nz="4" type="חובה"/>
                    </TableCell>
                    <TableCell>
                        <Course click={click} name="חשבון אינפיטיסימלי 2 לתלמידי מדעי המחשב" number="80133" nz="6" type="חובה"/>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Course click={click} name="מבני נתונים" number="67109" nz="4" type="חובה"/>
                    </TableCell>
                    <TableCell>
                        <Course click={click} name="אלגברה לינארית 2" number="80135" nz="6" type="חובה"/>
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
                        <Course click={click} name="אלגוריתמים" number="67504" nz="5" type="חובה"/>
                    </TableCell>
                    <TableCell>
                        <Course click={click} name="סדנה במערכות מחשוב מנאנד לטטריס" number="67925" nz="5" type="חובה"/>
                    </TableCell>
                    <TableCell>
                        <Course click={click} name="מבוא להסתברות וסטטיסטיקה" number="80430" nz="6" type="חובה"/>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Course click={click} name="סדנת תכנות C" number="67316" nz="2" type="חובה"/>
                    </TableCell>
                    <TableCell>
                        <Course click={click} name="סדנת תכנות C++" number="67317" nz="2" type="חובה"/>
                    </TableCell>
                    <TableCell>
                        <Course click={click} name="מבוא ללוגיקה" number="80423" nz="4" type="חובה"/>
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


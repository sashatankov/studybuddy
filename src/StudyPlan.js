import React, { Component } from 'react';
import { Heading, Table, TableBody, TableCell, TableRow, Text, Box, Accordion, AccordionPanel } from 'grommet';
import { Card } from 'grommet-controls';

const Menu = () => (
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
                        <Courses_YASA/>
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
                        <Courses_YASB/>
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
                        <Courses_YBSA/>
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

const Course = ({ name, number, nz, professor, TA, course_average, prerequisites, exam_a_date, exam_b_date, type}) => (
    <Card elevation='large'>
        <Card.CardTitle border='bottom' background='#EF5455' style={{ textAlign: 'right', flexDirection: 'row-reverse' }}>
            {name}
        </Card.CardTitle>
        <Card.CardContent style={{ fontSize: 'small', textAlign: 'right', flexDirection: 'row-reverse' }}>
            <Text color="text" style={{ marginTop: 0}}>
                <p>מספר הקורס: {number}, נ"ז: {nz}</p>
                <p>סוג הקורס: {type}</p>
            </Text>
        </Card.CardContent>
    </Card>
);

const Courses_YASA = () => (
    <Box align='center'>
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Course name="מבוא למדעי המחשב" number="67101" nz="7" type="חובה"/>
                    </TableCell>
                    <TableCell>
                        <Course name="חשבון אינפיטיסימלי 1" number="80131" nz="7" type="חובה"/>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Course name="מתמטיקה דיסקרטית" number="80181" nz="5" type="חובה"/>
                    </TableCell>
                    <TableCell>
                        <Course name="אלגברה לינארית 1" number="80134" nz="6" type="חובה"/>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Box>
);

const Courses_YASB = () => (
    <Box align='center'>
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Course name="מבוא לתכנות מונחה עצמים" number="67125" nz="4" type="חובה"/>
                    </TableCell>
                    <TableCell>
                        <Course name="חשבון אינפיטיסימלי 2 לתלמידי מדעי המחשב" number="80133" nz="6" type="חובה"/>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Course name="מבני נתונים" number="67109" nz="4" type="חובה"/>
                    </TableCell>
                    <TableCell>
                        <Course name="אלגברה לינארית 2" number="80135" nz="6" type="חובה"/>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Box>
);

const Courses_YBSA = () => (
    <Box align='center'>
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Course name="אלגוריתמים" number="67504" nz="5" type="חובה"/>
                    </TableCell>
                    <TableCell>
                        <Course name="סדנה במערכות מחשוב מנאנד לטטריס" number="67925" nz="5" type="חובה"/>
                    </TableCell>
                    <TableCell>
                        <Course name="מבוא להסתברות וסטטיסטיקה" number="80430" nz="6" type="חובה"/>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Course name="סדנת תכנות C" number="67316" nz="2" type="חובה"/>
                    </TableCell>
                    <TableCell>
                        <Course name="סדנת תכנות C++" number="67317" nz="2" type="חובה"/>
                    </TableCell>
                    <TableCell>
                        <Course name="מבוא ללוגיקה" number="80423" nz="4" type="חובה"/>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Box>
);

class StudyPlan extends Component {
    render() {
        return (
            <div>
                <div className='menu'>
                    <Menu/>
                </div>
            </div>

        );
    }
}

export default StudyPlan;


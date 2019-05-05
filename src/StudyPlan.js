import React, { Component } from 'react';
import { Heading, Table, TableBody, TableCell, TableRow, Text, Box, Accordion, AccordionPanel } from 'grommet';
import { Card } from 'grommet-controls';

const Menu = () => (
    <Accordion>
        <Heading level={2} style={{ textAlign: 'right', flexDirection: 'row-reverse' }}>
            שנה א
        </Heading>
            <AccordionPanel label='סמסטר א' style={{ textAlign: 'right', flexDirection: 'row-reverse' }}>
                <Box
                    align='center'
                    justify='center'
                    background={{ color: '#EF5455', opacity: 'weak' }}
                    height='small'
                >
                    <Text color='text'>Panel 1 contents</Text>
                </Box>
            </AccordionPanel>
            <AccordionPanel label='סמסטר ב' style={{ textAlign: 'right', flexDirection: 'row-reverse' }}>
                <Box
                    align='center'
                    justify='center'
                    background={{ color: '#EF5455', opacity: 'weak' }}
                    height='small'
                >
                    <Text color='text'>Panel 1 contents</Text>
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
                    height='medium'
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
                height='small'
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
                height='small'
            >
                <Text color='text'>Panel 1 contents</Text>
            </Box>
        </AccordionPanel>
        <AccordionPanel label='סמסטר ב' style={{ textAlign: 'right', flexDirection: 'row-reverse' }}>
            <Box
                align='center'
                justify='center'
                background={{ color: '#EF5455', opacity: 'weak' }}
                height='small'
            >
                <Text color='text'>Panel 1 contents</Text>
            </Box>
        </AccordionPanel>
    </Accordion>
);

const Course = ({ name, number, nz, professor, TA, course_average, prerequisites, exam_a_date, exam_b_date}) => (
    <Card elevation='large'>
        <Card.CardTitle border='bottom' background='#EF5455' style={{ textAlign: 'right', flexDirection: 'row-reverse' }}>
            {name}
        </Card.CardTitle>
        <Card.CardContent style={{ textAlign: 'right', flexDirection: 'row-reverse' }}>
            מספר הקורס:  {number} , נ"ז:  {nz}
        </Card.CardContent>
    </Card>
);

const Courses_YBSA = () => (
    <Box align='center'>
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Course name="אלגוריתמים" number="67504" nz="5"/>
                    </TableCell>
                    <TableCell>
                        <Course name="סדנה במערכות מחשוב מנאנד לטטריס" number="67925" nz="5"/>
                    </TableCell>
                    <TableCell>
                        <Course name="מבוא להסתברות וסטטיסטיקה" number="80430" nz="6" professor="פרופ' יבגני סטרחוב"/>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Course name="סדנת תכנות C" number="67316" nz="2"/>
                    </TableCell>
                    <TableCell>
                        <Course name="סדנת תכנות C++" number="67317" nz="2"/>
                    </TableCell>
                    <TableCell>
                        <Course name="מבוא ללוגיקה" number="80423" nz="4"/>
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


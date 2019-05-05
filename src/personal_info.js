import React, { Component } from 'react';
import {Box, Text, Meter, TableBody, TableRow, TableCell, Table} from 'grommet';


const GeneralInfo = () => (
    <Box
        fill={true}
        flex={true}
        border={{ color: '#EF5455', size: 'small' }}
        pad='medium'
    >
        <Text color='text' style={{ textAlign: 'right', flexDirection: 'row-reverse' }}>
            פקולטה: ביה"ס להנדסה ולמדעי המחשב
        </Text>
        <Text color='text' style={{ textAlign: 'right', flexDirection: 'row-reverse' }}>
            חוג לימודים: מדעי המחשב חד-חוגי מורחב
        </Text>
        <Text color='text' style={{ textAlign: 'right', flexDirection: 'row-reverse' }}>
            שנת לימודים: ב
        </Text>
        <Text color='text' style={{ textAlign: 'right', flexDirection: 'row-reverse' }}>
            ממוצע: 83.2
        </Text>
    </Box>
);

const Progress = () => (
    <Box align='center' pad='large'>
        <Box>
            <Text color='text' style={{ fontWeight:'bold', textAlign: 'center', flexDirection: 'row-reverse' }}>
                דרישות המסלול
            </Text>
            <Text color='text' style={{ textAlign: 'center', flexDirection: 'row-reverse' }}>
                מספר נקודות זכות בסה"כ: 134
            </Text>
            <Meter
                type='circle'
                size='small'
                thickness='large'
                background={{ color: 'light-4', opacity: 'medium' }}
                round={true}
                values={[{ value: 60, label: 'sixty', color:'#EF5455' }]}
            />
        </Box>
        <Box align='center' pad='medium'/>
        <Box>
            <Text color='text' style={{ fontWeight:'bold', textAlign: 'center', flexDirection: 'row-reverse' }}>
                נקודות זכות בחוג
            </Text>
            <Text color='text' style={{ textAlign: 'center', flexDirection: 'row-reverse' }}>
                מספר נקודות זכות בסה"כ: 120
            </Text>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Meter
                                size='small'
                                thickness='medium'
                                background={{ color: 'light-4', opacity: 'medium' }}
                                round={false}
                                values={[{ value: 55, label: 'fifty-five', color:'#EF5455' }]}
                            />
                        </TableCell>
                        <TableCell>
                            88
                        </TableCell>
                        <TableCell>
                            חובה
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Meter
                                size='small'
                                thickness='medium'
                                background={{ color: 'light-4', opacity: 'medium' }}
                                round={false}
                                values={[{ value: 0, label: 'zero', color:'#EF5455' }]}
                            />
                        </TableCell>
                        <TableCell>
                            16
                        </TableCell>
                        <TableCell>
                            חובת בחירה
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Meter
                                size='small'
                                thickness='medium'
                                background={{ color: 'light-4', opacity: 'medium' }}
                                round={false}
                                values={[{ value: 0, label: 'zero', color:'#EF5455' }]}
                            />
                        </TableCell>
                        <TableCell>
                            16
                        </TableCell>
                        <TableCell>
                            בחירה
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
        <Box align='center' pad='medium'/>
        <Box>
            <Text color='text' style={{ fontWeight:'bold', textAlign: 'center', flexDirection: 'row-reverse' }}>
                לימודים משלימים
            </Text>
            <Text color='text' style={{ textAlign: 'center', flexDirection: 'row-reverse' }}>
                מספר נקודות זכות בסה"כ: 6
            </Text>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Meter
                                size='small'
                                thickness='medium'
                                background={{ color: 'light-4', opacity: 'medium' }}
                                round={false}
                                values={[{ value: 0, label: 'zero', color:'#EF5455' }]}
                            />
                        </TableCell>
                        <TableCell>
                            6
                        </TableCell>
                        <TableCell>
                            משלימים
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
        <Box align='center' pad='medium'/>
        <Box>
            <Text color='text' style={{ fontWeight:'bold', textAlign: 'center', flexDirection: 'row-reverse' }}>
                אבני פינה
            </Text>
            <Text color='text' style={{ textAlign: 'center', flexDirection: 'row-reverse' }}>
                מספר נקודות זכות בסה"כ: 8
            </Text>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Meter
                                size='small'
                                thickness='medium'
                                background={{ color: 'light-4', opacity: 'medium' }}
                                round={false}
                                values={[{ value: 50, label: 'fifty-', color:'#EF5455' }]}
                            />
                        </TableCell>
                        <TableCell>
                            4
                        </TableCell>
                        <TableCell>
                            אבני פינה רוח
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Meter
                                size='small'
                                thickness='medium'
                                background={{ color: 'light-4', opacity: 'medium' }}
                                round={false}
                                values={[{ value: 0, label: 'zero', color:'#EF5455' }]}
                            />
                        </TableCell>
                        <TableCell>
                            4
                        </TableCell>
                        <TableCell>
                            אבני פינה חברה
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    </Box>

);


class PersonalInfo extends Component {
    render() {
        return (
            <div>
                <div>
                    <GeneralInfo/>
                </div>
                <div>
                    <Progress/>
                </div>
            </div>
        );
    }
}

export default PersonalInfo;
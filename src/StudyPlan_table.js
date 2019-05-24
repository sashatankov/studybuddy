
import React, {Component} from "react";
import './StudyPlan_table.css';
import Choose_c from './components/CourseTypeChoose/choose_c';
import Choose_cpp from './components/CourseTypeChoose/choose_cpp';
import Choose_yasa_hova from './components/CourseTypeChoose/choose_yasa_hova';
import Choose_yasb_hova from './components/CourseTypeChoose/choose_yasb_hova';
import Choose_yasb_pina from './components/CourseTypeChoose/choose_yasb_pina';
import Choose_ybsa_hova from './components/CourseTypeChoose/choose_ybsa_hova';
import Choose_logic from './components/CourseTypeChoose/choose_logic';

import {
    Box,
    Grommet,
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
    Text
} from "grommet";
import { columns } from "./data";


const customTheme = {
    global: {
        font: {
            family: "Helvetica"
        }
    },
    table: {
        body: {
            align: "center",
            pad: { horizontal: "medium", vertical: "xsmall" },
            border: "horizontal"
        },
        extend: () => `font-family: Arial`,
        footer: {
            align: "start",
            border: undefined,
            pad: { horizontal: "large", vertical: "small" },
            verticalAlign: "bottom"
        },
        header: {
            align: "center",
            border: "bottom",
            fill: "horizontal",
            pad: { horizontal: "large", vertical: "xsmall" },
            verticalAlign: "bottom",
            background: {
                color: "#EF5455",
                opacity: "strong"
            }
        }
    }
};


const CustomThemeTable = ({ click }) => (
    <Grommet theme={customTheme}>
        <Box align="center" pad="xsmall">
            <Table scrollable>
                <TableHeader>
                    <TableRow>
                        {columns.map(c => (
                            <TableCell key={c.property} scope="col" size={c.size}>
                                <Text alignSelf={c.align}>{c.label}</Text>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHeader>
            </Table>
            <Table>
                <TableBody>
                    <TableRow>
                        <Choose_yasa_hova click={click}/>
                    </TableRow>
                    <TableRow>
                        <Choose_yasa_hova click={click}/>
                    </TableRow>
                    <TableRow>
                        <Choose_yasa_hova click={click}/>
                    </TableRow>
                    <TableRow>
                        <Choose_yasa_hova click={click}/>
                    </TableRow>
                    <TableRow>
                        <Choose_yasb_hova click={click}/>
                    </TableRow>
                    <TableRow>
                        <Choose_yasb_hova click={click}/>
                    </TableRow>
                    <TableRow>
                        <Choose_yasb_hova click={click}/>
                    </TableRow>
                    <TableRow>
                        <Choose_yasb_hova click={click}/>
                    </TableRow>
                    <TableRow>
                        <Choose_yasb_pina click={click}/>
                    </TableRow>
                    <TableRow>
                        <Choose_ybsa_hova click={click}/>
                    </TableRow>
                    <TableRow>
                        <Choose_ybsa_hova click={click}/>
                    </TableRow>
                    <TableRow>
                        <Choose_ybsa_hova click={click}/>
                    </TableRow>
                    <TableRow>
                        <Choose_logic click={click}/>
                    </TableRow>
                    <TableRow>
                        <Choose_c click={click}/>
                    </TableRow>
                    <TableRow>
                        <Choose_cpp click={click}/>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    </Grommet>
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
                    <CustomThemeTable click={this._showDetails.bind(this)}/>
                </div>
            </div>

        );
    }
}


export default StudyPlan;

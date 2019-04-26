import React from 'react';

import Card from '../Card/card';
import CourseName from './CourseName/courseName';
import Arrow from './Arrow/arrow';
import CourseDetails from './CourseDetails/couerseDetails';

import './dropdownCard.scss';

class DropdownCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arrowToggled : false
        };
    }

    toggleArrow() {
        this.setState(prevState => {
            return { arrowToggled: !prevState.arrowToggled };
        });
    }

    render(){
        let{
            name,
            number,
            nz,
            professor,
            TA,
            course_average,
            prerequisites,
            exam_a_date,
            exam_b_date,
            type,
            messageOnToggled,
            messageOnUntoggled,
            buttonColor,
            bgColor
        } = this.props;
        return(
            <Card className='dropdown-card'>
                <CourseName
                    name={ name }
                    number={ number }
                    nz={ nz }
                    bgColor={ bgColor }
                />

                {
                    this.state.arrowToggled === true  ? <React.Fragment>
                        <button className='button' style={{
                            backgroundColor : buttonColor,
                        }}>
                            <Arrow
                                onClick={this.toggleArrow.bind(this)}
                                position={ this.state.arrowToggled }
                                message={ messageOnUntoggled }
                            />
                        </button>

                        <CourseDetails
                            professor={ professor }
                            TA={ TA }
                            course_average={ course_average }
                            prerequisites={ prerequisites }
                            exam_a_date={ exam_a_date }
                            exam_b_date={ exam_b_date }
                            type={ type }
                            bgColor={ bgColor }
                        />
                    </React.Fragment>   : <button className='button' style={{
                        backgroundColor : buttonColor
                    }}>
                        <Arrow
                            onClick={this.toggleArrow.bind(this)}
                            position={ this.state.arrowToggled }
                            message={ messageOnToggled }
                        />
                    </button>
                }

            </Card>
        );
    }
}
export default DropdownCard;
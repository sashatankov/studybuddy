import React from 'react';

import Card from '../../Card/card';

import './couerseDetails.scss';

class CourseDetails extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let{
            professor,
            TA,
            course_average,
            prerequisites,
            exam_a_date,
            exam_b_date,
            type,
            bgColor
        } = this.props;
        return(
            <div className='CDroot' style={{
                backgroundColor : `rgba(${bgColor}, 0.25)`
            }}>

                <div className='professor'>
                    {professor}
                </div>

                <div className='TA'>
                    {TA}
                </div>

                <div className='average'>
                    {course_average}
                </div>

                <div className='prerequisites'>
                    {prerequisites}
                </div>

                <div className='exam a date'>
                    {exam_a_date}
                </div>

                <div className='exam b date'>
                    {exam_b_date}
                </div>

                <div className='type'>
                    {type}
                </div>


            </div>
        );
    }
}

export default CourseDetails;
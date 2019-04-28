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
            course_average_link,
            prerequisites,
            exam_a_date,
            exam_b_date,
            type,
        } = this.props;
        return(
            <div className='CDroot'>

                <div className='professor'>
                    {professor}
                </div>

                <div className='TA'>
                    {TA}
                </div>

                <div className='average'>
                    <a href={course_average_link}>{course_average}</a>
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
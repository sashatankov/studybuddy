import React from 'react';

import './courseName.scss';

class CourseName extends React.Component {
    render(){
        let{
            name,
            number,
            nz,
            bgColor
        } = this.props;

        return(
            <div className='CNroot' style={{
                backgroundColor : `rgb(${ bgColor })`
            }}>

                <div className='name'>
                    {name}
                </div>

                <div className='number'>
                    {number}
                </div>

                <div className='nz'>
                    {nz}
                </div>

            </div>
        );
    }
}
export default CourseName;
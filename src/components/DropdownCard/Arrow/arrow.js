import React from 'react';
import Card from '../../Card/card';
import PropTypes from 'prop-types';

import ArrowUp from './ArrowUp/arrowUp';
import ArrowDown from './ArrowDown/arrowDown';

import './arrow.scss';


class Arrow extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let{
            onClick,
            position,
            message
        } = this.props;
        return (
            <a onClick={onClick} className='CDroot'>
                {
                    position === false
                        ? <React.Fragment><ArrowDown /> { message }</React.Fragment>
                        : <React.Fragment><ArrowUp /> { message }</React.Fragment>
                }
            </a>
        );
    }
}


export default Arrow;
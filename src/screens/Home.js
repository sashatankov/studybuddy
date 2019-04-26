import React, { Component } from 'react';
import './Home.css';
import Message from '../Message';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <navigation/>
                {/*just for example. to remove later*/}
                    <Message headline="ביטול שיעור" content="השיעור באלגברה לינארית בתאריך 10.4.2019 מבוטל"/>

            </div>
        );
    }
}

export default Home;

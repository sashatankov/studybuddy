import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader/index';
import DropdownCard from './components/DropdownCard/dropdownCard';

import './StudyPlan.scss';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    );
};

class studyPlan extends Component {
    render()
    {
        return (
            <div>
                <div>
                    <h2>Year B - Semester A</h2>
                    <div className='card-container'>
                        <DropdownCard
                            name="אלגוריתמים"
                            number="67504"
                            nz="5"
                            professor=""
                            TA=""
                            course_average=""
                            prerequisites=""
                            exam_a_date=""
                            exam_b_date=""
                            type=""
                            messageOnToggled="Details"
                            messageOnUntoggled="Show less"
                        />
                        <DropdownCard
                            name="סדנה במערכות מחשוב מנאנד לטטריס"
                            number="67925"
                            nz="5"
                            professor=""
                            TA=""
                            course_average=""
                            prerequisites=""
                            exam_a_date=""
                            exam_b_date=""
                            type=""
                            messageOnToggled="Details"
                            messageOnUntoggled="Show less"
                        />
                        <DropdownCard
                            name="מבוא להסתברות וסטטיסטיקה"
                            number="80430"
                            nz="6"
                            professor="פרופ' יבגני סטרחוב"
                            TA="מר יואל גרינשפון"
                            course_average="76.9"
                            course_average_link="https://hujistats.co.il/"
                            prerequisites="80131 - חשבון אינפיטיסימלי (1), 80133 - חשבון אינפיטיסימלי 2 לתלמידי מדעי המחשב"
                            exam_a_date="03/02/2019"
                            exam_b_date="03/03/2019"
                            type="קורס חובה"
                            messageOnToggled="Details"
                            messageOnUntoggled="Show less"
                        />
                        <DropdownCard
                            name="סדנת תכנות C"
                            number="67316"
                            nz="2"
                            professor=""
                            TA=""
                            course_average=""
                            prerequisites=""
                            exam_a_date=""
                            exam_b_date=""
                            type=""
                            messageOnToggled="Details"
                            messageOnUntoggled="Show less"
                        />
                        <DropdownCard
                            name="סדנת תכנות C++"
                            number="67317"
                            nz="2"
                            professor=""
                            TA=""
                            course_average=""
                            prerequisites=""
                            exam_a_date=""
                            exam_b_date=""
                            type=""
                            messageOnToggled="Details"
                            messageOnUntoggled="Show less"
                        />
                        <DropdownCard
                            name="מבוא ללוגיקה"
                            number="80423"
                            nz="4"
                            professor=""
                            TA=""
                            course_average=""
                            prerequisites=""
                            exam_a_date=""
                            exam_b_date=""
                            type=""
                            messageOnToggled="Details"
                            messageOnUntoggled="Show less"
                        />

                    </div>
                </div>
            </div>
        );
    }
}



if (module.hot) {
    module.hot.accept( () => {
        render(studyPlan);
    });
}

export default studyPlan;
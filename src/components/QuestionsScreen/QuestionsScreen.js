import React, { Component } from 'react';
import Question from './Question/Question';
export default class QuestionsScreen extends Component {


  constructor(props){
    super(props);
    this._handleSubmitQuestions = this._handleSubmitQuestions.bind(this);
  }
  render() {
    return (
      <div className="questionsscreen">
        <form>
            <Question text="תוך כמה שנים אתה רוצה לסיים את לימודיך?" type="radio"
                      name="q1" values={["3 שנים", "3.5-4 שנים", "4 שנים ומעלה"]}/>
            <Question text="האם אתה מתכנן לעבוד תוך כדי הלימודים?" type="radio"
                      name="q2" values={["כן, המשרה מלאה", "כן, במשרה חלקית", "לא"]}/>
            <Question text="באיזה סוג מסלול אתב לומד?" type="radio"
                      name="q3" values={["חד חוגי", "דו חוגי", "חד חוגי מורחב"]}/>

            <input type="submit" value="בנה מערכת מומלצת" onClick={(e) => this._handleSubmitQuestions(e)}/>
        </form>
      </div>
    )
  }


    _handleSubmitQuestions(e) {
        this.props.submitHandle(e);
    }
}

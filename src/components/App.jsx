import { Component } from 'react';
import FeedbackOptions from './Feedback/feedbackOptions/FeedbackOptions';
import Statistics from './Feedback/statistics/Statistics';
import Section from './Feedback/section/Section';
import Notification from './Feedback/notification/Notification';

import style from './app.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  curentFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, total }) => {
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage({ good, total });

    return (
      <div className={style.box}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.curentFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback." />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Notification from "./components/Notification/Notification";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateCountFeedback = (option) => {
    this.setState((prevState) => {
      return { [option]: prevState[option] + 1 };
    });
  };
  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();

    return total ? Math.floor((this.state.good / total) * 100).toFixed(0) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className="container">
        <Section title="Оставьте отзыв о нашей компании">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.updateCountFeedback}
          />
        </Section>

        <Section title="Отзывы наших клиентов: ">
          {total === 0 ? (
            <Notification message="Отзывов пока нет..." />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

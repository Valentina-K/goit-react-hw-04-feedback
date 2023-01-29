import { useState, useEffect, useRef } from 'react';
import { Container, Button } from './App.styled';
import Section from './Section';
import Notification from './Notification';
import Statistics from './Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalFeedback = useRef(0);
  const positiveFeedback = useRef('');
  useEffect(() => {
    function countTotalFeedback() {
      return good + neutral + bad;
    }
    function countPositiveFeedbackPercentage() {
      return `${Math.round((good / countTotalFeedback()) * 100)}%`;
    }
    console.log(good, neutral, bad);

    totalFeedback.current = countTotalFeedback();
    positiveFeedback.current = countPositiveFeedbackPercentage();
    console.log(totalFeedback.current);
  }, [good, neutral, bad]);
  return (
    <Container>
      <Section title="Please leave feedback">
        <Button onClick={() => setGood(good + 1)}>Good</Button>
        <Button onClick={() => setNeutral(neutral + 1)}>Neutral</Button>
        <Button onClick={() => setBad(bad + 1)}>Bad</Button>
      </Section>
      <Section title="Statistics">
        {totalFeedback.current > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback.current}
            positivePercentage={positiveFeedback.current}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

/* class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    `${Math.round((this.state.good / this.countTotalFeedback()) * 100)}%`;

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.updateFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
} */

export default App;

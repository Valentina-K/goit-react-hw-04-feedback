import PropTypes from 'prop-types';
import { StatInfo } from './Satistics.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <StatInfo>Good: {good}</StatInfo>
    <StatInfo>Neutral: {neutral}</StatInfo>
    <StatInfo>Bad: {bad}</StatInfo>
    <StatInfo>Total: {total}</StatInfo>
    <StatInfo>Positive: {positivePercentage}</StatInfo>
  </div>
);
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

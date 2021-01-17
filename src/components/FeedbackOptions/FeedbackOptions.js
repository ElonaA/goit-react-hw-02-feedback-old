import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);

  return (
    <div className={s.inner}>
      {keys.map((key) => (
        <button
          key={key}
          className={s.button}
          onClick={() => {
            onLeaveFeedback(key);
          }}
        >
          {key.slice(0, 1).toLocaleUpperCase() + key.slice(1)}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,

  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

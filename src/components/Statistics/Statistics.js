import PropTypes from "prop-types";
import s from "./Statistics.module.css";

function Statistics({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = 0,
}) {
  return (
    <div className={s.statistics}>
      <div className={s.inner}>
        <p className={s.review}>😍 Отлично. Вы супер! — {good}</p>
        <p className={s.review}>
          🙂 Нормально, но могло быть лучше — {neutral}
        </p>
        <p className={s.review}>🤬 Ужасно. Дайте книгу жалоб! — {bad}</p>
      </div>

      <div className={s.total}>
        <p className={s.count}> ⭐ Общее колличество отзывов — {total} .</p>
        <p className={s.percentage}>
          {" "}
          🔥 Из них положительных — {positivePercentage}% .
        </p>
      </div>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;

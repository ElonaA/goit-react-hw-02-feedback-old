import PropTypes from "prop-types";
import s from "./Notification.module.css";
import image from "../../img/cat_hungry.png";

function Notification({ message }) {
  return (
    <div className={s.message}>
      <p>{message}</p>
      <img
        src={image}
        alt="Печальный котик, нет отзывов"
        width="150"
        className={s.image}
      ></img>
    </div>
  );
}

Notification.propTypes = {
  massage: PropTypes.string,
  image: PropTypes.string,
};

export default Notification;

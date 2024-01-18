import style from './notification.module.css';

const Notification = ({ message }) => {
  return <p className={style.text}>{message}</p>;
};

export default Notification;

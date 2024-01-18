import style from './feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={style.listBtn}>
      {options.map(option => (
        <li key={option} className={style.listBtnEl}>
          <button onClick={() => onLeaveFeedback(option)} className={style.btn}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

import style from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={style.boxList}>
      <li className={style.listEl}>Good: {good}</li>
      <li className={style.listEl}>Neutral: {neutral}</li>
      <li className={style.listEl}>Bad: {bad}</li>
      <li className={style.listEl}>Total: {total}</li>
      <li className={style.listEl}>Positive feedback :{positivePercentage}%</li>
    </ul>
  );
};

export default Statistics;

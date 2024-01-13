import style from './section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={style.boxDiv}>
      <h2 className={style.boxTitle}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;

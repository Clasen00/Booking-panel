import styles from "../styles.module.scss";

export const Registration = () => {
  return (
    <div className={styles.regForm}>
      <div className={styles.formGroup}>
        <label htmlFor="login">Login:</label>
        <input type="login" id="login" placeholder="Введите ваш login" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Пароль:</label>
        <input type="password" id="password" placeholder="Введите пароль" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Пароль:</label>
        <input type="password" id="password" placeholder="Введите пароль" />
      </div>
      <button className={styles.btn}>Зарегистрироваться</button>
    </div>
  );
};

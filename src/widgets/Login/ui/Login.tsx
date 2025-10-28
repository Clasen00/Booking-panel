"use client";

import styles from "../styles.module.scss";

export const Login = () => {
  return (
    <div className={styles.loginForm}>
      <div className={styles.formGroup}>
        <label htmlFor="login">Логин:</label>
        <input type="login" id="login" placeholder="Введите ваш логин" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Пароль:</label>
        <input type="password" id="password" placeholder="Введите пароль" />
      </div>
      <button className={styles.btn}>Войти</button>
    </div>
  );
};

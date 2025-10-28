"use client";

import styles from "../styles.module.scss";
import { useState } from "react";
import { Registration } from "@/widgets/Registration";
import { Login } from "@/widgets/Login";

const LOGIN = 0;
const REGISTRATION = 1;

export const Auth = () => {
  const [currentForm, setCurrentForm] = useState<number>();

  return currentForm === LOGIN ? (
    <>
      <Login />

      <div className={styles.footer}>
        Если у вас нет аккаунта{" "}
        <button
          className={styles.btn}
          onClick={() => setCurrentForm(REGISTRATION)}
        >
          зарегистрируйтесь
        </button>
      </div>
    </>
  ) : (
    <>
      <Registration />

      <div className={styles.footer}>
        Если у вас уже есть аккаунт{" "}
        <button className={styles.btn} onClick={() => setCurrentForm(LOGIN)}>
          войдите
        </button>
      </div>
    </>
  );
};

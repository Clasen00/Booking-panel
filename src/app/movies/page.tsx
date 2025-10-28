import classNames from "classnames";
import styles from "./styles.module.scss";

export default function Page() {
  return (
    <section
      id="movies"
      className={classNames(styles.contentSection, styles.active)}
    >
      <h2 className={styles.secondaryTitle}>Сейчас в прокате</h2>
      <div className={styles.movieGrid}>
        <div className={styles.movieCard}>
          <h3>Аватар 2</h3>
          <p>Фантастика, Приключения</p>
          <p>⭐ 4.8/5</p>
        </div>
        <div className={styles.movieCard}>
          <h3>Оппенгеймер</h3>
          <p>Драма, Биография</p>
          <p>⭐ 4.9/5</p>
        </div>
        <div className={styles.movieCard}>
          <h3>Барби</h3>
          <p>Комедия, Приключения</p>
          <p>⭐ 4.7/5</p>
        </div>
      </div>
    </section>
  );
}

import styles from "./styles.module.scss";

export default function Page() {
  return (
    <section id="cinemas" className={styles.contentSection}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.row}>
            <th className={styles.captionHead} scope="col">
              Кинотеатр
            </th>
            <th className={styles.captionHead} scope="col">
              Адрес
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.row}>
            <th className={styles.head} scope="row">
              Skyline Cinema
            </th>
            <td className={styles.data} scope="row">
              ТРЦ Галерея
            </td>
          </tr>
          <tr className={styles.row}>
            <th className={styles.head} scope="row">
              Салют
            </th>
            <td className={styles.data} scope="row">
              пр-т Рокоссовского 6
            </td>
          </tr>
          <tr className={styles.row}>
            <th className={styles.head} scope="row">
              Океан
            </th>
            <td className={styles.data} scope="row">
              Алеутская 8
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

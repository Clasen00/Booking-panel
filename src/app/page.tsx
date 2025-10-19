import { BookingPanel } from "./features/booking-panel/ui";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        <BookingPanel />
      </div>
    </div>
  );
}

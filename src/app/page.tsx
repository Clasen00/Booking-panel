import Image from "next/image";
import styles from "./page.module.css";
import { BookingPanel } from "./features/booking-panel/ui";

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        <BookingPanel />
      </div>
    </div>
  );
}

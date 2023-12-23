import Image from "next/image";
import styles from "./page.module.css";
import Window from "./window";

export default function Home() {
  return (
    <>
      <div className={styles.pixelFilter}>
        <Window>Test</Window>
      </div>
    </>
  );
}

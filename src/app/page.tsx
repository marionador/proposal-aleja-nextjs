'use client'

import styles from "./page.module.css";
import JoinButton from "../components/joinButton/JoinButton";
import { NoButton } from "../components/noButton/NoButton";

export default function Home() {
  return (
    <>
      <div className={styles.imageContainer}>
        <img src="/mainPicture.png" alt="Foto Romantica" />
      </div>

      <h1 className={styles.title}>¿Quieres ser mi novia?</h1>
      <JoinButton></JoinButton>
      <NoButton></NoButton>

      <footer className={styles.footer}>
        <p>brodevs &copy; 2024</p>
      </footer>
    </>
  );
}

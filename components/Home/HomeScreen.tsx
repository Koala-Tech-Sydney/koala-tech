import styles from "./HomeScreen.module.scss";
import { Fragment } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";

export default function HomeScreen() {
  return (
    <Fragment>
      <div className={styles.homeScreen}>
        <div className={styles.logo}>
          <div className="ori-responsive">
            <div className={styles.glitch}>
              <span className={styles.first_char}>K</span>oala_Tech
            </div>
          </div>
          <div className={styles.subtitle}>
            Learning never exhausts the mind
          </div>
        </div>

        <h1 className={styles.slogan}>Build Apps. Build a Better Life.</h1>

        <div className={styles.homeScreenBtns}>
          <Link href="/courses" passHref>
            <Button
              className={styles.homeScreenBtn}
              variant="contained"
              color="success"
            >
              Start Tutorial
            </Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

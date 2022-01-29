import styles from "../styles/Home.module.scss";
import { Fragment } from "react";
import Button from 'react-bootstrap/Button';
import Link from 'next/link'


export default function Home() {
  return (
    <Fragment>
      <main className={styles.main}></main>

      <div className={styles.homePage}>

        <div className="home_content">
          <div className={styles.logo}>
            <div className="ori-responsive">
              <div className={styles.glitch}>
                <span className={styles.first_char}>K</span>oala_Tech
              </div>
            </div>
            <div className={styles.subtitle}>Learning never exhausts the mind</div>
          </div>
          
          <h1 className={styles.slogan}>Build Apps. Build a Better Life.</h1>

          <Link href="/tutorials">
            <Button variant="success">Start Tutorial</Button>     
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

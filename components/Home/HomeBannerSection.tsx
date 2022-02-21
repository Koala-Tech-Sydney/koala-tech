import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";

import styles from "./HomeBannerSection.module.scss";

export default function HomeBannerSection() {
  return (
    <div className={styles.homeBannerSection}>
      <Image
        className={styles.bannerBackgroundImage}
        layout="fill"
        objectFit="cover"
        src="/images/homeBG.jpg"
        alt="Gadgets and a pen"
        priority
      />

      <div className={styles.bannerContentContainer}>
        <div className={styles.logo}>
          <div className={styles.title}>
            <span className={styles.first_char}>K</span>oala_Tech
          </div>
          <div className={styles.subtitle}>
            Learning never exhausts the mind
          </div>
        </div>

        <div className={styles.slogan}>Build Apps. Build a Better Life.</div>

        <div className={styles.startTutorialBtnContainer}>
          <Link href="/courses" passHref>
            <Button
              className={styles.startTutorialBtn}
              variant="contained"
            >
              Start Tutorial
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

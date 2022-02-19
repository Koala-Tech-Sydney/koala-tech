import SqualImageCard from "../Card/SquareImageCard";
import Link from "next/link";
import Button from "@mui/material/Button";
import styles from "./HomeCourseList.module.scss";

const HomeCourseList = () => {
  return (
    <div className={styles.homeContent}>
      <div className={styles.homeTerminal}>
        <span className={styles.purpleTxt}>rising-star@Koala:</span> ~$  
        <span className={styles.orangeTxt}> npm</span> install Koala <br />
        Installing packages ...
        <br />
        <span className={styles.greenTxt}>Koala installed successfully! Happy coding!</span>
        <br />
      </div>

      <HomeCourseSection />
      <Link href="/courses" passHref>
        <Button className={styles.viewAllBtn} variant="contained">
          {" "}View all courses{" "}
        </Button>
      </Link>
    </div>
  );
};

const HomeCourseSection = () => {
  return (
    <div className={styles.homeCourseSection}>
      <div className={styles.courseListContainer}>
        <div></div>
        <HomeCourseListContent />
        <div></div>
      </div>
    </div>
  );
};

const HomeCourseListContent = () => {
  const imgLink1 = "images/reactCardImg.jpg";
  const imgLink2 = "images/blockchainCard.jpg";
  const imgLink3 = "images/comingSoon.jpg";
  const description1 =
    "Don't get left behind. React is the way forward to building fast, interactive web apps.";
  const description2 = "Description 2";
  const description3 = "Description 3";

  return (
    <div className={styles.homeCourseList}>
      <SqualImageCard
        imgLink={imgLink1}
        title="React"
        description={description1}
      />
      <SqualImageCard
        imgLink={imgLink2}
        title="Block Chain"
        description={description2}
      />
      <SqualImageCard
        imgLink={imgLink3}
        title="Course Title"
        description={description3}
      />
    </div>
  );
};


export default HomeCourseList;

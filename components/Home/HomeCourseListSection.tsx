import CourseCard from "../Card/CourseCard";
import Link from "next/link";
import Button from "@mui/material/Button";
import styles from "./HomeCourseListSection.module.scss";

const CourseList = () => {
  const imgLink1 = "/images/courses/react/react-course.jpg";
  const imgLink2 = "/images/courses/blockchain/blockchain-course.png";
  const imgLink3 = "/images/courses/comingSoon.jpg";
  const description1 =
    "A state of the art JavaScript framework for building fast and interactive applications.";
  const description2 =
    "Blockchain technologies are used for building a world of more trust and freedom.";
  const description3 = "...";

  return (
    <div className={styles.courseListContainer}>
      <CourseCard
        uri="/courses/react"
        imgLink={imgLink1}
        title="React"
        description={description1}
        alt="React Tutorial"
      />

      <CourseCard
        uri="/courses/blockchain"
        imgLink={imgLink2}
        title="Blockchain"
        description={description2}
        alt="Blockchain Tutorial"
      />

      <CourseCard
        uri="#"
        imgLink={imgLink3}
        title="Data Structure and Algorithm"
        description={description3}
        alt="coming soon..."
      />
    </div>
  );
};

const HomeCourseListSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.terminal}>
        <div className={styles.terminalBar}>
          <div className={styles.terminalBtn}></div>
          <div className={styles.terminalBtn}></div>
          <div className={styles.terminalBtn}></div>
        </div>
        <span className={styles.purpleTxt}>rising-star@Koala:</span> ~$
        <span className={styles.orangeTxt}> npm</span> install Koala <br />
        Installing packages ...
        <br />
        <span className={styles.greenTxt}>
          Koala installed successfully! Happy coding!
        </span>
        <br />
      </div>

      <CourseList />

      <div className={styles.viewAllCoursesBtnContainer}>
        <Link href="/courses" passHref>
          <Button className={styles.viewAllBtn} variant="contained">
            View all courses
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCourseListSection;

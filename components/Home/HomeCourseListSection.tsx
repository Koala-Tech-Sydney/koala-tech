import SquareImageCard from "../Card/SquareImageCard";
import Link from "next/link";
import Button from "@mui/material/Button";
import styles from "./HomeCourseListSection.module.scss";

const HomeCourseListSection = () => {
  return (
    <div className={styles.homeContent}>
      <div className={styles.homeTerminal}>
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

const CourseList = () => {
  const imgLink1 = "/images/reactCardImg.jpg";
  const imgLink2 = "/images/blockchainCard.jpg";
  const imgLink3 = "/images/comingSoon.jpg";
  const description1 =
    "Don't get left behind. React is the way forward to building fast, interactive web apps.";
  const description2 = "Description 2 and some other stuff mate";
  const description3 = "Description 3 and some other description";

  return (
    <div className={styles.courseListContainer}>
      <Link href="/courses/react" passHref>
        <a>
          <SquareImageCard
            imgLink={imgLink1}
            title="React"
            description={description1}
            alt="React Tutorial"
          />
        </a>
      </Link>

      <SquareImageCard
        imgLink={imgLink2}
        title="Blockchain"
        description={description2}
        alt="Blockchain Tutorial"
      />

      <SquareImageCard
        imgLink={imgLink3}
        title="Course Title"
        description={description3}
        alt="Upcoming tutorial"
      />
    </div>
  );
};

export default HomeCourseListSection;

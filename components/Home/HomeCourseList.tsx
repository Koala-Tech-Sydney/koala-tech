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
        <span className={styles.greenTxt}>
          Koala installed successfully! Happy coding!
        </span>
        <br />
      </div>

      <HomeCourseSection />
      <Link href="/courses" passHref>
        <Button className={styles.viewAllBtn} variant="contained">
          {" "}
          View all courses{" "}
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
  const imgLink1 = "/images/reactCardImg.jpg";
  const imgLink2 = "/images/blockchainCard.jpg";
  const imgLink3 = "/images/comingSoon.jpg";
  const description1 =
    "Don't get left behind. React is the way forward to building fast, interactive web apps.";
  const description2 = "Description 2";
  const description3 = "Description 3";

  return (
    <div className={styles.homeCourseList}>
      <Link href={"/courses/react"} passHref>
        <SqualImageCard
          imgLink={imgLink1}
          title="React"
          description={description1}
          alt="React Tutorial"
        />
      </Link>

      <SqualImageCard
        imgLink={imgLink2}
        title="Blockchain"
        description={description2}
        alt="Blockchain Tutorial"
      />
      <SqualImageCard
        imgLink={imgLink3}
        title="Course Title"
        description={description3}
        alt="Upcoming tutorial"
      />
    </div>
  );
};

export default HomeCourseList;

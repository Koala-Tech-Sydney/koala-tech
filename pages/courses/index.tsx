import { Fragment } from "react";
import Link from "next/link";
import TwoSidesMainSection from "../../components/Structure/TwoSidesMainSection";
import SquareImageCard from "../../components/Card/SquareImageCard";
import styles from "./index.module.scss"


const tutorialList = [
  { name: "React", path: "/courses/react", imgPath: "images/reactCardImg.jpg", description: "" },
  { name: "Blockchain", path: "/courses/blockchain", imgPath: "images/blockchainCard.jpg", description: "" },
  { name: "Coming...", path: "/courses/", imgPath: "images/comingSoon.jpg", description: "Under development" },
  { name: "Coming...", path: "/courses/", imgPath: "images/comingSoon.jpg", description: "Under development" },
];


const CourseList = () => {
  return (
    <div id={styles.courseListContainer}>
      <CardList />
    </div>
  )
};


const CardList = () => {
  return (
    // TODO: just a temporary solution to make the courses accessible!
    <Fragment>
      {tutorialList.map((tutorial) => {
        return (
          <Fragment key={tutorial.name}>
            <Link href={tutorial.path}>
              <SquareImageCard imgLink={tutorial.imgPath} title={tutorial.name} description={tutorial.description} />
            </Link>
            <br />
          </Fragment>
        );
      })}
    </Fragment>
  );
}

export default CourseList;


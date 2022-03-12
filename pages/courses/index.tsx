import { Fragment } from "react";
import CourseCard from "../../components/Card/CourseCard";
import styles from "./index.module.scss";

const tutorialList = [
  {
    name: "React",
    path: "/courses/react",
    imgPath: "/images/reactCardImg.jpg",
    description: "",
  },
  {
    name: "Blockchain",
    path: "/courses/blockchain",
    imgPath: "/images/blockchainCard.jpg",
    description: "",
  },
  {
    name: "Rust",
    path: "/courses/rust",
    imgPath: "/images/courses/rust.png",
    description:
      "Rust is a general-purpose programming language designed for performance and safety.",
  },
  {
    name: "Coming...",
    path: "/courses/",
    imgPath: "/images/comingSoon.jpg",
    description: "Under development",
  },
];

const CourseList = () => {
  return (
    <div id={styles.courseListContainer}>
      <CardList />
    </div>
  );
};

const CardList = () => {
  return (
    // TODO: just a temporary solution to make the courses accessible!
    <Fragment>
      {tutorialList.map((tutorial) => {
        return (
          <CourseCard
            key={tutorial.name}
            uri={tutorial.path}
            imgLink={tutorial.imgPath}
            title={tutorial.name}
            description={tutorial.description}
            alt={tutorial.name}
          />
        );
      })}
    </Fragment>
  );
};

export default CourseList;

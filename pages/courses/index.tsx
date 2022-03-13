import { Fragment } from "react";
import CourseCard from "../../components/Card/CourseCard";
import styles from "./index.module.scss";

const courseList = [
  {
    name: "React",
    path: "/courses/react",
    imgPath: "/images/courses/react/react-course.jpg",
    description: "",
  },
  {
    name: "Blockchain",
    path: "/courses/blockchain",
    imgPath: "/images/courses/blockchain/blockchain-course.png",
    description: "",
  },
  {
    name: "Rust",
    path: "/courses/rust",
    imgPath: "/images/courses/rust/rust.png",
    description:
      "Rust is a general-purpose programming language designed for performance and safety.",
  },
  {
    name: "Coming...",
    path: "/courses/",
    imgPath: "/images/courses/comingSoon.jpg",
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
      {courseList.map((course) => {
        return (
          <CourseCard
            key={course.name}
            uri={course.path}
            imgLink={course.imgPath}
            title={course.name}
            description={course.description}
            alt={course.name}
          />
        );
      })}
    </Fragment>
  );
};

export default CourseList;

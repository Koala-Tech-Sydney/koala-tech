import { Fragment } from "react";
import CourseCard from "../../components/Card/CourseCard";
import styles from "./index.module.scss";

const courseList = [
  {
    name: "React",
    path: "/courses/react",
    imgPath: "/images/courses/react/react-course.jpg",
    description:
      "A state of the art JavaScript framework developed by Meta (Facebook) for building fast and interactive applications.",
  },
  {
    name: "Blockchain",
    path: "/courses/blockchain",
    imgPath: "/images/courses/blockchain/blockchain-course.png",
    description:
      "Blockchain technologies are used for building a world of more trust and freedom.",
  },
  {
    name: "Solidity",
    path: "/courses/solidity",
    imgPath: "/images/courses/solidity/solidity-course.png",
    description:
      "Solidity is a language for writing smart contracts on the Ethereum blockchain.",
  },
  {
    name: "Rust",
    path: "/courses/rust",
    imgPath: "/images/courses/rust/rust.png",
    description:
      "Rust is a general-purpose language designed for performance, safety and concurrency.",
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

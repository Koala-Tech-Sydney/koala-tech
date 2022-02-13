import { Fragment } from "react";
import Link from "next/link";
import TwoSidesMainSection from "../../components/Structure/TwoSidesMainSection";

const tutorialList = [
  { name: "React", path: "/courses/react" },
  { name: "Blockchain", path: "/courses/blockchain" },
];

const CourseListMainSection = () => {
  return (
    // TODO: just a temporary solution to make the courses accessible!
    <Fragment>
      {tutorialList.map((tutorial) => {
        return (
          <Fragment key={tutorial.name}>
            <Link href={tutorial.path}>
              <a>{tutorial.name}</a>
            </Link>
            <br />
          </Fragment>
        );
      })}
    </Fragment>
  );
};

const CourseList = () => {
  return (
    <TwoSidesMainSection
      leftSection={<div></div>}
      mainSection={<CourseListMainSection />}
      rightSection={<div></div>}
    />
  );
};

export default CourseList;

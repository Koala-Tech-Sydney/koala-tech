import { Fragment } from "react";
import { useRouter } from "next/router";

import useCourse from "../../hooks/useCourse";
import { Title, SmallText } from "../Text/Text";
import TwoSidesMainSection from "../Structure/TwoSidesMainSection";
import { Course } from "../../hooks/useCourse";
import SideNavBar from "./SideNavBar";

import styles from "./Chapter.module.scss";

type Props = {
  course: Course;
};

const Chapter: React.FC<Props> = ({ course, children }) => {
  let title,
    requiredReadingTimeInMinute = "";
  course = useCourse(course);
  const router = useRouter();
  console.log("Current Route: " + router.pathname);

  course.units.map((unit) => {
    unit.chapters.map((chapter) => {
      console.log(`--${chapter.id} ${router.pathname}`);
      if (chapter.id == router.pathname) {
        console.log("Bingo");
        title = chapter.name;
        requiredReadingTimeInMinute = chapter.requiredReadingTimeInMinute + "";
      }
    });
  });
  return (
    <TwoSidesMainSection
      leftSection={<SideNavBar course={course} />}
      mainSection={
        <Fragment>
          <Title>
            {title}
            {!!requiredReadingTimeInMinute && (
              <SmallText
                className={styles.requiredReadingTimeInMinute}
              >{`${requiredReadingTimeInMinute} minutes of reading`}</SmallText>
            )}
          </Title>
          {children}
        </Fragment>
      }
      rightSection={<div></div>}
    />
  );
};

export default Chapter;

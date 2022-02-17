import { Fragment } from "react";
import { Title, SmallText } from "../Text/Text";
import TwoSidesMainSection from "../Structure/TwoSidesMainSection";
import { Course } from "../../hooks/useCourse";
import SideNavBar from "./SideNavBar";

import styles from "./SubChapter.module.scss";

type Props = {
  title: string;
  course: Course;
  requiredReadingTimeInMinute?: string;
};

const Course: React.FC<Props> = ({
  title,
  course,
  requiredReadingTimeInMinute,
  children,
}) => {
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

export default Course;

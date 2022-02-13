import { Fragment } from "react";
import TwoSidesMainSection from "../Structure/TwoSidesMainSection";
import SearchBar from "../Structure/SearchBar";
import { Title } from "../Text/Text";
import { Course } from "../../hooks/useCourse";
import ChapterList from "./ChapterList";
import SideNavBar from "./SideNavBar";

type Props = {
  title: string;
  course: Course;
};

const CourseHome: React.FC<Props> = ({ title, course }) => {
  return (
    <TwoSidesMainSection
      leftSection={<SideNavBar course={course} />}
      mainSection={
        <Fragment>
          <Title>{title}</Title>
          <SearchBar course={course} />
          {course.chapters.map((chapter) => {
            return (
              <ChapterList
                key={chapter.name}
                title={chapter.name}
                subChapters={chapter.children}
              />
            );
          })}
        </Fragment>
      }
      rightSection={<div></div>}
    />
  );
};

export default CourseHome;

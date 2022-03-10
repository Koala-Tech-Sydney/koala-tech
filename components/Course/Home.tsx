import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import TwoSidesMainSection from "../Structure/TwoSidesMainSection";
import SearchBar from "./SearchBar";
import { Title, Paragraph } from "../Text/Text";
import { Course, Unit, Chapter } from "../../hooks/useCourse";
import SideNavBar from "./SideNavBar";

import styles from "./Home.module.scss";

type Props = {
  title: string;
  course: Course;
};
const CourseHome: React.FC<Props> = ({ title, course }) => {
  return (
    <TwoSidesMainSection
      leftSection={<SideNavBar course={course} />}
      mainSection={
        <>
          <Title>{title}</Title>
          <Paragraph>{course.description}</Paragraph>
          <hr />
          <br />
          <SearchBar course={course} />
          <br />
          <UnitList units={course.units} />
        </>
      }
      rightSection={<div></div>}
    />
  );
};

type UnitListProps = { units: Unit[] };
const UnitList: React.FC<UnitListProps> = ({ units }) => {
  return (
    <>
      {units.map((unit) => {
        return <UnitAccordian key={unit.id} unit={unit} />;
      })}
    </>
  );
};

type UnitAccordianProps = {
  unit: Unit
}
const UnitAccordian: React.FC<UnitAccordianProps> = ({unit}) => {
  return (
    <Accordion className={styles.kAccordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
      >
        <div>
          <div>{unit.name}</div>
          <div className={styles.chapterNum}>
            {unit.chapters.length} chapters (
            {getTotalRequiredReadingTimeInMinute(unit.chapters)} mins)
          </div>
        </div>
      </AccordionSummary>

      <AccordionDetails className={styles.detailContainer}>
        {unit.chapters.map((chapter) => {
          return (
            <Link key={chapter.id} href={chapter.path} passHref>
              <a>
                <div className={styles.chContainer}>
                  <div>{chapter.name}</div>
                  <div className={styles.chMins}>
                    {chapter.requiredReadingTimeInMinute} mins
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
};

function getTotalRequiredReadingTimeInMinute(chList: Chapter[]) {
  var sum = 0;
  chList.forEach((ch) => {
    sum += ch.requiredReadingTimeInMinute;
  });
  return sum;
}

export default CourseHome;

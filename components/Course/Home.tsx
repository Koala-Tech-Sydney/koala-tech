import { Fragment } from "react";
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
  course: Course;
};
const CourseHome: React.FC<Props> = ({ course }) => {
  return (
    <TwoSidesMainSection
      leftSection={<SideNavBar course={course} />}
      mainSection={
        <Fragment>
          <Title>{course.name}</Title>
          <Paragraph>{course.description}</Paragraph>
          <br />
          <hr />
          <br />

          <SearchBar course={course} />

          <div className={styles.unitListContainer}>
            <UnitList units={course.units} />
          </div>
        </Fragment>
      }
      rightSection={<div></div>}
    />
  );
};

type UnitListProps = { units: Unit[] };
const UnitList: React.FC<UnitListProps> = ({ units }) => {
  return (
    <Fragment>
      {units.map((unit) => {
        return (
          <div key={unit.id} className={styles.accordionContainer}>
            <Accordion className={styles.kAccordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={styles.unitTitle}
              >
                <div>
                  <div>{unit.name} </div>
                  <div className={styles.chapterNum}>
                    {unit.chapters.length} chapters ({sum(unit.chapters)} mins)
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
          </div>
        );
      })}
    </Fragment>
  );
};

function sum(chList: Chapter[]) {
  var sum = 0;
  chList.forEach((ch) => {
    sum += ch.requiredReadingTimeInMinute;
  });
  return sum;
}

export default CourseHome;

import Link from "next/link";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

import useCourse, { Course, Unit } from "../../hooks/useCourse";

import styles from "./SideNavBar.module.scss";

const renderUnit = (unit: Unit) => {
  return (
    <TreeItem className={styles.unitContainer} key={unit.id} nodeId={unit.id} label={unit.name}>
      {unit.children.map((chapter) => {
        return (
          <Link key={chapter.id} href={chapter.path} passHref>
            <TreeItem className={styles.chContainer} nodeId={chapter.id} label={chapter.name} />
          </Link>
        );
      })}
    </TreeItem>
  );
};

type Props = {
  course: Course;
};

const CourseSideNavBar: React.FC<Props> = ({ course }) => {
  course = useCourse(course);

  return (
    <div className={styles.side_nav_bar}>
      <div className={styles.courseName}>
          <Link href={course.landingPageURI} passHref>
            <a>{course.name}</a>
          </Link>
      </div>

      <TreeView
        aria-label="Side Navigation Bar"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={["root"]}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {course.units.map((unit) => {
          return renderUnit(unit);
        })}
      </TreeView>
    </div>
  );
};

export default CourseSideNavBar;

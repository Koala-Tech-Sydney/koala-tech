import Link from "next/link";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

import useCourse, { Course, Chapter } from "../../hooks/useCourse";

import styles from "./SideNavBar.module.scss";

const renderChapter = (chapter: Chapter) => {
  return (
    <TreeItem key={chapter.id} nodeId={chapter.id} label={chapter.name}>
      {chapter.children.map((subChapter) => {
        return (
          <Link key={subChapter.id} href={subChapter.path} passHref>
            <TreeItem nodeId={subChapter.id} label={subChapter.name} />
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
      <TreeView
        aria-label="Side Navigation Bar"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={["root"]}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {course.chapters.map((chapter) => {
          return renderChapter(chapter);
        })}
      </TreeView>
    </div>
  );
};

export default CourseSideNavBar;

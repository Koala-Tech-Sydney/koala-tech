import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Link from "next/link";
import { Course, Chapter } from "../../hooks/useCourse";

import styles from "./SearchBar.module.scss";

type Props = {
  course: Course;
};

const SearchBar: React.FC<Props> = ({ course }) => {
  console.log(course);

  const getSearchList = (chapters: Chapter[]) => {
    let result: { group: string; name: string; path: string }[] = [];
    chapters.forEach((chapter) => {
      !!chapter.children
        ? chapter.children.forEach((subChapter) => {
            result.push({
              group: chapter.name,
              name: subChapter.name,
              path: subChapter.path,
            });
          })
        : null;
    });
    return result;
  };

  const items = getSearchList(course.chapters);
  console.log(items);

  return (
    <Autocomplete
      options={items.sort(
        // the minus make 0-9 appears on top, english characters follow
        (a, b) => -b.group.localeCompare(a.group)
      )}
      // Categories
      groupBy={(option) => option.group}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField {...params} placeholder="Search Content" />
      )}
      renderOption={(props, option) => (
        <Link key={option.name} href={option.path}>
          <a className={styles.option}>{option.name}</a>
        </Link>
      )}
    />
  );
};

export default SearchBar;

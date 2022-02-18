import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Link from "next/link";
import { Course, Unit } from "../../hooks/useCourse";

import styles from "./SearchBar.module.scss";

type Props = {
  course: Course;
};

const SearchBar: React.FC<Props> = ({ course }) => {
  console.log(course);

  const getSearchList = (units: Unit[]) => {
    let result: { group: string; name: string; path: string }[] = [];
    units.forEach((unit) => {
      unit.children.forEach((chapter) => {
        chapter.children?.forEach((subchapter) => {
          result.push({
            group: chapter.name,
            name: subchapter.name,
            path: subchapter.path,
          });
        });
      });
    });
    return result;
  };

  const items = getSearchList(course.units);
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

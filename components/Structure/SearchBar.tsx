import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { usePathProps } from "../../hooks/usePath";

type Props = {
  chapters: usePathProps;
};

const SearchBar: React.FC<Props> = ({ chapters }) => {
  console.log(chapters);

  const getSearchList = (sections: usePathProps) => {
    let result: { group: string; name: string; path: string }[] = [];
    sections.forEach((section) => {
      section.subSections.forEach((subSection) => {
        result.push({
          group: section.sectionName,
          name: subSection.name,
          path: subSection.path,
        });
      });
    });
    return result;
  };

  const items = getSearchList(chapters);
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
    />
  );
};

export default SearchBar;

import { Subtitle1 } from "../Text/Text";
import { normalizePathName } from "../../hooks/useCourse";

type Props = {
  name: string;
};

const SubChapter: React.FC<Props> = ({ name }) => {
  return (
    <>
      {/* make some space so that the top navigation bar won't cover up the title */}
      <div id={normalizePathName(name)} style={{ marginBottom: "6rem" }} />
      <Subtitle1>{name}</Subtitle1>
    </>
  );
};

export default SubChapter;

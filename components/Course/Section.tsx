import { Subtitle1 } from "../Text/Text";
import { normalizePathName } from "../../hooks/useCourse";

type Props = {
  name: string;
};

const Section: React.FC<Props> = ({ name }) => {
  return (
    <>
      <div id={normalizePathName(name)} />
      <Subtitle1>{name}</Subtitle1>
    </>
  );
};

export default Section;

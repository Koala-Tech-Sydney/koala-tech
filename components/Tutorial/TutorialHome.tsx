import { Fragment } from "react";
import TwoSidesMainSection from "../Structure/TwoSidesMainSection";
import SearchBar from "../Structure/SearchBar";
import { Title } from "../Text/Text";
import { usePathProps } from "../../hooks/usePath";

type Props = {
  title: string;
  chapters: usePathProps;
};

const TutorialHome: React.FC<Props> = ({ title, chapters, children }) => {
  return (
    <TwoSidesMainSection
      leftSection={<div></div>}
      mainSection={
        <Fragment>
          <Title>{title}</Title>
          <SearchBar chapters={chapters} />
          {children}
        </Fragment>
      }
      rightSection={<div></div>}
    />
  );
};

export default TutorialHome;

import { Fragment } from "react";
import TwoSidesMainSection from "../Structure/TwoSidesMainSection";
import SearchBar from "../Structure/SearchBar";
import { Title } from "../Text/Text";
import { ContentTree } from "../../hooks/useContentTree";
import ChapterList from "../../components/Tutorial/ChapterList";
import SideNavBar from "../../components/Structure/SideNavBar";

type Props = {
  title: string;
  chapters: ContentTree | null;
};

const TutorialHome: React.FC<Props> = ({ title, chapters }) => {
  return (
    <TwoSidesMainSection
      leftSection={<SideNavBar data={chapters} />}
      mainSection={
        <Fragment>
          <Title>{title}</Title>
          <SearchBar chapters={chapters} />
          {chapters.map((chapter) => {
            return (
              <ChapterList
                key={chapter.name}
                title={chapter.name}
                subChapters={chapter.children}
              />
            );
          })}
        </Fragment>
      }
      rightSection={<div></div>}
    />
  );
};

export default TutorialHome;

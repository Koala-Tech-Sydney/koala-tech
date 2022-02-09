import TutorialHome from "../../../components/Tutorial/TutorialHome";
import ChapterList from "../../../components/Tutorial/ChapterList";
import styles from "./index.module.scss";

const ReactTutorialHome = () => {
  const introductionChapterList = [
    {
      name: "Setup",
      path: "/tutorials/react/setup",
    },
    {
      name: "Introduction",
      path: "/tutorials/react/introduction",
    },
  ];

  const functionComponentChapterList = [
    {
      name: "JSX",
      path: "/tutorials/react/JSX",
    },
    {
      name: "JSX Deep Dive",
      path: "/tutorials/react/JSX-deep-dive",
    },
    {
      name: "Function Component",
      path: "/tutorials/react/function-component",
    },
  ];

  return (
    <TutorialHome title="React">
      <ChapterList title={"Introduction"} chapters={introductionChapterList} />
      <ChapterList
        title={"Components"}
        chapters={functionComponentChapterList}
      />
      <ChapterList
        title={"Props & States"}
        chapters={introductionChapterList}
      />
      <ChapterList
        title={"Props & States"}
        chapters={introductionChapterList}
      />
    </TutorialHome>
  );
};

export default ReactTutorialHome;

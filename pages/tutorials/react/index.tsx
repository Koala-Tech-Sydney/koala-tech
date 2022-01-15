import TutorialHome from "../../../components/Tutorial/TutorialHome";
import ChapterList from "../../../components/Structure/ChapterList";

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
    // {
    //   name: "Conditional Rendering",
    //   path: "/tutorials/react/conditional-rendering",
    // },
    // {
    //   name: "Events",
    //   path: "/tutorials/react/events",
    // },
    // {
    //   name: "Styling",
    //   path: "/tutorials/react/styling",
    // },
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

  const propsAndStatesChapterList = [
    {
      name: "Props",
      path: "/tutorials/react/props",
    },
    {
      name: "State",
      path: "/tutorials/react/state",
    },
  ];

  const intermediaryChapterList = [
    {
      name: "List",
      path: "/tutorials/react/list",
    },
    {
      name: "Lifting State Up",
      path: "/tutorials/react/lifting-state-up",
    },
    {
      name: "Forms",
      path: "/tutorials/react/forms",
    },
    {
      name: "Composition vs Inheritance",
      path: "/tutorials/react/composition-vs-inheritance",
    },
  ];
  return (
    <TutorialHome title={"React"}>
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

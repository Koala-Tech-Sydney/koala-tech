import TwoSidesMainSection from "../../../components/Structure/TwoSidesMainSection";
import ChapterList from "../../../components/Tutorial/ChapterList";
import { Fragment } from "react";
import styles from "./index.module.scss";

const ReactTutorialHomeMainSection = () => {
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
    <Fragment>
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
    </Fragment>
  );
};

const ReactTutorialHome = () => {
  return (
    <TwoSidesMainSection
      leftSection={<div></div>}
      mainSection={<ReactTutorialHomeMainSection />}
      rightSection={<div></div>}
    />
  );
};

export default ReactTutorialHome;

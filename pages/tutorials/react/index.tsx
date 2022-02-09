import TwoSidesMainSection from "../../../components/Structure/TwoSidesMainSection";
import ChapterList from "../../../components/Tutorial/ChapterList";
import { Fragment } from "react";
import styles from "./index.module.scss";

const chapters = [
  {
    name: "Setup",
    path: "/tutorials/react/setup",
  },
  {
    name: "Introduction",
    path: "/tutorials/react/introduction",
  },
  { name: "JSX", path: "/tutorials/react/JSX" },
  {
    name: "JSX Deep Dive",
    path: "/tutorials/react/JSX-deep-dive",
  },
  {
    name: "Function Component",
    path: "/tutorials/react/function-component",
  },
  {
    name: "Props",
    path: "/tutorials/react/props",
  },
  {
    name: "State",
    path: "/tutorials/react/state",
  },
];

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

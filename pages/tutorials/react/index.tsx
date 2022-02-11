import usePath, { usePathProps } from "../../../hooks/usePath";

import TutorialHome from "../../../components/Tutorial/TutorialHome";

let chapters: usePathProps = [
  {
    sectionName: "Introduction",
    subSections: [
      {
        name: "Setup",
        path: "",
      },
      {
        name: "Introduction",
        path: "",
      },
      {
        name: "JSX",
        path: "",
      },
      {
        name: "JSX Deep Dive",
        path: "",
      },
    ],
  },
  {
    sectionName: "Chapter 2",
    subSections: [
      {
        name: "Function Component",
        path: "",
      },
    ],
  },
];

const ReactTutorialHome = () => {
  chapters = usePath(chapters);
  // console.log(chapters);

  return <TutorialHome title="React" chapters={chapters} />;
};

export default ReactTutorialHome;

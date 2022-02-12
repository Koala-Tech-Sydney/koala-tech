import useContentTree, { ContentTree } from "../../../hooks/useContentTree";

import TutorialHome from "../../../components/Tutorial/TutorialHome";

let chapters: ContentTree = [
  {
    id: "",
    name: "Introduction",
    path: "",
    children: [
      {
        id: "",
        name: "Setup",
        path: "",
        children: [],
      },
      {
        id: "",
        name: "Introduction",
        path: "",
        children: [],
      },
      {
        id: "",
        name: "JSX",
        path: "",
        children: [],
      },
      {
        id: "",
        name: "JSX Deep Dive",
        path: "",
        children: [],
      },
    ],
  },
  {
    id: "",
    name: "Chapter 2",
    path: "",
    children: [
      {
        id: "",
        name: "Function Component",
        path: "",
        children: [],
      },
    ],
  },
];

const ReactTutorialHome = () => {
  chapters = useContentTree(chapters);
  // console.log(chapters);

  return <TutorialHome title="React" chapters={chapters} />;
};

export default ReactTutorialHome;

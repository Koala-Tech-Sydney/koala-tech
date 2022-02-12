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
      },
      {
        id: "",
        name: "Introduction",
        path: "",
      },
      {
        id: "",
        name: "JSX",
        path: "",
      },
      {
        id: "",
        name: "JSX Deep Dive",
        path: "",
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

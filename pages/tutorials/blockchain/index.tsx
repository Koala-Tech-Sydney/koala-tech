import TutorialHome from "../../../components/Tutorial/TutorialHome";
import useContentTree, { ContentTree } from "../../../hooks/useContentTree";

let chapters: ContentTree = [
  {
    id: "",
    name: "Introduction",
    path: "",
    children: [
      {
        id: "",
        name: "Introduction of Blockchain",
        path: "",
        children: [],
      },
      {
        id: "",
        name: "Advantages of Blockchain",
        path: "",
        children: [],
      },
    ],
  },
];

const BlockchainTutorialHome = () => {
  chapters = useContentTree(chapters);
  return <TutorialHome title="Blockchain" chapters={chapters}></TutorialHome>;
};

export default BlockchainTutorialHome;

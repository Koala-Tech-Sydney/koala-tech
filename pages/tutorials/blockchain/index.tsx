import TutorialHome from "../../../components/Tutorial/TutorialHome";
import usePath, { usePathProps } from "../../../hooks/usePath";

let chapters: usePathProps = [
  {
    sectionName: "Introduction",
    subSections: [
      {
        name: "Introduction of Blockchain",
        path: "",
      },
      {
        name: "Advantages of Blockchain",
        path: "",
      },
    ],
  },
];

const BlockchainTutorialHome = () => {
  chapters = usePath(chapters);
  return <TutorialHome title="Blockchain" chapters={chapters}></TutorialHome>;
};

export default BlockchainTutorialHome;

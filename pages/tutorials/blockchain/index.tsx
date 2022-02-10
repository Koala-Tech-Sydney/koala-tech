import TutorialHome from "../../../components/Tutorial/TutorialHome";
import usePath, { usePathProps } from "../../../hooks/usePath";

let chapters: usePathProps = [
  {
    sectionName: "Introduction",
    subSections: [
      {
        name: "Introduction",
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

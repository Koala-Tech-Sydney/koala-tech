import usePath, { usePathProps } from "../../../hooks/usePath";

import TutorialHome from "../../../components/Tutorial/TutorialHome";
import ChapterList from "../../../components/Tutorial/ChapterList";

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

  return (
    <TutorialHome title="React" chapters={chapters}>
      {chapters.map((chapter) => {
        return (
          <ChapterList
            key={chapter.sectionName}
            title={chapter.sectionName}
            subChapters={chapter.subSections}
          />
        );
      })}
    </TutorialHome>
  );
};

export default ReactTutorialHome;

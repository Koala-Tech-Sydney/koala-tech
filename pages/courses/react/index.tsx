import useCourse, { Course } from "../../../hooks/useCourse";
import Home from "../../../components/Course/Home";

const courseDescription =
  "React is a frontend framework for creating Single Page Apps (SPA). It is maintained by Meta" +
  " (formerly Facebook) and a community of individual developers and companies.";

let reactCourse: Course = {
  name: "React",
  baseURI: "/courses/react/",
  units: [
    {
      id: "",
      name: "Introduction",

      chapters: [
        {
          id: "",
          name: "Setup",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 4,
        },
        {
          id: "",
          name: "Introduction",
          path: "",
          subchapters: [
            { id: "", name: "What is React?", path: "" },
            { id: "", name: "Create React App", path: "" },
            { id: "", name: "Project Structure", path: "" },
          ],
          requiredReadingTimeInMinute: 6,
        },
        {
          id: "",
          name: "Preparing a starter project",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 3,
        },
        {
          id: "",
          name: "Introducing JSX",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 7,
        },
      ],
    },
    {
      id: "",
      name: "Function Component",
      chapters: [
        {
          id: "",
          name: "Introducing Function Components",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 7,
        },
        {
          id: "",
          name: "Props",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 7,
        },
        {
          id: "",
          name: "States",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 7,
        },
        {
          id: "",
          name: "Component Data Communication",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 7,
        },
        {
          id: "",
          name: "Conditional Rendering",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 7,
        },
        {
          id: "",
          name: "Rendering List",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 7,
        },
      ],
    },
    {
      id: "",
      name: "Styling",
      chapters: [],
    },
  ],
  description: courseDescription,
};

const ReactCourseHome = () => {
  reactCourse = useCourse(reactCourse);
  // console.log(chapters);

  return <Home course={reactCourse} />;
};

export { ReactCourseHome as default, reactCourse };

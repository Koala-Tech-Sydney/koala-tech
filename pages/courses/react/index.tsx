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
          subchapters: [],
          requiredReadingTimeInMinute: 15,
        },
        {
          id: "",
          name: "JSX",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 15,
        },
        {
          id: "",
          name: "JSX Deep Dive",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 15,
        },
      ],
    },
    {
      id: "",
      name: "Function Component",
      chapters: [
        {
          id: "",
          name: "Function Component",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 15,
        },
      ],
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

import useCourse, { Course } from "../../../hooks/useCourse";
import CourseHome from "../../../components/Course/CourseHome";

let reactCourse: Course = {
  baseURI: "react/",
  chapters: [
    {
      id: "",
      name: "Introduction",

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
      name: "Function Component",
      children: [
        {
          id: "",
          name: "Function Component",
          path: "",
          children: [],
        },
      ],
    },
  ],
};

const ReactCourseHome = () => {
  reactCourse = useCourse(reactCourse);
  // console.log(chapters);

  return <CourseHome title="React" course={reactCourse} />;
};

export { ReactCourseHome as default, reactCourse };

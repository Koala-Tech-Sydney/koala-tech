import useCourse, { Course } from "../../../hooks/useCourse";
import Home from "../../../components/Course/Home";

let courseDescription =  "React (ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. "
courseDescription += "It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. "
courseDescription += "React can be used as a base in the development of single-page or mobile applications."


let reactCourse: Course = {
  name: "React",
  landingPageURI: "/courses/react",
  baseURI: "react/",
  units: [
    {
      id: "",
      name: "Introduction",

      children: [
        {
          id: "",
          name: "Setup",
          path: "",
          children: [],
          min: 15
        },
        {
          id: "",
          name: "Introduction",
          path: "",
          children: [],
          min: 15
        },
        {
          id: "",
          name: "JSX",
          path: "",
          children: [],
          min: 15
        },
        {
          id: "",
          name: "JSX Deep Dive",
          path: "",
          children: [],
          min: 15
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
          min: 15
        },
      ],
    },
  ],
  description: courseDescription
};

const ReactCourseHome = () => {
  reactCourse = useCourse(reactCourse);
  // console.log(chapters);

  return <Home title="React" course={reactCourse} />;
};

export { ReactCourseHome as default, reactCourse };

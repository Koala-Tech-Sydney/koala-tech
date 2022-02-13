import CourseHome from "../../../components/Course/CourseHome";
import useCourse, { Course } from "../../../hooks/useCourse";

let blockchainCourse: Course = {
  baseURI: "blockchain/",
  chapters: [
    {
      id: "",
      name: "Introduction",
      children: [
        {
          id: "",
          name: "Introduction of Blockchain",
          path: "",
          children: [
            { id: "", name: "History" },
            { id: "", name: "Web 3.0" },
            { id: "", name: "Smart Contract" },
            { id: "", name: "Oracle Problem" },
            { id: "", name: "Chainlink" },
          ],
        },
        {
          id: "",
          name: "Advantages of Blockchain",
          path: "",
          children: [],
        },
      ],
    },
  ],
};

const BlockchainCourseHome = () => {
  blockchainCourse = useCourse(blockchainCourse);
  return <CourseHome title="Blockchain" course={blockchainCourse}></CourseHome>;
};

export { BlockchainCourseHome as default, blockchainCourse };

import Home from "../../../components/Course/Home";
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
            { id: "", name: "History", path: "" },
            { id: "", name: "Web 3.0", path: "" },
            { id: "", name: "Smart Contract", path: "" },
            { id: "", name: "Oracle Problem", path: "" },
            { id: "", name: "Chainlink", path: "" },
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
  return <Home title="Blockchain" course={blockchainCourse} />;
};

export { BlockchainCourseHome as default, blockchainCourse };

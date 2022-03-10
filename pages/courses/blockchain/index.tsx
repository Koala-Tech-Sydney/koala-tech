import Home from "../../../components/Course/Home";
import useCourse, { Course } from "../../../hooks/useCourse";

let blockchainCourse: Course = {
  name: "Blockchain",
  baseURI: "/courses/blockchain/",
  units: [
    {
      id: "",
      name: "Introduction to Blockchain",
      chapters: [
        {
          id: "",
          name: "What is a Blockchain?",
          path: "",
          subchapters: [
            { id: "", name: "History", path: "" },
            { id: "", name: "Web 3.0", path: "" },
            { id: "", name: "Smart Contract", path: "" },
            { id: "", name: "Oracle Problem", path: "" },
            { id: "", name: "Chainlink", path: "" },
          ],
          requiredReadingTimeInMinute: 6,
        },
        {
          id: "",
          name: "Advantages of Blockchain",
          path: "",
          subchapters: [
            { id: "", name: "Decentralization", path: "" },
            { id: "", name: "Transparency and Flexibility", path: "" },
            { id: "", name: "Speed and Efficiency", path: "" },
            { id: "", name: "Security and Immutability", path: "" },
            { id: "", name: "Removal of Counterparty Party", path: "" },
            { id: "", name: "Trust Minimized Agreements", path: "" },
          ],
          requiredReadingTimeInMinute: 4,
        },
        {
          id: "",
          name: "How Do Blockchains Work?",
          path: "",
          subchapters: [
            {
              id: "",
              name: "Hash, Block, Blockchain and Distributed Blockchain",
              path: "",
            },
            { id: "", name: "Consensus", path: "" },
            { id: "", name: "Attacks", path: "" },
            { id: "", name: "Scalability", path: "" },
          ],
          requiredReadingTimeInMinute: 7,
        },
      ],
    },
    {
      id: "",
      name: "Solidity Basic Bootcamp",
      chapters: [],
    },
    {
      id: "",
      name: "Solidity Intermediate Bootcamp",
      chapters: [],
    },
    {
      id: "",
      name: "Solidity Advanced Bootcamp",
      chapters: [],
    },
    {
      id: "",
      name: "Solidity Mastery Bootcamp",
      chapters: [],
    },
  ],
  description: "Block Chain course description ...",
};

const BlockchainCourseHome = () => {
  blockchainCourse = useCourse(blockchainCourse);
  return <Home title="Blockchain" course={blockchainCourse} />;
};

export { BlockchainCourseHome as default, blockchainCourse };

import Home from "../../../components/Course/Home";
import useCourse, { Course } from "../../../hooks/useCourse";

let blockchainCourse: Course = {
  name: "Blockchain",
  baseURI: "/courses/blockchain/",
  units: [
    {
      id: "",
      name: "Introduction to Blockchain",
      children: [
        {
          id: "",
          name: "What is a Blockchain?",
          path: "",
          children: [
            { id: "", name: "History", path: "" },
            { id: "", name: "Web 3.0", path: "" },
            { id: "", name: "Smart Contract", path: "" },
            { id: "", name: "Oracle Problem", path: "" },
            { id: "", name: "Chainlink", path: "" },
          ],
          requiredReadingTimeInMinute: 15
        },
        {
          id: "",
          name: "Advantages of Blockchain",
          path: "",
          children: [
            { id: "", name: "Decentralization", path: "" },
            { id: "", name: "Transparency and Flexibility", path: "" },
            { id: "", name: "Speed and Efficiency", path: "" },
            { id: "", name: "Security and Immutability", path: "" },
            { id: "", name: "Removal of Counterparty Party", path: "" },
            { id: "", name: "Trust Minimized Agreements", path: "" },
          ],
          requiredReadingTimeInMinute: 15
        },
        {
          id: "",
          name: "How Do Blockchains Work?",
          path: "",
          children: [
            {
              id: "",
              name: "Hash, Block, Blockchain and Distributed Blockchain",
              path: "",
            },
            { id: "", name: "Consensus", path: "" },
            { id: "", name: "Attacks", path: "" },
            { id: "", name: "Scalability", path: "" },
          ],
          requiredReadingTimeInMinute: 15
        },
      ],
    },
    {
      id: "",
      name: "Solidity Basic Bootcamp",
      children: [],
    },
    {
      id: "",
      name: "Solidity Intermediate Bootcamp",
      children: [],
    },
    {
      id: "",
      name: "Solidity Advanced Bootcamp",
      children: [],
    },
    {
      id: "",
      name: "Solidity Mastery Bootcamp",
      children: [],
    },
  ],
  description: "Block Chain course description ..."
};

const BlockchainCourseHome = () => {
  blockchainCourse = useCourse(blockchainCourse);
  return <Home title="Blockchain" course={blockchainCourse} />;
};

export { BlockchainCourseHome as default, blockchainCourse };

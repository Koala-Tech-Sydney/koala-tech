import Home from "../../../components/Course/Home";
import useCourse, { Course } from "../../../hooks/useCourse";

const courseDescription = (
  <>
    Solidity is a language for writing smart contracts on the Ethereum
    blockchain, a contract in the sense of Solidity is a collection of code (its
    functions) and data (its state) that resides at a specific address on the
    Ethereum blockchain.
  </>
);

let solidityCourse: Course = {
  name: "Solidity",
  baseURI: "/courses/solidity/",
  units: [
    {
      id: "",
      name: "Basic Solidity",
      chapters: [
        {
          id: "",
          name: "Introduction",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 10,
        },
        {
          id: "",
          name: "State Variables",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
        {
          id: "",
          name: "Value Types",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 4,
        },
        {
          id: "",
          name: "Functions",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
        {
          id: "",
          name: "Function Modifiers",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
        {
          id: "",
          name: "Constructor",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
        {
          id: "",
          name: "Inheritance",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
        {
          id: "",
          name: "Visibility",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
        {
          id: "",
          name: "Reference Types",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
        {
          id: "",
          name: "Error Handling",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
        {
          id: "",
          name: "What is ERC",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
        {
          id: "",
          name: "ERC20",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
        {
          id: "",
          name: "Chainlink Price Feed",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
      ],
    },
    {
      id: "",
      name: "Intermediate Solidity",
      chapters: [
        {
          id: "",
          name: "Global Variables",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
        {
          id: "",
          name: "Units",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
        {
          id: "",
          name: "Import",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
        {
          id: "",
          name: "Interface",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
        {
          id: "",
          name: "Randomness",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
        {
          id: "",
          name: "Delegatecall",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
        {
          id: "",
          name: "ERC721",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
      ],
    },
    {
      id: "",
      name: "Advanced Solidity",
      chapters: [
        {
          id: "",
          name: "Assembly",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
        {
          id: "",
          name: "ERC1155",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
        {
          id: "",
          name: "ERC165",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 6,
        },
      ],
    },
  ],
  description: courseDescription,
};

const SolidityCourseHome = () => {
  solidityCourse = useCourse(solidityCourse);
  return <Home course={solidityCourse} />;
};

export { SolidityCourseHome as default, solidityCourse };

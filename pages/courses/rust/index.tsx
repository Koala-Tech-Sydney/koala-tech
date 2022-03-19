import useCourse, { Course } from "../../../hooks/useCourse";
import Home from "../../../components/Course/Home";

const courseDescription = (
  <>
    Rust is a general-purpose language focusing on speed, safety and
    concurrency. It is as fast as some lower-level languages like C++ while
    providing features from both lower-level languages and higher-level
    languages.
    <br />
    <br />
    It is also suitable for people who are interested in learning about system
    programming. Many people have learned about topics like operating systems
    development through Rust.
    <br />
    <br />
    Another thing that makes Rust a very interesting language to learn is it
    doesn’t have garbage collection, instead, there’s the concept of ownership.
    However, this unique characteristic also makes it a harder language to learn
    for people who have just started learning programming, therefore, it’s not
    recommended to choose Rust as your first programming language. For
    programmers with more experience though, Rust is an amazing language to
    learn.
  </>
);

let rustCourse: Course = {
  name: "Rust",
  baseURI: "/courses/rust/",
  units: [
    {
      id: "",
      name: "Basic Rust",

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
          name: "Hello World",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Cargo",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 8,
        },
        {
          id: "",
          name: "Variable",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Tuple",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "String",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Array",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Vector",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Enum",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Hashmap",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Struct",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Control Flow",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Comment",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Function",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Code Block",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Read/Write a file",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Read command line arguments",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Read user inputs",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Conditional Compilation",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
      ],
    },
    {
      id: "",
      name: "Intermediate Rust",

      chapters: [
        {
          id: "",
          name: "Reference",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Pass by Reference/Value",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Tuple Struct",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Trait",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Module",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Regex",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "HTTP Request",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Testing",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Parsing JSON",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Error Handling",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
      ],
    },
    {
      id: "",
      name: "Advanced Rust",

      chapters: [
        {
          id: "",
          name: "Generic Types",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Closure, Box Pointer and Iterators",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Lifetimes",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Macros",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
        {
          id: "",
          name: "Concurrency",
          path: "",
          subchapters: [],
          requiredReadingTimeInMinute: 5,
        },
      ],
    },
  ],
  description: courseDescription,
};

const RustCourseHome = () => {
  rustCourse = useCourse(rustCourse);
  // console.log(chapters);

  return <Home course={rustCourse} />;
};

export { RustCourseHome as default, rustCourse };

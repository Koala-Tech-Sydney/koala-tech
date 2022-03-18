import Image from "next/image";

import {
  Subtitle1,
  Subtitle2,
  Paragraph,
  Hyperlink,
} from "../../../../components/Text/Text";
import Chapter from "../../../../components/Course/Chapter";
import { rustCourse } from "..";
import ShellFormatter from "../../../../components/Formatter/ShellFormatter";
import RustFormatter from "../../../../components/Formatter/RustFormatter";

const HelloWorld = () => {
  return (
    <Chapter course={rustCourse}>
      <Paragraph>
        Following the tradition, we will learn how to write and run a hello
        world program at the beginning of our Rust journey. Firstly, let&apos;s
        create a new directory for this. Run the following commands in your
        terminal.
      </Paragraph>
      <ShellFormatter>{`> mkdir hello_world
> cd hello_world`}</ShellFormatter>
      <Paragraph>
        Create a new file called main.rs in this hello_world directory with the
        following content:
      </Paragraph>
      <RustFormatter>{`fn main() {
    println!("Hello world!");
}`}</RustFormatter>
      <Paragraph>
        Save the file, and go back to your terminal window. On Linux or macOS,
        enter the following commands:
      </Paragraph>
      <ShellFormatter>{`$ rustc main.rs # compile the source code to generate the executable
$ ./main # run the executable
Hello world!`}</ShellFormatter>
      <Paragraph>On Windows, use .\main.exe instead:</Paragraph>
      <ShellFormatter>{`> rustc main.rs # compile the source code to generate the executable
> .\\main.exe # run the executable
Hello world!`}</ShellFormatter>
      <Paragraph>
        You should see the string Hello world! print to the terminal. You are
        now officially a Rust programmer, congratulations!
      </Paragraph>
      <Paragraph>
        Now, let&apos;s go over what just happened in detail. Here&apos;s the
        first piece of the puzzle.
      </Paragraph>
      <RustFormatter showLineNumbers={false}>{`fn main() {

}`}</RustFormatter>
      <Paragraph>
        These lines declare a function named main that has no parameters and
        returns nothing. The main function is a special function in Rust,
        it&apos;s the first code that is run for every executable Rust program.
      </Paragraph>
      <Paragraph>
        Inside the main function, we have this code to print a string to the
        terminal. This line ends with a semicolon which indicates this
        expression is over, and the next one is ready to begin. Most lines of
        Rust code end with a ;.
      </Paragraph>
      <RustFormatter
        showLineNumbers={false}
      >{`println!("Hello, world!");`}</RustFormatter>
      <Paragraph>
        One important point is that println! is not a function, it&apos;s a
        macro, which is how metaprogramming is done in Rust.
      </Paragraph>
      <Paragraph>
        We&apos;ll discuss macros in more detail later in the course, for now
        you just need to know that when you see a ! that means that you&apos;re
        calling a macro instead of a normal function.
      </Paragraph>
    </Chapter>
  );
};

export default HelloWorld;

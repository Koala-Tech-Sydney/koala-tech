import Link from "next/link";

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

const Cargo = () => {
  return (
    <Chapter course={rustCourse}>
      <Paragraph>
        In our previous chapter, we compiled our hello world program using
        rustc. Just compiling with rustc is fine for small programs, but as your
        project grows, you&apos;ll want to be able to manage your project
        conveniently and make it easy to share your code with other people.
        Here&apos;s where Cargo shines.
      </Paragraph>
      <Paragraph>
        Cargo is a Rust project manager, it takes care of things like building
        your code, downloading and building the libraries that your code depends
        on, testing and many other things
      </Paragraph>
      <Paragraph>
        As the vast majority of Rust projects use Cargo, we will assume that
        you&apos;re using it for the rest of the course. Cargo comes installed
        with Rust itself so it should have already been installed if you follow
        the installation guide in the{" "}
        <Link href="/courses/rust/basic-rust/setup">Setup chapter</Link>.
      </Paragraph>
      <Paragraph>
        Run the following command in your terminal to check if Cargo is
        installed, if it outputs a version number then it has been installed
        already.
      </Paragraph>
      <ShellFormatter>{`$ cargo --version`}</ShellFormatter>
      <Paragraph>
        Now, we will use Cargo to build and run the Hello World program we just
        wrote in the{" "}
        <Link href="/courses/rust/basic-rust/hello-world">
          Hello World chapter
        </Link>
        .
      </Paragraph>
      <Paragraph>
        The following command creates an executable application within the
        hello-world directory. Executables are binary executable files often
        called just binaries.
      </Paragraph>
      <ShellFormatter>{`$ cargo new hello-world --bin
$ cd hello-world`}</ShellFormatter>
      <Paragraph>
        If we look into the hello-world directory, we can see that Cargo has
        generated two files and one directory for us: a Cargo.toml and a src
        directory with a main.rs file inside. It has also initialized a new git
        repository along with a .gitignore file.
      </Paragraph>
      <Paragraph>
        Open up Cargo.toml. The section starting with the line [package] are
        statements for configuring a package. The last line [dependencies] is
        the start of a section for you to list any crates (packages of Rust
        code) that your project will depend on so that Cargo knows to download
        and compile those. We won&apos;t need any crates for this Hello World
        project therefore below it it&apos;s empty.
      </Paragraph>
    </Chapter>
  );
};

export default Cargo;

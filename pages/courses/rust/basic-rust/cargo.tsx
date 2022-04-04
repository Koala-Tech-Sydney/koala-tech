import Link from "next/link";
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
      <Image
        src="/images/courses/rust/cargo/hello-world-cargo.png"
        alt="File structure created by cargo"
        height="168"
        width="154"
      />
      <Paragraph>
        Open up Cargo.toml. The section starting with the line [package] are
        statements foor configuring a package. The last line [dependencies] is
        the start of a section for you to list any crates (packages of Rust
        code) that your project will depend on so that Cargo knows to download
        and compile those. We won&apos;t need any crates for this Hello World
        project therefore below it it&apos;s empty.
      </Paragraph>
      <RustFormatter>{`[package]
name = "hello-world"
version = "0.1.0"
edition = "2021"

[dependencies]`}</RustFormatter>
      <Paragraph>
        Now let&apos;s look at src/main.rs. Cargo has generated a simple “Hello
        World!” program for you!
      </Paragraph>
      <RustFormatter>{`fn main() {
    println!("Hello, world!");
}`}</RustFormatter>
      <Paragraph>
        Now, run the following command to compile your program.
      </Paragraph>
      <ShellFormatter>{`$ cargo build`}</ShellFormatter>
      <Paragraph>
        This creates an executable file in target/debug/hello_cargo (or
        target\debug\hello_cargo.exe on Windows), which you can run with this
        command:
      </Paragraph>
      <ShellFormatter>{`$ ./target/debug/hello_cargo # or .\\target\\debug\\hello_cargo.exe on Windows
Hello, world!`}</ShellFormatter>
      <Paragraph>
        Running cargo build for the first time also causes Cargo to create a new
        file at the top level called Cargo.lock. Cargo uses Cargo.lock to keep
        track of the exact versions of dependencies used to build your project.
        You won&apos;t ever need to touch this file yourself; Cargo will manage
        its contents for you.
      </Paragraph>
      <Paragraph>
        Alternatively, if you want to run the program directly, we can also use
        cargo run to compile and then run it immediately.
      </Paragraph>
      <ShellFormatter>{`$ cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.0 secs
     Running \`target/debug/hello_cargo\`
Hello, world!`}</ShellFormatter>
      <Paragraph>
        Notice that this time, we didn&apos;t see the output telling us that
        Cargo was compiling hello_cargo. Cargo figured out that the files
        hadn&apos;t changed, so it just ran the binary. If you had modified your
        source code, Cargo would have rebuilt the project before running it, and
        you would have seen output like this
      </Paragraph>
      <ShellFormatter>{`$ cargo run
   Compiling hello_cargo v0.1.0 (file:///projects/hello_cargo)
    Finished dev [unoptimized + debuginfo] target(s) in 0.33 secs
     Running \`target/debug/hello_cargo\`
Hello, world!`}</ShellFormatter>
      <Paragraph>
        Finally, let&apos;s introduce the cargo check. This will quickly check
        your code to make sure that it compiles, but not bother producing an
        executable. It&apos;s useful when you want to quickly check if your code
        compiles, that&apos;s because running cargo check is much faster than
        running cargo build.
      </Paragraph>
      <ShellFormatter>{`$ cargo check
   Compiling hello_cargo v0.1.0 (file:///projects/hello_cargo)
    Finished dev [unoptimized + debuginfo] target(s) in 0.32 secs`}</ShellFormatter>
      <Paragraph>
        When your project is finally ready for release, you can use cargo build
        --release to compile your project with optimizations. This will create
        an executable in target/release instead of target/debug. These
        optimizations make your Rust code run faster, but turning them on makes
        your program take longer to compile.
      </Paragraph>
      <Paragraph>
        That&apos;s all you need to get started on using Cargo! You have now
        learnt how to build and compile Rust programs using this convenient
        tool, Whoopee!!!
      </Paragraph>
    </Chapter>
  );
};

export default Cargo;

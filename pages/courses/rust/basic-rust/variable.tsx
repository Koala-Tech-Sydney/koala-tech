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
import SubChapter from "../../../../components/Course/SubChapter";

const Variable = () => {
  return (
    <Chapter course={rustCourse}>
      <Paragraph>
        In this chapter, we will introduce how variables work in Rust and some
        of the basic variable types.
      </Paragraph>
      <Paragraph>In Rust, all variables are immutable by default.</Paragraph>
      <RustFormatter
        showLineNumbers={false}
      >{`let i = 4; // this creates a variable storing the value 4
i = 5; // this attempts to assign the value 5 to the variable however it gives an error`}</RustFormatter>
      <Paragraph>
        In order to make variables mutable, you need to use the mut keyword.
      </Paragraph>
      <RustFormatter showLineNumbers={false}>{`let mut i = 4;
i = 5; // this is okay`}</RustFormatter>
      <Paragraph>
        The reason that the Rust team makes this decision of making all
        variables immutable by default is it can encourage developers to write
        cleaner code. How is that possible? That comes down to the concept of
        shadowing.
      </Paragraph>
      <Paragraph>
        In Rust, we can declare a new variable with the same name as a previous
        variable, and the new variable shadows the previous variable, that is,
        the previous variable will no longer be accessible in the current block
        of code (a block of code in Rust is defined as a bunch of codes that are
        enclosed by a pair of curly brackets).
      </Paragraph>
      <RustFormatter>{`fn main() {
    let x = 10;
    {
        let x = 5;
        println!("x: {}", x); // this substitutes the value of x into {}
    }
    let x = "I'm a string slice";
    println!("x: {}", x);
    let x = true;
    println!("x: {}", x);
}`}</RustFormatter>
      <Paragraph>If you run the above program, the output will be</Paragraph>
      <ShellFormatter>{`x: 5
x: I'm a string slice
x: true`}</ShellFormatter>
      <Paragraph>
        So, yeah that&apos;s cool but how is that useful? Have you ever dealt
        with a program with hundreds or thousands of lines of code in one file?
        A variable in these gigantic programs sometimes is used in a line that
        is far away from the line where the variable was declared. This would
        make it harder to understand the code.
      </Paragraph>
      <RustFormatter showLineNumbers={false}>{`let mut counter = 10;
// ...
// thousands lines of code
// ...
counter = 5;`}</RustFormatter>
      <Paragraph>
        Also, sometimes you may want to declare a new variable that serves the
        same purpose as a previously declared variable, however it may be
        stressful for you to come up with another variable name that is suitable
        so eventually you decided to name your variables using some cryptic
        naming ways.
      </Paragraph>
      <RustFormatter showLineNumbers={false}>{`let mut counter_1 = 10;
// some logic
let mut counter_2 = 5;
// some logic`}</RustFormatter>
      <Paragraph>
        Instead, you could just make use of shadowing by declaring a variable
        with the same name as the previous variable. That saves you time on
        choosing variable names and also makes the logic that utilizes the
        variable and the variable declaration come closer together, thus
        producing better and more understandable code.
      </Paragraph>
      <RustFormatter showLineNumbers={false}>{`let mut counter = 10;
// some logic
let mut counter = 5;
// some logic`}</RustFormatter>
      <Paragraph>
        Now, let&apos;s discuss a little bit about variable types. Normally when
        you declare and initialize a variable at the same time you don&apos;t
        have to specify the variable type, the compiler will infer it for you.
      </Paragraph>
      <RustFormatter showLineNumbers={false}>{`let x = 12;`}</RustFormatter>
      <Paragraph>
        However, suppose you want to specify it, you can do it this way.
      </Paragraph>
      <RustFormatter
        showLineNumbers={false}
      >{`let x: i32 = 12; // this stores a signed 32-bit integer`}</RustFormatter>
      <Paragraph>
        You can also declare a constant, which is always immutable, using the
        const keyword. You must specify the variable type when declaring a
        constant.
        <br />
        Notice the 100_000_000 syntax is not necessary, you can safely use
        100000000 and it will still work. That&apos;s just a cleaner way to
        write an integer with lots of digits, you can even use this syntax for
        non-constants!
      </Paragraph>
      <RustFormatter
        showLineNumbers={false}
      >{`const SOME_CONSTANT: i32 = 100_000_000;`}</RustFormatter>
      <Paragraph>
        Now we understand the foundation of how variables work in Rust,
        let&apos;s now dive into some of the most common variable types.
      </Paragraph>
      <SubChapter name="Integer" />
      <Paragraph>
        Integers in Rust can be 8, 16, 32 or 64 bits and they can either be
        signed or unsigned.
        <br />
        Without specifying the type, an integer is inferred by the compiler as
        i32, i.e. a 32-bit integer that can store both positive and negative
        values.
      </Paragraph>
      <RustFormatter
        showLineNumbers={false}
      >{`let x = 12; // equivalent to let x: i32 = 12;
let x: u32 = 15; // 32-bit unsigned integer
let x: i8 = -127; // 8-bit signed integer, this can store integers between -128 and 127`}</RustFormatter>
      <SubChapter name="Float" />
      <Paragraph>
        There are two float types, f32 and f64. By default a float is f64, i.e a
        64-bit floating point.
      </Paragraph>
      <RustFormatter
        showLineNumbers={false}
      >{`let x = 2.3; // equivalent to let x: f64 = 2.3;
let x: f32 = 1.5;`}</RustFormatter>
      <SubChapter name="Char" />
      <Paragraph>A char stores a single 8-bit character.</Paragraph>
      <RustFormatter
        showLineNumbers={false}
      >{`let x = 'c'; // equivalent to let x: char = 'c';`}</RustFormatter>
      <SubChapter name="Boolean" />
      <RustFormatter
        showLineNumbers={false}
      >{`let x = true; // equivalent to let x: bool = false;
let x = false;`}</RustFormatter>
      <SubChapter name="Tuple" />
      <Paragraph>A tuple in Rust can store a collection of values.</Paragraph>
      <RustFormatter
        showLineNumbers={false}
      >{`let tup: (i32, f64, u8) = (500, 6.4, 1);`}</RustFormatter>
      <Paragraph>
        You can access each individual value within a tuple using the dot
        notation.
      </Paragraph>
      <RustFormatter
        showLineNumbers={false}
      >{`let tup = (20, 25, 50, (1, 5, 3), true, "Rust");
println!("{}", tup.4); // true
println!("{}", (tup.3).2); // 3`}</RustFormatter>
      <Paragraph>
        You can assign values inside a tuple to multiple variables at once.
      </Paragraph>
      <RustFormatter showLineNumbers={false}>{`let tup = (20, 25, 40);
let (a, b, c) = tup;`}</RustFormatter>
      <Paragraph>
        If you want to ignore some of the values, you can assign them to _.
      </Paragraph>
      <RustFormatter
        showLineNumbers={false}
      >{`let (_, _, c) = tup;`}</RustFormatter>
    </Chapter>
  );
};

export default Variable;

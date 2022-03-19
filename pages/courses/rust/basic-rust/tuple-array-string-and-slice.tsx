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

const TupleArrayStringAndSlice = () => {
  return (
    <Chapter course={rustCourse}>
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
      <SubChapter name="Array" />
      <Paragraph>
        An array in Rust is a fixed-size container which contains items of one
        particular data type.
      </Paragraph>
      <RustFormatter
        showLineNumbers={false}
      >{`let numbers = [1, 2, 3]; // this creates an array`}</RustFormatter>
      <Paragraph>
        You can print an array to the terminal using the println! macro.
      </Paragraph>
      <RustFormatter showLineNumbers={false}>{`let numbers = [1, 2, 3];
println!("{:?}", numbers);
// output:
// [1, 2, 3]`}</RustFormatter>
      <Paragraph>
        There are many ways to iterate through all the items inside an array.
      </Paragraph>
      <RustFormatter showLineNumbers={false}>{`let numbers = [1, 2, 3];
// this creates an iterator from the array using the iter() method and the for loop
for n in numbers.iter() {
    println!("{}", n)
}
// output:
// 1
// 2
// 3
 
// this access each item within the array by using its index and the for loop
for n in 0..numbers.len() {
    println!("{}", numbers[n])
}
// output:
// 1
// 2
// 3`}</RustFormatter>
      <Paragraph>
        You can specify the type of the items in the array. For example, the
        following specifies an array of three 32-bit integers.
      </Paragraph>
      <RustFormatter
        showLineNumbers={false}
      >{`let numbers: [i32; 3] = [1, 2, 3];
println!("{:?}", numbers);
// output:
// [1, 2, 3]`}</RustFormatter>
      <Paragraph>
        You can initialize an array with items set to a default value. For
        example, the following creates an array of 10 integers, each slot is
        initialized to 2.
      </Paragraph>
      <RustFormatter showLineNumbers={false}>{`let numbers = [2; 10];
println!("{:?}", numbers);
// output:
// [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]`}</RustFormatter>
    </Chapter>
  );
};

export default TupleArrayStringAndSlice;

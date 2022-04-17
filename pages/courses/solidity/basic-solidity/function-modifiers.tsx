import Image from "next/image";
import Link from "next/link";

import {
  Subtitle1,
  Subtitle2,
  Subtitle3,
  Paragraph,
  Hyperlink,
  HotKey,
  FeaturedText,
} from "../../../../components/Text/Text";
import Chapter from "../../../../components/Course/Chapter";
import { solidityCourse } from "..";
import SolidityFormatter from "../../../../components/Formatter/SolidityFormatter";
import SubChapter from "../../../../components/Course/SubChapter";

const FunctionModifiers = () => {
  return <Chapter course={solidityCourse}></Chapter>;
};

export default FunctionModifiers;

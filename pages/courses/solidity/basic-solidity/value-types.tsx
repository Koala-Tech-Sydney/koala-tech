import Image from "next/image";
import Link from "next/link";

import {
  Subtitle1,
  Subtitle2,
  Paragraph,
  Hyperlink,
  HotKey,
  FeaturedText,
} from "../../../../components/Text/Text";
import Chapter from "../../../../components/Course/Chapter";
import { solidityCourse } from "..";
import SolidityFormatter from "../../../../components/Formatter/SolidityFormatter";
import SubChapter from "../../../../components/Course/SubChapter";

const ValueTypes = () => {
  return (
    <Chapter course={solidityCourse}>
      <Paragraph>
        These types will always be passed by value, i.e. they are always copied
        when they are used as function arguments or assigned to another variable
        so that when you modify the copy you won’t change the value of the
        original variable.
      </Paragraph>
      <SubChapter name="int and uint" />
      <Paragraph>
        There are a number of types of int (signed integer) and uint (unsigned
        integer) versions at your disposal. int and uint are synonyms for int256
        and uint256. For an integer type <FeaturedText>X</FeaturedText>, you can
        use <FeaturedText>type(X).min</FeaturedText> and{" "}
        <FeaturedText>type(X).max</FeaturedText> to access the minimum and
        maximum value representable by the type.
      </Paragraph>
      <SolidityFormatter showLineNumbers={false}>{`int i;
int8 i8;
int16 i16;
int24 i24;
// ... up to
int256 i256;
uint ui;
uint8 ui8;
uint16 ui16;
uint24 ui24;
// ... up to
uint256 = ui256;`}</SolidityFormatter>
      <Paragraph>
        You should use a smaller integer whenever possible because storage
        causes higher transaction fees.
      </Paragraph>
      <Paragraph>
        You can typecast a smaller integer to a larger integer.
      </Paragraph>
      <SolidityFormatter showLineNumbers={false}>{`int8 a = -128;
int256 b = a;`}</SolidityFormatter>
      <Paragraph>Which is the same as</Paragraph>
      <SolidityFormatter showLineNumbers={false}>{`int8 a = -128;
int256 b = int256(a);`}</SolidityFormatter>
      <SubChapter name="address" />
      <Paragraph>
        An address type in Solidity holds a 20-byte value, which is the size of
        an Ethereum address. An address payable type is the same as address, but
        with additional function transfer and send. You can send Ether to an
        address payable, but you can’t send Ether to a plain address.
      </Paragraph>
      <Paragraph>
        The concept of payable and non-payable addresses only exists in the
        Solidity type system at compile-time. The difference between payable and
        non-payable addresses is gone in the compiled contract code.
      </Paragraph>
      <SolidityFormatter showLineNumbers={false}>{`address koalaAddress = 0x5520ADf9bB6179fD1065d57Ea3b0d286BD9F3858;
address payable payableKoalaAddress = payable(0x5520ADf9bB6179fD1065d57Ea3b0d286BD9F3858);`}</SolidityFormatter>
      <Paragraph>
        address payable can be implicitly or explicitly cast to address, whereas
        conversions from address to address payable must be explicit via{" "}
        <FeaturedText>payable([address])</FeaturedText>. In the example below,{" "}
        <FeaturedText>msg.sender</FeaturedText> is a global variable which
        stores the address of the account which initiates the current
        transaction. If you are deploying this contract then{" "}
        <FeaturedText>msg.sender</FeaturedText> will be equal to your account
        address. However, later if you or someone else calls the public
        functions within your deployed contract, then{" "}
        <FeaturedText>msg.sender</FeaturedText> will be yours or someone else’s
        account address respectively.
      </Paragraph>
      <SolidityFormatter showLineNumbers={false}>{`address payable addr1 = payable(msg.sender);
address addr2 = addr1;
address addr3 = address(addr1);`}</SolidityFormatter>
      <Paragraph>
        Explicit conversions to and from address are allowed for uint160,
        integer literals, bytes20 and contract types.
      </Paragraph>
      <SolidityFormatter showLineNumbers={false}>{`address addr1 = address(0x5520ADf9bB6179fD1065d57Ea3b0d286BD9F3858);
address addr2 = address(131);`}</SolidityFormatter>
      <SubChapter name="Enum" />
      <Paragraph>
        This can be used to create custom types with a finite set of values.
      </Paragraph>
      <SolidityFormatter showLineNumbers={false}>{`enum Grade {
    FAIL,
    PASS,
    CREDIT,
    DISTINCTION,
    HIGHER_DISTINCTION
}
Grade myGrade = Grade.HIGHER_DISTINCTION;`}</SolidityFormatter>
    </Chapter>
  );
};

export default ValueTypes;

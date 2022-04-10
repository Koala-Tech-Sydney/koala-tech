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

const Functions = () => {
  return (
    <Chapter course={solidityCourse}>
      <SubChapter name="State Mutability" />
      <Paragraph>
        Functions can be classified as state-changing and non-state-changing.
        State-changing functions initiate transactions, thus they cost gas. On
        the other hand, non-state changing functions don’t initiate transactions
        therefore you don’t need to pay gas fee for calling them.
      </Paragraph>
      <Subtitle2>State-changing Functions</Subtitle2>
      <Paragraph>
        These are functions that upon invocations modify the state of the
        blockchain.
      </Paragraph>
      <SolidityFormatter>{`// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Storage {

    uint256 number;

    // this is a state-changing function
    function store(uint256 num) public {
        number = num;
    }
}`}</SolidityFormatter>
      <Subtitle2>Non-state-changing Functions</Subtitle2>
      <Paragraph>
        These are functions that upon invocations guarantee not to modify the
        state of the blockchain.
      </Paragraph>
      <Subtitle3>View Functions</Subtitle3>
      <Paragraph>
        Functions can be declared as view if they promise not to modify the
        state.
      </Paragraph>
      <Paragraph>
        The following statements are considered modifying the state:
        <br />
        1. Writing to state variables.
        <br />
        2. Emitting events.
        <br />
        3. Creating other contracts.
        <br />
        4. Using <FeaturedText>selfdestruct</FeaturedText>.
        <br />
        5. Sending Ether via <FeaturedText>call</FeaturedText>.
        <br />
        6. Calling any function not marked as <FeaturedText>
          view
        </FeaturedText>{" "}
        or <FeaturedText>pure</FeaturedText>.
        <br />
        7. Using low-level calls.
        <br />
        8. Using inline assembly that contains certain opcodes.
      </Paragraph>
      <SolidityFormatter>{`// SPDX-License-Identifier: GPL-3.0
 
pragma solidity >=0.7.0 <0.9.0;

contract Demo {
 
    uint256 age;

    function getAgeTimesNumber(uint256 number) public view returns (uint256) {
        return age * number;
    }

    function getMsgSender() public view returns (address) {
        return msg.sender;
    }
}`}</SolidityFormatter>
      <Subtitle3>Pure Functions</Subtitle3>
      <Paragraph>
        Functions can be declared pure in which case they promise not to read
        from or modify the state. In particular, it should be possible to
        evaluate a pure function at compile-time given only its inputs and{" "}
        <FeaturedText>msg.data</FeaturedText> (more on that later), but without
        any knowledge of the current blockchain state.
      </Paragraph>
      <Paragraph>
        The following are considered reading from the state:
        <br />
        1. Reading from state variables.
        <br />
        2. Accessing <FeaturedText>address(this).balance</FeaturedText> or{" "}
        <FeaturedText>{"<address>"}.balance</FeaturedText>.
        <br />
        3. Accessing any of the members of block, tx, msg (with the exception of{" "}
        <FeaturedText>msg.sig</FeaturedText> and{" "}
        <FeaturedText>msg.data</FeaturedText>).
        <br />
        4. Calling any function not marked pure.
        <br />
        5. Using inline assembly that contains certain opcodes.
      </Paragraph>
      <SolidityFormatter>{`// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Demo {
    function multiply(uint256 a, uint256 b) public pure returns (uint256) {
        return a * b;
    }
}`}</SolidityFormatter>
      <Subtitle2>Appendix</Subtitle2>
      <Paragraph>
        Function call arguments can be given by name, in any order, if they are
        enclosed in <FeaturedText>{"{ }"}</FeaturedText>.
      </Paragraph>
      <SolidityFormatter>{`// SPDX-License-Identifier: GPL-3.0
 
pragma solidity >=0.7.0 <0.9.0;

contract Demo {
    function twoTimesThree() public pure returns (uint256) {
        // same as multiple(2, 3) or multiple({b: 3, a: 2})
        return multiply({a: 2, b: 3});
    }

    function multiply(uint256 a, uint256 b) public pure returns (uint256) {
        return a * b;
    }
}`}</SolidityFormatter>
      <Paragraph>
        The names of unused parameters (especially return parameters) can be
        omitted. Those parameters will still be present on the stack, but they
        are inaccessible.
      </Paragraph>
      <SolidityFormatter>{`// SPDX-License-Identifier: GPL-3.0
 
pragma solidity >=0.7.0 <0.9.0;

contract Demo {
    function foo(uint k, uint) public pure returns(uint) {
        return k;
    }
}`}</SolidityFormatter>
      <Paragraph>
        You can either explicitly assign values to return variables.
      </Paragraph>
      <SolidityFormatter>{`// SPDX-License-Identifier: GPL-3.0
 
pragma solidity >=0.7.0 <0.9.0;

contract Demo {
    function foo(uint _a, uint _b) public pure returns(uint result_1, uint result_2) {
        result_1 = _a;
        result_2 = _b;
    }
}
`}</SolidityFormatter>
      <Paragraph>
        Or you can provide return values directly with the return statement. In
        that case, the names of return variables can be omitted.
      </Paragraph>
      <SolidityFormatter>{`// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Demo {
    function foo(uint _a, uint _b) public pure returns(uint result_1, uint result_2) {
        return (_a, _b);
    }
}`}</SolidityFormatter>
    </Chapter>
  );
};

export default Functions;

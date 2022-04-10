import Image from "next/image";
import Link from "next/link";

import { Subtitle2, Paragraph } from "../../../../components/Text/Text";
import Chapter from "../../../../components/Course/Chapter";
import { solidityCourse } from "..";
import SolidityFormatter from "../../../../components/Formatter/SolidityFormatter";
import SubChapter from "../../../../components/Course/SubChapter";

const StateVariables = () => {
  return (
    <Chapter course={solidityCourse}>
      <Paragraph>
        These are variables whose values are permanently stored in the
        contract&apos;s storage on the blockchain. They represent part of the
        state of the contract and the blockchain. If you are unfamiliar with the
        meaning of state, in layman&apos;s terms, the current state of a
        contract means what the contract looks like and what values it is
        storing at the moment.
      </Paragraph>
      <Paragraph>
        When declaring a variable, you can choose not to initialize it with a
        value, in that case, it will be initialized as the default value of that
        type. For example, integers are initialized to 0 and strings are
        initized to an empty string.
      </Paragraph>
      <SolidityFormatter>{`// SPDX-License-Identifier: GPL-3.0
 
pragma solidity >=0.7.0 <0.9.0;

contract Storage {
    int256 favouriteNumber;
    uint256 age = 0;
    string name = "default";
}`}</SolidityFormatter>
      <Paragraph>
        If you deploy the above contract, you will find out you don’t have any
        means to interact with this contract on Remix, that&apos;s because state
        variables are private by default. In order to see the value stored in a
        state variable inside a contract, you have to either declare the
        variable as public, or you can create a function that returns its value
        just like what we did in the{" "}
        <Link href="/courses/solidity/basic-solidity/introduction">
          introduction chapter
        </Link>
        . (this is not exactly true though, even if you declare a variable as
        private, that&apos;s still ways to inspect its stored value from the
        outside world, more on that later)
      </Paragraph>
      <Paragraph>
        Here, rather than creating methods which return individual values of the
        variables, we will declare these variables as public by adding the
        public keyword.
      </Paragraph>
      <SolidityFormatter showLineNumbers={false}>{`contract Storage {
    int256 public favouriteNumber;
    uint256 public age = 0;
    string public name = "default";
}`}</SolidityFormatter>
      <Paragraph>
        Now, if you deploy the contract again, you&apos;ll see something that
        may be unexpected for you. 3 view functions are present and by calling
        them you will get the current value of the state variable which has the
        same name as the function. The reason that these functions are present
        is because the compiler generates a default getter method for every
        public variable.
      </Paragraph>
      <Image
        src="/images/courses/solidity/state-variables/default-getter.png"
        alt="default getter created by the compiler"
        height="331"
        width="406"
      />
      <SubChapter name="Constant and Immutable" />
      <Paragraph>
        State variables can be declared as constant or immutable. In both cases,
        the variables cannot be modified after the contract has been
        constructed. For constant variables, the value has to be fixed at
        compile-time, while for immutable, it can still be assigned at
        construction time.
      </Paragraph>
      <Paragraph>
        Compared to regular state variables, the gas costs of constant and
        immutable variables are much lower. For a constant variable, the
        expression assigned to it is copied to all the places where it is
        accessed and also re-evaluated each time. This allows for local
        optimizations. Immutable variables are evaluated once at construction
        time and their value is copied to all the places in the code where they
        are accessed. 32 bytes are reserved for each immutable variable, even if
        they would fit in fewer bytes. Due to this, constant values can
        sometimes be cheaper than immutable values.
      </Paragraph>
      <Paragraph>
        Currently, not all types for constants and immutables are implemented.
        For example, the constant keyword supports only{" "}
        <Link href="/courses/solidity/basic-solidity/value-types">
          value types
        </Link>{" "}
        and string, while the immutable keyword supports only{" "}
        <Link href="/courses/solidity/basic-solidity/value-types">
          value types
        </Link>
        .
      </Paragraph>
      <Subtitle2>Constant</Subtitle2>
      <Paragraph>
        For constant variables, the value has to be a constant at compile time
        and it has to be assigned where the variable is declared. Any expression
        that accesses storage, blockchain data (e.g. block.timestamp,
        address(this).balance or block.number) or execution data (msg.value or
        gasleft()) or makes calls to external contracts is disallowed. It is
        also possible to define constant variables outside of a contract.
      </Paragraph>
      <SolidityFormatter>{`int256 constant specialNum = 13;
contract TestImmutable {
    int256 constant favouriteNumber = 1;
    string constant name = "default";
}`}</SolidityFormatter>
      <Subtitle2>Immutable</Subtitle2>
      <Paragraph>
        State variables can be marked immutable which causes them to be
        read-only, but assignable in the constructor. A constructor is a
        function which will be called once when the contract is deployed, then
        it&apos;s never called again by anyone. If you initialize an immutable
        variable when it&apos;s declared, then you won&apos;t be able to assign
        a new value to it in the constructor.
      </Paragraph>
      <SolidityFormatter>{`contract TestImmutable {
    int256 public immutable favouriteNumber = 3;
    int256 public immutable age;
 
    constructor (int256 _age) public {
        age = _age;
    }
}`}</SolidityFormatter>
    </Chapter>
  );
};

export default StateVariables;

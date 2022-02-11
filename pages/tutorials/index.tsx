import { Fragment } from "react";
import Link from "next/link";
import TwoSidesMainSection from "../../components/Structure/TwoSidesMainSection";

const tutorialList = [
  { name: "React", path: "/tutorials/react" },
  { name: "Blockchain", path: "/tutorials/blockchain" },
];

const TutorialListMainSection = () => {
  return (
    // TODO: just a temporary solution to make the tutorials accessible!
    <Fragment>
      {tutorialList.map((tutorial) => {
        return (
          <Fragment key={tutorial.name}>
            <Link href={tutorial.path}>
              <a>{tutorial.name}</a>
            </Link>
            <br />
          </Fragment>
        );
      })}
    </Fragment>
  );
};

const TutorialList = () => {
  return (
    <TwoSidesMainSection
      leftSection={<div></div>}
      mainSection={<TutorialListMainSection />}
      rightSection={<div></div>}
    />
  );
};

export default TutorialList;

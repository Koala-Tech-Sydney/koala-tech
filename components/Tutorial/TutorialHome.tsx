import { Fragment } from "react";
import TwoSidesMainSection from "../Structure/TwoSidesMainSection";
import { Title } from "../Text/Text";

type Props = {
  title: string;
};

const TutorialHome: React.FC<Props> = ({ title, children }) => {
  return (
    <TwoSidesMainSection
      leftSection={<div></div>}
      mainSection={
        <Fragment>
          <Title>{title}</Title>
          {children}
        </Fragment>
      }
      rightSection={<div></div>}
    />
  );
};

export default TutorialHome;

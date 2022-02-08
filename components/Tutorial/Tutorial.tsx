import { Fragment } from "react";
import { Title } from "../Text/Text";
import TwoSidesMainSection from "../Structure/TwoSidesMainSection";

type Props = {
  title: string;
};

const Tutorial: React.FC<Props> = ({ title, children }) => {
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

export default Tutorial;

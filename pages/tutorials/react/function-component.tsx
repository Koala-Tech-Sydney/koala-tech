import JavaScriptFormatter from "../../../components/Formatter/JavaScriptFormatter";
import NoteCard from "../../../components/Tutorial/NoteCard";
import styles from "./function-component.module.scss";
import TwoSidesMainSection from "../../../components/Structure/TwoSidesMainSection";

import {
  Title,
  Subtitle1,
  Subtitle2,
  Paragraph,
  Hyperlink,
} from "../../../components/Tutorial/TutorialText";
import { Fragment } from "react";

const FunctionComponentMainSection = () => {
  return (
    <Fragment>
      <Title>Function Component</Title>
    </Fragment>
  );
};

const FunctionComponent = () => {
  return (
    <TwoSidesMainSection
      leftSection={<div></div>}
      mainSection={<FunctionComponentMainSection />}
      rightSection={<div></div>}
    />
  );
};

export default FunctionComponent;

import JavaScriptFormatter from "../../../components/Formatter/JavaScriptFormatter";
import NoteCard from "../../../components/Tutorial/NoteCard";
import styles from "./jsxdeepdive.module.scss";
import TwoSidesMainSection from "../../../components/Structure/TwoSidesMainSection";

import {
  Title,
  Subtitle1,
  Subtitle2,
  Paragraph,
  Hyperlink,
} from "../../../components/Text/Text";
import { Fragment } from "react";

const JSXDeepDiveMainSection = () => {
  return (
    <Fragment>
      <Title>JSXDeepDive</Title>
    </Fragment>
  );
};

const JSXDeepDive = () => {
  return (
    <TwoSidesMainSection
      leftSection={<div></div>}
      mainSection={<JSXDeepDiveMainSection />}
      rightSection={<div></div>}
    />
  );
};

export default JSXDeepDive;

import TwoSidesMainSection from "../../../components/Structure/TwoSidesMainSection";
import { Fragment } from "react";
import styles from "./index.module.scss";

const BlockchainTutorialHomeMainSection = () => {
  return <Fragment></Fragment>;
};

const BlockchainTutorialHome = () => {
  return (
    <TwoSidesMainSection
      leftSection={<div></div>}
      mainSection={<BlockchainTutorialHomeMainSection />}
      rightSection={<div></div>}
    />
  );
};

export default BlockchainTutorialHome;

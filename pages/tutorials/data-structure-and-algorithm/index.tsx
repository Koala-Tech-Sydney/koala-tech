import TwoSidesMainSection from "../../../components/Structure/TwoSidesMainSection";
import ChapterList from "../../../components/Structure/ChapterList";
import { Fragment } from "react";
import styles from "./index.module.scss";

const DataStructureAndAlgorithmTutorialHomeMainSection = () => {
  return <Fragment></Fragment>;
};

const DataStructureAndAlgorithmTutorialHome = () => {
  return (
    <TwoSidesMainSection
      leftSection={<div></div>}
      mainSection={<DataStructureAndAlgorithmTutorialHomeMainSection />}
      rightSection={<div></div>}
    />
  );
};

export default DataStructureAndAlgorithmTutorialHome;

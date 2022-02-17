import styles from "../styles/Home.module.scss";
import { Fragment } from "react";
import HomeScreen from "../components/Home/HomeScreen";
import HomeContent from "../components/Home/HomeContent";


export default function Home() {
  return (
    <Fragment>
      <HomeScreen />
      <HomeContent />
    </Fragment>
  );
}

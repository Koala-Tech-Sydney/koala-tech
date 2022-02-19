import styles from "../styles/Home.module.scss";
import { Fragment } from "react";
import HomeScreen from "../components/Home/HomeScreen";
import HomeCourseList from "../components/Home/HomeCourseList";
import HomeFeature from "../components/Home/HomeFeature";

export default function Home() {
  return (
    <Fragment>
      <HomeScreen />
      <HomeFeature />
      <HomeCourseList />
    </Fragment>
  );
}

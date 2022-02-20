import styles from "../styles/Home.module.scss";
import { Fragment } from "react";
import HomeScreen from "../components/Home/HomeScreen";
import HomeFeatureSection from "../components/Home/HomeFeatureSection";
import HomeCourseListSection from "../components/Home/HomeCourseListSection";

export default function Home() {
  return (
    <Fragment>
      <HomeScreen />
      <HomeFeatureSection />
      <HomeCourseListSection />
    </Fragment>
  );
}

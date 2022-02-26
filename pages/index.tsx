import styles from "../styles/Home.module.scss";
import { Fragment } from "react";
import HomeBannerSection from "../components/Home/HomeBannerSection";
import HomeFeatureSection from "../components/Home/HomeFeatureSection";
import HomeCourseListSection from "../components/Home/HomeCourseListSection";

export default function Home() {
  return (
    <Fragment>
      <HomeBannerSection />
      <HomeFeatureSection />
      <HomeCourseListSection />
    </Fragment>
  );
}

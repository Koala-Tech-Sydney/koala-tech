import styles from "./HomeFeatureSection.module.scss";

const title1 = "Simple";
const title2 = "Depth";
const title3 = "Practical";
const paragraph1 =
  "Koala use minimal example to demonstrate concepts. You no longer need to read or copy and paste tons of meaningless codes to learn a simple concept.";
const paragraph2 =
  "Koala use minimal example to demonstrate concepts. You no longer need to read or copy and paste tons of meaningless codes to learn a simple concept.";
const paragraph3 =
  "Koala use minimal example to demonstrate concepts. You no longer need to read or copy and paste tons of meaningless codes to learn a simple concept.";

const Feature = (props: any) => {
  return (
    <div className={styles.feature}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.description}>{props.paragraph}</div>
    </div>
  );
};

const HomeFeature = () => {
  return (
    <div id={styles.homeFeatureContainer}>
      <div>&#60; Formula of Koala Tech &#62;</div>

      <div id={styles.featureContainer}>
        <Feature title={title1} paragraph={paragraph1} />
        <div className={styles.timeSymbol}>&times;</div>
        <Feature title={title2} paragraph={paragraph2} />
        <div className={styles.timeSymbol}>&times;</div>
        <Feature title={title3} paragraph={paragraph3} />
      </div>

      <div className={styles.conclusion}>
        Learning should be as easy, as fast as installing a package. <br />
        Let&apos;s start your coding journey with us today!
      </div>
    </div>
  );
};

export default HomeFeature;

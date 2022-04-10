import styles from "./HomeFeatureSection.module.scss";

const title1 = "Simple";
const title2 = "Depth";
const title3 = "Practical";
const paragraph1 =
  "Koala use minimal examples to demonstrate concepts. You no longer need to read or copy and paste tons of over-complicated codes to learn a simple concept.";
const paragraph2 =
  "Koala go into each knowledge in depth if necessary, it teaches you not only how to use a tool, but also how to apply it using the best practices.";
const paragraph3 =
  "Koala think being practical is usually better than being over-theoretical, coding should be fun, so we provide practice exercises for you to get your hands dirty!";

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

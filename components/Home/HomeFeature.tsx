import Image from 'next/image'
import styles from "./HomeFeature.module.scss";

const title1 = "Simple"
const title2 = "Depth"
const title3 = "Practical"
const paragraph1 = "Koala use minimal example to demonstrate concepts. You no longer need to read or copy and paste tons of meaningless codes to learn a simple concept.";
const paragraph2 = "Koala use minimal example to demonstrate concepts. You no longer need to read or copy and paste tons of meaningless codes to learn a simple concept.";
const paragraph3 = "Koala use minimal example to demonstrate concepts. You no longer need to read or copy and paste tons of meaningless codes to learn a simple concept.";



const HomeFeature = () => {
    return (
    <div id={styles.homeFeature}>
        <div id={styles.featureTitle}>
            &#60; Formula of Koala Tech &#62;
        </div>

        <div id={styles.featureContainer}>
        <FeatureContent title={title1} paragraph={paragraph1}/>
            <div className={styles.timeSymbol}>&times;</div>
            <FeatureContent title={title2} paragraph={paragraph2}/>
            <div className={styles.timeSymbol}>&times;</div>
            <FeatureContent title={title3} paragraph={paragraph3}/>
        </div>

        <div id={styles.featureConclusion}>
            Learning should be as easy, as fast as installing a package. <br/>
            Let's start your coding journey with us today!
        </div>
    </div>
    )
}

const FeatureContent = (props: any) => {

    return (
        <div className={styles.featureCard}>
            <div className={styles.contentTitle}>{props.title}</div>
            <div className={styles.contentDescription}>
                {props.paragraph}
            </div>
        </div>
    )
}

export default HomeFeature;
import styles from "../styles/tutorial.module.scss";
import SquareImageCard from "../components/Card/SquareImageCard";
import TwoSidesMainSection from "../components/Structure/TwoSidesMainSection";
import { Fragment } from "react";




export default function tutorial() {
    
    return (
        <div id={styles.tutorialFrontPage}>
            <TutorialFrontPageContent />
        </div>
    );
}

const TutorialFrontPageContent = () => {
    const imgLink1:string = "";
    const imgLink2:string = "images/blockchainCard.jpg";
    const imgLink3:string = "";
    const description1: string = "Description 1";
    const description2: string = "Description 2";
    const description3: string = "Description 3";

    return (
        <div className={styles.tutPageCoursesList}>
            <SquareImageCard imgLink={imgLink1} title="React" description={description1} />
            <SquareImageCard imgLink={imgLink2} title="Block Chain" description={description2} />
            <SquareImageCard imgLink={imgLink3} title="Course Title" description={description3} />
        </div>
    );
}

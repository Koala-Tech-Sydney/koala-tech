import SqualImageCard from '../../components/Card/SquareImageCard';
import { Fragment } from "react";
import Link from 'next/link'
import Button from '@mui/material/Button';
import terminalStyles from "./TerminalDrawing.module.scss"
import styles from "./homeContent.module.scss";


const HomeContent = () => {
  return (
      <div className={styles.homeContent}>
          
        <div className={terminalStyles.terminalDraw}>
            <div className={terminalStyles.terminalBar}>
                <div className={terminalStyles.terminalBtn} id={terminalStyles.btn1}></div>
                <div className={terminalStyles.terminalBtn} id={terminalStyles.btn2}></div>
                <div className={terminalStyles.terminalBtn} id={terminalStyles.btn3}></div>
            </div>

            <div className={terminalStyles.terminalWindow}>
                $ npm install Koala <br />
                $ ... Installing ...<br />
                $ Koala installed success! Happy coding!<br />
                <HomeCourseSection />
                <HomeFeatureSection />
            </div>
        </div>
        
        <Link href="/tutorials">
            <Button variant="contained" color="info" sx={{width: 220, textTransform: 'none', marginBottom: 8}}> View all courses </Button>
        </Link>  
      </div>        
  );
}

const HomeCourseSection = () => {
    return (
        <div className={styles.homeCourseSection}>
            <div className={styles.courseListContainer}>
              <div></div>
              <HomeCourseList />
              <div></div>
            </div>
        </div>
    );
}

const HomeCourseList = () => {
  const imgLink1:string = "";
  const imgLink2:string = "images/blockchainCard.jpg";
  const imgLink3:string = "";
  const description1: string = "Description 1";
  const description2: string = "Description 2";
  const description3: string = "Description 3";

  return (
    <div className={styles.homeCourseList}>
        <SqualImageCard imgLink={imgLink1} title="React" description={description1} />
        <SqualImageCard imgLink={imgLink2} title="Block Chain" description={description2} />
        <SqualImageCard imgLink={imgLink3} title="Course Title" description={description3} />
    </div>
  )
}

const HomeFeatureSection = () => {
    return (
        <div className={styles.homeFeatureSection}>

        </div>
    )
}


export default HomeContent;

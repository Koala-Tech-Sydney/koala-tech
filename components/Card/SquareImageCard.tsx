import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import styles from './SquareImageCard.module.scss'


const SquareImageCard = (props: { imgLink: string; title: string; description: string; }) => {
  return <Card className={styles.siCard}>
        <CardMedia
            component="img"
            height="150"
            image={props.imgLink}
            alt=""
            className={styles.cardImg}
        />

        <CardContent>
            <div className={styles.cardTitle}>
                <b>{props.title}</b>
            </div>
            <div className={styles.cardDescription}>
                {props.description}
            </div>
        </CardContent>

    </Card>    
}

export default SquareImageCard;

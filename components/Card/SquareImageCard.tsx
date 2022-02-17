import Card from '@mui/material/Card';
import { Fragment } from "react";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './SquareImageCard.module.scss'
import { style } from '@mui/system';


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
            <Typography gutterBottom variant="subtitle1" component="div">
                <b>{props.title}</b>
            </Typography>
            <Typography className={styles.cardDescription}>
                {props.description}
            </Typography>
        </CardContent>

    </Card>    
}

export default SquareImageCard;

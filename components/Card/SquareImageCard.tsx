import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import styles from "./SquareImageCard.module.scss";

type Props = {
  imgLink: string;
  title: string;
  description: string;
  alt: string;
};

const SquareImageCard: React.FC<Props> = ({
  imgLink,
  title,
  description,
  alt,
}) => {
  return (
    <Card className={styles.siCard}>
      <CardMedia className={styles.cardImg}>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src={imgLink}
            layout="fill"
            objectFit="cover"
            alt={alt}
            priority
          />
        </div>
      </CardMedia>

      <CardContent>
        <div className={styles.cardTitle}>
          <b>{title}</b>
        </div>
        <div className={styles.cardDescription}>{description}</div>
      </CardContent>
    </Card>
  );
};

export default SquareImageCard;

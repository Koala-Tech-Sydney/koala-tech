import Link from "next/link";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import styles from "./CourseCard.module.scss";

type Props = {
  uri: string;
  imgLink: string;
  title: string;
  description: string;
  alt: string;
};

const CourseCard: React.FC<Props> = ({
  uri,
  imgLink,
  title,
  description,
  alt,
}) => {
  return (
    <Link href={uri} passHref>
      <a>
        <Card className={styles.siCard}>
          <CardMedia className={styles.cardImg}>
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
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
      </a>
    </Link>
  );
};

export default CourseCard;

import { Fragment, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import styles from "./NameCard.module.scss";

const getSocialMediaButton = (name: string, uri: string) => {
  let icon: any;
  if (name == "Facebook") {
    icon = (
      <IconButton color="primary" aria-label={name}>
        <FacebookRoundedIcon />
      </IconButton>
    );
  } else if (name == "Twitter") {
    icon = (
      <IconButton color="primary" aria-label={name}>
        <TwitterIcon />
      </IconButton>
    );
  } else if (name == "GitHub") {
    icon = (
      <IconButton color="secondary" aria-label={name}>
        <GitHubIcon />
      </IconButton>
    );
  }

  return <a href={uri}>{icon}</a>;
};

type ExpandMoreProps = {
  expanded: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ExpandMore: React.FC<ExpandMoreProps> = ({ expanded, onClick }) => {
  const expandMoreClass =
    styles.expandMoreButton +
    " " +
    (expanded ? styles.expandLess : styles.expandMore);
  console.log(expandMoreClass);
  return (
    <IconButton
      className={expandMoreClass}
      color="primary"
      onClick={onClick}
      aria-label="show more"
      aria-expanded={expanded}
    >
      <ExpandMoreIcon />
    </IconButton>
  );
};

type NameCardProps = {
  info: {
    name: string;
    backgroundImage: {
      uri: string;
      alt: string;
    };
    avatarImage: {
      uri: string;
      alt?: string;
    };
    position: string;
    shortDescription: string;
    longDescription: string;
    socialMedia: {
      name: string;
      uri: string;
    }[];
  };
};

const NameCard: React.FC<NameCardProps> = ({ info }) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.only("xs"));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const cardClass =
    styles.card + " " + (isExtraSmallScreen ? styles.cardColumn : "");

  const longDescription = (
    <CardContent className={styles.secondary_section}>
      {info.longDescription}
    </CardContent>
  );

  const SocialMediaButtons = info.socialMedia.map((item) => {
    return getSocialMediaButton(item.name, item.uri);
  });

  return (
    <Card className={cardClass}>
      <Box className={styles.primary_section}>
        <Box className={styles.media_section}>
          <CardMedia
            component="img"
            image={info.backgroundImage.uri}
            alt={info.backgroundImage.alt}
          ></CardMedia>

          <Avatar
            className={styles.avatar}
            src={info.avatarImage.uri}
            alt={info.avatarImage.alt || info.name}
          />
        </Box>

        <CardContent className={styles.main_section}>
          <div className={`${styles.name} ${styles.textSection}`}>
            {info.name}
          </div>
          <div className={styles.textSection}>{info.position}</div>
          <div className={`${styles.shortDescription} ${styles.textSection}`}>
            {info.shortDescription}
          </div>
        </CardContent>

        <Stack
          className={styles.socialMediaButtons}
          direction="row"
          spacing={1}
        >
          {SocialMediaButtons}
        </Stack>

        {isExtraSmallScreen ? (
          <ExpandMore expanded={expanded} onClick={handleExpandClick} />
        ) : null}
      </Box>

      {isExtraSmallScreen ? (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {longDescription}
        </Collapse>
      ) : (
        <Fragment>{longDescription}</Fragment>
      )}
    </Card>
  );
};

export default NameCard;

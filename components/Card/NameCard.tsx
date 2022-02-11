import { Fragment, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
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
import { SmallText } from "../Text/Text";

const getSocialMediaButton = (name: string, uri: string) => {
  let icon: any;
  if (name == "Facebook") {
    icon = (
      <IconButton className={styles.facebook} aria-label={name}>
        <FacebookRoundedIcon />
      </IconButton>
    );
  } else if (name == "Instagram") {
    icon = (
      <>
        <svg width={0} height={0}>
          <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#4160D5" />
            <stop offset={1} stopColor="#F6B754" />
          </linearGradient>
        </svg>
        <IconButton aria-label={name}>
          <InstagramIcon sx={{ fill: "url(#linearColors)" }} />
        </IconButton>
      </>
    );
  } else if (name == "Twitter") {
    icon = (
      <IconButton className={styles.twitter} aria-label={name}>
        <TwitterIcon />
      </IconButton>
    );
  } else if (name == "GitHub") {
    icon = (
      <IconButton className={styles.github} aria-label={name}>
        <GitHubIcon />
      </IconButton>
    );
  }

  return (
    <a key={name} href={uri}>
      {icon}
    </a>
  );
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
    shortDescription: string | JSX.Element;
    longDescription: string | JSX.Element;
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

  const primarySectionClass =
    styles.primary_section +
    " " +
    (isExtraSmallScreen ? "" : styles.primary_section_border);

  const longDescription = (
    <CardContent className={styles.secondary_section}>
      {info.longDescription}
    </CardContent>
  );

  const socialMediaButtons = info.socialMedia.map((item) => {
    return getSocialMediaButton(item.name, item.uri);
  });

  return (
    <Card className={cardClass}>
      <Box className={primarySectionClass}>
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
        <Box className={styles.main_section}>
          <CardContent className={styles.short_description_section}>
            <div className={`${styles.name} ${styles.textSection}`}>
              {info.name}
            </div>
            <div className={styles.textSection}>{info.position}</div>
            <SmallText
              className={`${styles.shortDescription} ${styles.textSection}`}
            >
              {info.shortDescription}
            </SmallText>
          </CardContent>

          <Stack
            className={styles.socialMediaButtons}
            direction="row"
            spacing={1}
          >
            {socialMediaButtons}
          </Stack>

          {isExtraSmallScreen ? (
            <ExpandMore expanded={expanded} onClick={handleExpandClick} />
          ) : null}
        </Box>
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

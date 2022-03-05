import IconButton from "@mui/material/IconButton";
import FacebookIcon from "../Icon/FacebookIcon";
import InstagramIcon from "../Icon/InstagramIcon";
import YouTubeIcon from "../Icon/YouTubeIcon";
import DiscordIcon from "../Icon/DiscordIcon";
import GitHubIcon from "../Icon/GitHubIcon";
import LinkedInIcon from "../Icon/LinkedinIcon";

import styles from "./SocialMediaButton.module.scss";

type Props = {
  name: string;
  uri: string;
  className?: string;
};

const SocialMediaButton: React.FC<Props> = ({ name, uri, className }) => {
  let button = null;
  let ariaLabel = "";
  let iconClass = styles.icon + " " + className;
  switch (name) {
    case "Discord":
      button = <DiscordIcon className={iconClass} />;
      ariaLabel = "Discord";
      break;
    case "Instagram":
      ariaLabel = "Instagram";
      button = <InstagramIcon className={iconClass} />;
      break;
    case "Facebook":
      ariaLabel = "Facebook";
      button = <FacebookIcon className={iconClass} />;
      break;
    case "YouTube":
      ariaLabel = "YouTube";
      button = <YouTubeIcon className={iconClass} />;
      break;
    case "GitHub":
      ariaLabel = "GitHub";
      button = <GitHubIcon className={iconClass} />;
      break;
    case "LinkedIn":
      ariaLabel = "LinkedIn";
      button = <LinkedInIcon className={iconClass} />;
      break;
  }

  return (
    <IconButton
      href={uri}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {button}
    </IconButton>
  );
};

export default SocialMediaButton;

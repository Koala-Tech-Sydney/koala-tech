import IconButton from "@mui/material/IconButton";
import FacebookIcon from "../Icon/FacebookIcon";
import InstagramIcon from "../Icon/InstagramIcon";
import YouTubeIcon from "../Icon/YouTubeIcon";
import DiscordIcon from "../Icon/DiscordIcon";
import GitHubIcon from "../Icon/GitHubIcon";
import LinkedInIcon from "../Icon/LinkedinIcon";

type Props = {
  name: string;
  uri: string;
  className?: string;
};

const SocialMediaButton: React.FC<Props> = ({ name, uri, className }) => {
  let button = null;
  let ariaLabel = "";
  switch (name) {
    case "Discord":
      button = <DiscordIcon className={className} />;
      ariaLabel = "Discord";
      break;
    case "Instagram":
      ariaLabel = "Instagram";
      button = <InstagramIcon className={className} />;
      break;
    case "Facebook":
      ariaLabel = "Facebook";
      button = <FacebookIcon className={className} />;
      break;
    case "YouTube":
      ariaLabel = "YouTube";
      button = <YouTubeIcon className={className} />;
      break;
    case "GitHub":
      ariaLabel = "GitHub";
      button = <GitHubIcon className={className} />;
      break;
    case "LinkedIn":
      ariaLabel = "LinkedIn";
      button = <LinkedInIcon className={className} />;
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

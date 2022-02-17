import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "../Icon/FacebookIcon";
import YouTubeIcon from "../Icon/YouTubeIcon";
import DiscordIcon from "../Icon/DiscordIcon";
import GitHubIcon from "../Icon/GitHubIcon";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div>We make knowledge accessibile to everyone</div>
      <Stack className={styles.socialMediaButtons} direction="row" spacing={1}>
        <IconButton
          href={"https://discord.gg/6TaKsfFtY5"}
          aria-label={"Discord"}
        >
          <DiscordIcon className={styles.discord_icon} />
        </IconButton>
        <IconButton
          href={"https://www.youtube.com/channel/UCAJeyLpgU1IFBwNhQMSo1yw"}
          aria-label={"YouTube"}
        >
          <YouTubeIcon />
        </IconButton>
        <IconButton
          href={"https://www.youtube.com/channel/UCAJeyLpgU1IFBwNhQMSo1yw"}
          aria-label={"Facebook"}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href={"https://github.com/fongchinghinunsw"}
          aria-label={"GitHub"}
        >
          <GitHubIcon />
        </IconButton>
      </Stack>
      <div>Copyright © 2022 · KoalaTech</div>
    </footer>
  );
};

export default Footer;

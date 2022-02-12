import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DiscordIcon from "../../public/images/buttons/discord.svg";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div>We make knowledge accessibile to everyone</div>
      <Stack className={styles.socialMediaButtons} direction="row" spacing={1}>
        <IconButton
          href={"https://www.youtube.com/channel/UCAJeyLpgU1IFBwNhQMSo1yw"}
          aria-label={"Discord"}
        >
          <DiscordIcon className={styles.discord_icon} />
        </IconButton>
        <IconButton
          href={"https://www.youtube.com/channel/UCAJeyLpgU1IFBwNhQMSo1yw"}
          className={styles.facebook}
          aria-label={"Facebook"}
        >
          <YouTubeIcon />
        </IconButton>
        <IconButton
          href={"https://www.youtube.com/channel/UCAJeyLpgU1IFBwNhQMSo1yw"}
          className={styles.facebook}
          aria-label={"Facebook"}
        >
          <FacebookRoundedIcon />
        </IconButton>
        <IconButton
          href={"https://www.youtube.com/channel/UCAJeyLpgU1IFBwNhQMSo1yw"}
          className={styles.facebook}
          aria-label={"Facebook"}
        >
          <GitHubIcon />
        </IconButton>
      </Stack>
      <div>© 2022 · KoalaTech</div>
    </footer>
  );
};

export default Footer;

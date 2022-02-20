import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "../Icon/FacebookIcon";
import YouTubeIcon from "../Icon/YouTubeIcon";
import DiscordIcon from "../Icon/DiscordIcon";
import GitHubIcon from "../Icon/GitHubIcon";
import SocialMediaIcon from "../Button/SocialMediaButton";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div>We make knowledge accessibile to everyone</div>
      <Stack className={styles.socialMediaButtons} direction="row" spacing={1}>
        <SocialMediaIcon
          name="Discord"
          className={styles.discord_icon}
          uri={"https://discord.gg/6TaKsfFtY5"}
        />
        <SocialMediaIcon
          name="YouTube"
          uri={"https://www.youtube.com/channel/UCAJeyLpgU1IFBwNhQMSo1yw"}
        />
        <SocialMediaIcon
          name="Facebook"
          uri={"https://www.youtube.com/channel/UCAJeyLpgU1IFBwNhQMSo1yw"}
        />
        <SocialMediaIcon
          name="GitHub"
          uri={"https://github.com/fongchinghinunsw"}
        />
      </Stack>
      <div>Copyright © 2022 · KoalaTech</div>
    </footer>
  );
};

export default Footer;

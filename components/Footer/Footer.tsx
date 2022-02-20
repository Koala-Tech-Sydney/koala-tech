import Stack from "@mui/material/Stack";
import SocialMediaButton from "../Button/SocialMediaButton";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div>We make knowledge accessibile to everyone</div>
      <Stack className={styles.socialMediaButtons} direction="row" spacing={1}>
        <SocialMediaButton
          name="Discord"
          className={styles.discord_icon}
          uri={"https://discord.gg/6TaKsfFtY5"}
        />
        <SocialMediaButton
          name="YouTube"
          uri={"https://www.youtube.com/channel/UCAJeyLpgU1IFBwNhQMSo1yw"}
        />
        <SocialMediaButton
          name="Facebook"
          uri={"https://www.youtube.com/channel/UCAJeyLpgU1IFBwNhQMSo1yw"}
        />
        <SocialMediaButton
          name="GitHub"
          uri={"https://github.com/fongchinghinunsw"}
        />
      </Stack>
      <div>Copyright © 2022 · KoalaTech</div>
    </footer>
  );
};

export default Footer;

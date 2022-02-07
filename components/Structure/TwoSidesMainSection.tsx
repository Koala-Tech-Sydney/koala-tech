import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import styles from "./TwoSidesMainSection.module.scss";

type Props = {
  leftSection?: React.ReactNode;
  mainSection: React.ReactNode;
  rightSection?: React.ReactNode;
};

const TwoSidesMainSection: React.FC<Props> = ({
  leftSection,
  mainSection,
  rightSection,
}) => {
  const theme = useTheme();
  const shouldDisplayNoSideSection = useMediaQuery(
    theme.breakpoints.down("md")
  );
  const shouldDisplayAtMostOneSideSection = useMediaQuery(
    theme.breakpoints.down("lg")
  );

  let mainSectionClasses: string = styles.mainSection;

  if (!leftSection && !rightSection) {
    // only main section is supplied
    mainSectionClasses += " " + styles["mainSection-100"];
  } else if (!leftSection || !rightSection) {
    // either left or right section is supplied
    if (shouldDisplayNoSideSection) {
      leftSection = null;
      rightSection = null;
      mainSectionClasses += " " + styles["mainSection-100"];
    } else {
      mainSectionClasses += " " + styles["mainSection-75"];
    }
  } else {
    // both left and right section are supplied
    if (shouldDisplayNoSideSection) {
      leftSection = null;
      rightSection = null;
      mainSectionClasses += " " + styles["mainSection-100"];
    } else if (shouldDisplayAtMostOneSideSection) {
      rightSection = null;
      mainSectionClasses += " " + styles["mainSection-75"];
    } else {
      mainSectionClasses += " " + styles["mainSection-50"];
    }
  }
  return (
    <section className={styles.container}>
      {!!leftSection && <div className={styles.sideSection}>{leftSection}</div>}
      <div id={styles.mainSection} className={mainSectionClasses}>
        {mainSection}
      </div>
      {!!rightSection && (
        <div className={styles.sideSection}>{rightSection}</div>
      )}
    </section>
  );
};

export default TwoSidesMainSection;

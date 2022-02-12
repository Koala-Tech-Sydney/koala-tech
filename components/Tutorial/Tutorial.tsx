import { Fragment } from "react";
import { Title, SmallText } from "../Text/Text";
import TwoSidesMainSection from "../Structure/TwoSidesMainSection";
import SideNavBar from "../Structure/SideNavBar";

import styles from "./Tutorial.module.scss";

type Props = {
  title: string;
  requiredReadingTimeInMinute?: string;
};

const Tutorial: React.FC<Props> = ({
  title,
  requiredReadingTimeInMinute,
  children,
}) => {
  return (
    <TwoSidesMainSection
      leftSection={<div></div>}
      mainSection={
        <Fragment>
          <Title>
            {title}
            {!!requiredReadingTimeInMinute && (
              // <Paragraph>{`${requiredReadingTimeInMinute} minutes of reading`}</Paragraph>
              <SmallText
                className={styles.requiredReadingTimeInMinute}
              >{`${requiredReadingTimeInMinute} minutes of reading`}</SmallText>
            )}
          </Title>
          {children}
        </Fragment>
      }
      rightSection={<div></div>}
    />
  );
};

export default Tutorial;

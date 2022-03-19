import styles from "./support.module.scss";
import TwoSidesMainSection from "../components/Structure/TwoSidesMainSection";
import {
  Title,
  Subtitle1,
  Subtitle2,
  Paragraph,
  Hyperlink,
} from "../components/Text/Text";

const Support = () => {
  return (
    <TwoSidesMainSection
      mainSection={
        <>
          <Title>Support</Title>
          <Paragraph>
            If you like our content and would like to support us, there are
            several ways available. We are extremely grateful for any forms of
            support.
          </Paragraph>
          <Subtitle1>Patreon</Subtitle1>
          <Paragraph>
            Patreon is a way to support this website with small monthly
            contributions:
          </Paragraph>
          <Hyperlink href="https://www.patreon.com/koalatech">
            https://www.patreon.com/koalatech
          </Hyperlink>
          <Subtitle1>PayPal</Subtitle1>
          <Paragraph>
            You can support the website with a donation through PayPal:
          </Paragraph>
          <Hyperlink href="https://www.paypal.com/paypalme/fongchinghinstephen">
            https://www.paypal.com/paypalme/fongchinghinstephen
          </Hyperlink>
          <Subtitle1>Crytocurrency Donations</Subtitle1>
          <Paragraph>
            MetaMask Wallet:{" "}
            <span className={styles.crypto_address}>
              0x5520ADf9bB6179fD1065d57Ea3b0d286BD9F3858
            </span>
            <br />
            Solana Wallet:{" "}
            <span className={styles.crypto_address}>
              2fZ2LZtDLfyfG6e2b4BHkcxAmDLtka8et95PPcLiJ6PP
            </span>
          </Paragraph>
        </>
      }
      rightSection={<div></div>}
    />
  );
};

export default Support;

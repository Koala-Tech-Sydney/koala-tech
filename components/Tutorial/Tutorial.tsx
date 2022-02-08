import { Title } from "../Text/Text";
import TwoSidesMainSection from "../Structure/TwoSidesMainSection";

type Props = {
  title: string;
};

const Tutorial: React.FC<Props> = ({ title, children }) => {
  return (
    <TwoSidesMainSection
      leftSection={<div></div>}
      mainSection={
        <section>
          <Title>{title}</Title>
          {children}
        </section>
      }
      rightSection={<div></div>}
    />
  );
};

export default Tutorial;

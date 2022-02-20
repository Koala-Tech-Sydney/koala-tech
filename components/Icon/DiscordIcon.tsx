import DiscordIconSVG from "../../public/images/buttons/discord.svg";

type Props = {
  className?: string;
};

const DiscordIcon: React.FC<Props> = ({ className }) => {
  return <DiscordIconSVG className={className} />;
};

export default DiscordIcon;

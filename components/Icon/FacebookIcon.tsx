import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

type Props = {
  className?: string;
};

const FacebookIcon: React.FC<Props> = ({ className }) => {
  return (
    <FacebookRoundedIcon className={className} sx={{ color: "#1976d2" }} />
  );
};

export default FacebookIcon;

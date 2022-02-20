import MUIYouTubeIcon from "@mui/icons-material/YouTube";

type Props = {
  className?: string;
};

const YouTubeIcon: React.FC<Props> = ({ className }) => {
  return <MUIYouTubeIcon className={className} sx={{ color: "#FF0000" }} />;
};

export default YouTubeIcon;

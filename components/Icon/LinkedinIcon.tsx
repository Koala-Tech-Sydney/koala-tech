import MUILinkedInIcon from "@mui/icons-material/LinkedIn";

type Props = {
  className?: string;
};

const LinkedInIcon: React.FC<Props> = ({ className }) => {
  return <MUILinkedInIcon className={className} sx={{ color: "#1976d2" }} />;
};

export default LinkedInIcon;

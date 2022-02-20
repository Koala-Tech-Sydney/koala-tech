import MUIGitHubIcon from "@mui/icons-material/GitHub";

type Props = {
  className?: string;
};

const GitHubIcon: React.FC<Props> = ({ className }) => {
  return <MUIGitHubIcon className={className} sx={{ color: "#3b3b3b" }} />;
};

export default GitHubIcon;

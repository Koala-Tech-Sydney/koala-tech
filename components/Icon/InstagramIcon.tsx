import MUIInstagramIcon from "@mui/icons-material/Instagram";

type Props = {
  className?: string;
};

const InstagramIcon: React.FC<Props> = ({ className }) => {
  return (
    <>
      <svg width={0} height={0}>
        <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
          <stop offset={0} stopColor="#4160D5" />
          <stop offset={1} stopColor="#F6B754" />
        </linearGradient>
      </svg>
      <MUIInstagramIcon
        className={className}
        sx={{ fill: "url(#linearColors)" }}
      />
    </>
  );
};

export default InstagramIcon;

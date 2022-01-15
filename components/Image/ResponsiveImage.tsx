import Image from "next/image";

type Props = {
  src: string;
};

const ResponsiveImage: React.FC<Props> = ({ src }) => {
  return (
    // <div style={{ position: "relative", height: "20%", width: "100%" }}>
    <div>
      <Image src={src} layout="responsive" alt="" width="1" height="1" />
    </div>
  );
};

export default ResponsiveImage;

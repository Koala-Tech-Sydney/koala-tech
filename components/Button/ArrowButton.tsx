import UpwardArrowButton from "../../public/images/buttons/downward-arrow.svg";

import styles from "./ArrowButton.module.scss";

type Props = {
  direction?: "UP" | "DOWN" | "LEFT" | "RIGHT";
  fill?: string;
  height?: string;
  width?: string;
};

const ArrowButton: React.FC<Props> = ({
  direction = "LEFT",
  fill = "#fff",
  height = "1rem",
  width = "1rem",
}) => {
  let directionClass = {
    UP: "",
    LEFT: styles.left,
    DOWN: styles.down,
    RIGHT: styles.right,
  }[direction];
  console.log(directionClass);
  return (
    <div className={directionClass}>
      <UpwardArrowButton fill={fill} height={height} width={width} />
    </div>
  );
};

export default ArrowButton;

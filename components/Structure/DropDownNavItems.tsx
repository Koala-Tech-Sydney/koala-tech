import Link from "next/link";

import styles from "./DropDownNavItems.module.scss";

type Props = {
  items: {
    name: string;
    path: string;
  }[];
  className: string;
};

const DropDownNavItems: React.FC<Props> = ({ items, className }) => {
  // console.log(items);

  const containerStyles = `${styles.dropdownContent} ${className}`;
  // console.log(containerStyles);

  return (
    <div className={containerStyles}>
      {items.map((item) => {
        return (
          <Link key={item.name} href={item.path}>
            <a>{item.name}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default DropDownNavItems;

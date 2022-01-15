import Link from "next/link";

import styles from "./DropDownNavItems.module.scss";

const DropDownNavItems = (props) => {
  console.log(props.items);

  const containerStyles = `${styles.dropdownContent} ${props.className}`;
  console.log(containerStyles);

  return (
    <div className={containerStyles}>
      {props.items.map((item) => {
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

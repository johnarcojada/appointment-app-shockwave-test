import Image from "next/image";
import React from "react";
import styles from "styles/Button.module.css";

type IconButtonProps = {
  icon: string;
  iconHover: string;
  alt: string;
  toggleClientOverview?: () => void;
};

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  iconHover,
  alt,
  toggleClientOverview,
}) => {
  return (
    <button
      className={`icon-button rounded-full w-36 h-36 relative bg-gray-200 hover:bg-orange-light transition-all duration-300 ${styles.iconButton}`}
      onClick={toggleClientOverview}
    >
      <Image src={icon} alt={alt} className={styles.icon} />
      <Image src={iconHover} alt={alt} className={styles.iconHover} />
    </button>
  );
};

export default IconButton;

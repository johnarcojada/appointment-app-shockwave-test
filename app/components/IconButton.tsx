import Image from "next/image";
import React from "react";
import styles from "styles/Button.module.css";

type IconButtonProps = {
  icon: string;
  iconHover: string;
  alt: string;
};

const IconButton: React.FC<IconButtonProps> = ({ icon, iconHover, alt }) => {
  return (
    <button
      className={`icon-button rounded-full w-36 h-36 relative bg-gray-200 hover:bg-orange-light transition-all duration-300 ${styles.iconButton}`}
    >
      <Image src={icon} alt={alt} className={styles.icon} />
      <Image src={iconHover} alt={alt} className={styles.iconHover} />
    </button>
  );
};

export default IconButton;

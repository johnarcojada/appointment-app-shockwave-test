import React from "react";
import { IconSearch } from "@/assets/icons";
import Image from "next/image";
import styles from "./Navbar.module.css";

const Searchbox = () => {
  return (
    <div className='searchbox-container flex-grow relative'>
      <input
        type='search'
        placeholder='Search'
        className={`search-box py-12 pl-20 pr-60 w-full bg-gray-200 rounded-xl outline-none transition-all duration-300 ${styles.inputSearch}`}
      />
      <Image
        src={IconSearch}
        alt='Icon Search'
        className='absolute top-1/2 -translate-y-1/2 right-20'
      />
    </div>
  );
};

export default Searchbox;

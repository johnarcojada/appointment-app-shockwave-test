import { IconChevronLeft } from "@/assets/icons";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type TogglerProps = {
  isSidenavCollapsed: boolean;
  handleToggleSidenav: () => void;
  iconAnim: {};
};

const Toggler: React.FC<TogglerProps> = ({
  isSidenavCollapsed,
  handleToggleSidenav,
  iconAnim,
}) => {
  return (
    <button
      className='sidebar-toggler w-36 h-36 rounded-lg bg-gray-700 flex justify-center items-center'
      onClick={() => handleToggleSidenav()}
    >
      <motion.span
        className='toggler-icon-wrapper relative flex justify-center'
        variants={iconAnim}
        animate={isSidenavCollapsed ? "collapsed" : "expanded"}
      >
        <Image
          src={IconChevronLeft}
          alt='Icon Chevron Left'
          className='invert'
        />
        <Image
          src={IconChevronLeft}
          alt='Icon Chevron Left'
          className='invert'
        />
      </motion.span>
    </button>
  );
};

export default Toggler;

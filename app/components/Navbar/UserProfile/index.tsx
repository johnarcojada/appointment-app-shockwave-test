import React from "react";
import Image from "next/image";
import { UserProfile } from "@/assets";
import { IconChevronDown } from "@/assets/icons";

const UserProfileMenu = () => {
  return (
    <div className='flex gap-12 items-center'>
      <Image
        src={UserProfile}
        alt='User Profile Image'
        className='rounded-full w-36 h-36'
      />
      <span className='flex items-center gap-10'>
        <span className='font-semibold'>Jane Dee</span>
        <Image src={IconChevronDown} alt='Icon Chevron Down' />
      </span>
    </div>
  );
};

export default UserProfileMenu;

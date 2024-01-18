import React from "react";
import Searchbox from "./Searchbox";
import IconButton from "../IconButton";
import {
  IconBell,
  IconBellOrange,
  IconSettings,
  IconSettingsOrange,
  IconSignout,
  IconSignoutOrange,
} from "@/assets/icons";
import UserProfileMenu from "./UserProfile";

const Navbar = () => {
  return (
    <div className='px-40 py-36 border-b border-b-gray-300 border-solid max-h-116'>
      <div className='flex gap-40 items-center'>
        <Searchbox />
        <div className='flex gap-12'>
          <UserProfileMenu />
          <IconButton
            icon={IconBell}
            iconHover={IconBellOrange}
            alt='Icon Bell'
          />
          <IconButton
            icon={IconSettings}
            iconHover={IconSettingsOrange}
            alt='Icon Bell'
          />
          <IconButton
            icon={IconSignout}
            iconHover={IconSignoutOrange}
            alt='Icon Bell'
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

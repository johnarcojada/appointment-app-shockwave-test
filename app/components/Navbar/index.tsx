"use client";
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
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { setIsClientOverviewOpen } from "@/lib/features/clientOverviewSlice";
import { useAppSelector } from "@/lib/hooks";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const useSelector = useAppSelector;
  const isClientOverviewOpen = useSelector(
    (state) => state.clientOverviewReducer.isClientOverviewOpen
  );
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
            toggleClientOverview={() => {
              dispatch(setIsClientOverviewOpen(!isClientOverviewOpen));
              console.log("asdasd");
            }}
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

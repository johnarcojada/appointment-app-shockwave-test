"use client";
import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import Image from "next/image";
import { Logo } from "@/assets";
import {
  IconAppointment,
  IconAppointmentOrange,
  IconContacts,
  IconContactsOrange,
  IconDataAnalytics,
  IconDataAnalyticsOrange,
  IconHelpCenter,
  IconHelpCenterOrange,
  IconHome,
  IconHomeOrange,
  IconMessages,
  IconMessagesOrange,
  IconSettings,
  IconSettingsOrange,
  IconSubscription,
  IconSubscriptionsOrange,
} from "@/assets/icons";
import SidebarLink from "./SidebarLink";
import Toggler from "./Toggler";
import { motion } from "framer-motion";
import {
  sidebarAnim,
  sidebarLinkIconAnim,
  sidebarLinkAnim,
  togglerIconAnim,
  sidebarLogoLabelAnim,
  sidebarLogoAnim,
} from "./sidebarAnims";

const Links = [
  {
    name: "home",
    link: "#",
    label: "Home",
    icon: IconHome,
    iconHover: IconHomeOrange,
  },
  {
    name: "appointments",
    link: "#",
    label: "Appointments",
    icon: IconAppointment,
    iconHover: IconAppointmentOrange,
  },
  {
    name: "messages",
    link: "#",
    label: "Messages",
    icon: IconMessages,
    iconHover: IconMessagesOrange,
  },
  {
    name: "contacts",
    link: "#",
    label: "Contacts",
    icon: IconContacts,
    iconHover: IconContactsOrange,
  },
  {
    name: "dataAnalytics",
    link: "#",
    label: "Data Analytics",
    icon: IconDataAnalytics,
    iconHover: IconDataAnalyticsOrange,
  },
  {
    name: "subscriptions",
    link: "#",
    label: "Subscriptions",
    icon: IconSubscription,
    iconHover: IconSubscriptionsOrange,
  },
  {
    name: "helpCenter",
    link: "#",
    label: "Help Center",
    icon: IconHelpCenter,
    iconHover: IconHelpCenterOrange,
  },
  {
    name: "settings",
    link: "#",
    label: "Settings",
    icon: IconSettings,
    iconHover: IconSettingsOrange,
  },
];

const Sidebar = () => {
  const [isSidenavCollapsed, setIsSidenavCollapsed] = useState(false);

  return (
    <motion.div
      className={`sidebar h-screen relative bg-gray-900 flex flex-col ${styles.sidebar} `}
      variants={sidebarAnim}
      animate={isSidenavCollapsed ? "collapsed" : "expanded"}
    >
      <div className='sidebar-toggler-wrapper absolute top-1/2 -right-18 -translate-y-1/2 z-10'>
        <Toggler
          isSidenavCollapsed={isSidenavCollapsed}
          handleToggleSidenav={() => setIsSidenavCollapsed(!isSidenavCollapsed)}
          iconAnim={togglerIconAnim}
        />
      </div>
      <div className='logo-container py-40 px-16 flex justify-center border-b border-b-gray-600 border-solid'>
        <div className='logo-wrapper flex gap-12 items-center'>
          <motion.span
            className='block'
            variants={sidebarLogoAnim}
            animate={isSidenavCollapsed ? "collapsed" : "expanded"}
          >
            <Image
              src={Logo}
              alt='Appointment App Logo'
              className='logo-image w-36 h-36 max-w-none'
            />
          </motion.span>
          <motion.span
            className='logo-label text-primary font-bold'
            variants={sidebarLogoLabelAnim}
            animate={isSidenavCollapsed ? "collapsed" : "expanded"}
          >
            LOREM
          </motion.span>
        </div>
      </div>
      <div className='sidebar-links-container pt-40'>
        {Links.map((item, key) => (
          <SidebarLink
            key={`sidebar-link-${item.name}-${key}`}
            link={item.link}
            label={item.label}
            isSidenavCollapsed={isSidenavCollapsed}
          >
            <motion.div
              className={`relative`}
              variants={sidebarLinkIconAnim}
              animate={isSidenavCollapsed ? "collapsed" : "expanded"}
            >
              <Image
                src={item.icon}
                alt={item.label}
                className={`w-20 h-20 ${styles.sidebarLinkIcon}`}
              />
              <Image
                src={item.iconHover}
                alt={item.label}
                className={`w-20 h-20 ${styles.sidebarLinkIconHover}`}
              />
            </motion.div>
            <motion.span
              className={`sidebar-link-label block ml-12 pl-16 absolute whitespace-nowrap`}
              variants={sidebarLinkAnim}
              animate={isSidenavCollapsed ? "collapsed" : "expanded"}
            >
              {item.label}
            </motion.span>
          </SidebarLink>
        ))}
      </div>
      <div className='sidebar-footer px-10 pt-32 mt-auto'>
        <div className='sidebar-footer-wrapper py-40 border-t border-t-gray-600 '>
          <div className='sidebar-footer-logo-wrapper flex flex-col items-center gap-12'>
            <Image
              src={Logo}
              alt='Appointment App Logo'
              className='logo-image w-20 h-20 '
            />
            <span className='text-gray-500 whitespace-nowrap text-xs'>
              © Lorem 2023
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;

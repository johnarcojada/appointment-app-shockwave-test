import Link from "next/link";
import React from "react";
import styles from "./Sidebar.module.css";

type SidebarLinkProps = {
  link: string;
  label: string;
  children: React.ReactNode;
  isSidenavCollapsed: boolean;
};

const SidebarLink: React.FC<SidebarLinkProps> = ({
  link,
  label,
  children,
  isSidenavCollapsed,
}) => {
  return (
    <div
      className={`sidebar-link-wrapper relative overflow-hidden ${styles.sidebarLinkWrapper}`}
    >
      <Link
        href={link}
        title={label}
        className={`sidebar-link block py-20 pl-40 pr-20 text-white transition-all duration-300 hover:text-primary hover:bg-gray-800`}
      >
        <div
          className={`flex items-center ${isSidenavCollapsed ? "w-100" : ""}`}
        >
          {children}
        </div>
      </Link>
    </div>
  );
};

export default SidebarLink;

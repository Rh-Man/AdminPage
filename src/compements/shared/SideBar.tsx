import React from "react";

import { IoMoonOutline } from "react-icons/io5";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/consts/navigation";
import { Link, useLocation } from "react-router-dom";
import { GoSun } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import SubManageOrderMenu from "../ManageOrder/ManageOrder";

function getActiveClass(pathname: string, path: string) {
  if (pathname === path) {
    return "bg-primary text-white nounderline";
  }
  return "text-zinc-400";
}

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 mb-1 hover:bg-primary hover:text-white hover:no-underline  rounded-lg text-base";
const SideBar = () => {
  return (
    <div className="flex flex-col w-60 p-3  fixed left-0 bg-white">
      <div className="flex items-center gap-2 px-1 py-5  ">
        <TbTruckDelivery size={34} />
        <span className="text-lg font-bold  ">Happy Livraison</span>
      </div>
      <div className="flex-1 py-5 flex-col gap-0.5 ">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => {
          return (
            <SideBarLink
              key={item.key}
              label={item.label}
              path={item.path}
              icon={item.icon}
            />
          );
        })}
      </div>
      <hr className="border-t border-gray-300 my-3 py-2 gap-0.5" />
      <div className="flex space-x-1">
        <button className="bg-secondary rounded-2xl py-3 px-5 flex items-center space-x-2 text-tiers">
          <IoMoonOutline />
          <span>Dark</span>
        </button>
        <button className="bg-primary rounded-2xl py-3 px-5 flex items-center space-x-2 text-white">
          <GoSun />
          <span>Light</span>
        </button>
      </div>
    </div>
  );
};

export function SideBarLink({
  label,
  path,
  icon,
}: {
  label: string;
  path: string;
  icon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}) {
  const { pathname } = useLocation();
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);
  return (
    <div className="flex flex-col">
      <Link
        to={path === "/manageOrder" ? false : path}
        className={`${linkClass} ${getActiveClass(pathname, path)}`}
        onClick={path === "/manageOrder" ? toggleOpen : undefined}
      >
        <span className="text-xl">{icon}</span>
        {label}
        {path === "/manageOrder" && (
          <span className="flex space-x-3">
            {open ? (
              <ChevronUpIcon width={20} />
            ) : (
              <ChevronDownIcon width={20} />
            )}
          </span>
        )}
      </Link>
      {open && path === "/manageOrder" && <SubManageOrderMenu />}
      {/* {open && path === "/pay" && <SubManageOrderMenu />} */}
    </div>
  );
}

export default SideBar;

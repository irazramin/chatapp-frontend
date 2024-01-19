"use client";
import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi2";
import { RiSettingsFill } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiSettingsLine } from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [activeNav, setActiveNav] = useState(false);
  const sideItems = [
    {
      id: 1,
      icon: AiOutlineMessage,
      activeIcon: AiFillMessage,
      path: "/message",
      name: "Message",
    },
    {
      id: 2,
      icon: HiOutlineUserGroup,
      activeIcon: HiUserGroup,
      path: "/group",
      name: "Group",
    },
    {
      id: 3,
      icon: RiSettingsLine,
      activeIcon: RiSettingsFill,
      path: "/setting",
      name: "Setting",
    },
  ];

  const handleNavigation = (nav, index) => {
    if (pathname === nav.id) {
      setActiveNav(true);
    } else {
      setActiveNav(false);
    }
    console.log(pathname);
    router.push(`/dashboard/${nav.path}`);
  };
  return (
    <div className="w-[96px] fixed left-0 top-0 bg-white h-screen border-r border-r-gray flex justify-center">
      <ul className="flex flex-col gap-6 mt-[50px]">
        {sideItems.map((item, index) => {
          return (
            <li
              key={item.id}
              onClick={() => handleNavigation(item, index)}
              className={`text-xl text-lightDark w-[40px] h-[40px] cursor-pointer flex justify-center items-center rounded-full hover:bg-primary hover:bg-opacity-30 hover:text-primary  transition ${
                pathname === "/dashboard"+item.path ? "bg-primary bg-opacity-10" : ""
              }`}
            >
              <span>{ pathname === "/dashboard"+item.path ? <item.activeIcon className="text-primary"/> : <item.icon className=""/>}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;

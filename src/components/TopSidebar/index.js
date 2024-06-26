"use client";
import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi2";
import { RiSettingsFill } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiSettingsLine } from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";
import { BiLogOut } from "react-icons/bi";
import Cookies from "js-cookie";

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
    <div className="hidden w-[96px] fixed left-0 top-0 bg-white h-screen border-r border-r-gray md:flex justify-center">
      <ul className="flex flex-col gap-6 mt-[50px] relative">
        {sideItems.map((item, index) => {
          return (
            <li
              key={item.id}
              onClick={() => handleNavigation(item, index)}
              className={`text-xl text-lightDark w-[40px] h-[40px] cursor-pointer flex justify-center items-center rounded-full hover:bg-primary hover:bg-opacity-30 hover:text-primary  transition ${
                pathname.split("/")[2] === item.path.split("/")[1]
                  ? "bg-primary bg-opacity-10"
                  : ""
              }`}
            >
              <span>
                {pathname.split("/")[2] === item.path.split("/")[1] ? (
                  <item.activeIcon className="text-primary" />
                ) : (
                  <item.icon className="" />
                )}
              </span>
            </li>
          );
        })}
        <li
          className={`text-xl text-lightDark w-[40px] h-[40px] cursor-pointer flex justify-center items-center rounded-full hover:bg-primary hover:bg-opacity-30 hover:text-primary  transition
          absolute bottom-[50px] active:scale-[.98]
        `}
          onClick={() => {
            Cookies.remove("auth_user");
            Cookies.remove("access_token");
            router.refresh();
          }}
        >
          <BiLogOut />
        </li>
      </ul>
    </div>
  );
};

export default Index;

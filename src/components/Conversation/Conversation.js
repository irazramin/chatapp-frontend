"use client";
import React, { useContext, useEffect, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { LuPlus } from "react-icons/lu";
import Image from "next/image";
import userImg from "../../../public/user.jpg";
import { IoCheckmarkDone } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import { MyContext } from "@/Context/MyContext";
import { GetUsersByName } from "@/app/hook";

const Conversation = ({}) => {
  const router = useRouter();

  const { isOpen, setIsOpen } = useContext(MyContext);
  const [showSearchUser, setShowSearchUser] = useState(false);
  const [input, setInput] = useState({});

  const { users } = GetUsersByName(input?.search);

  return (
    <div
      className={`md:w-[320px] w-full h-full md:h-screen block md:fixed md:top-0 md:left-[96px] bg-white overflow-y-scroll md:block conversation ${
        isOpen ? "hidden" : "md:block"
      }`}
    >
      <div className="px-5 mt-5">
        <div className="flex items-center justify-between">
          <h4 className="text-lg text-[#171C1B] font-bold">Messages</h4>
          <HiDotsHorizontal className="text-light2 text-xl" />
        </div>
        <div
          className={`relative border border-light2 border-opacity-70 pl-[38px] pr-[26px] py-[8px] rounded-3xl w-full form-field mt-3`}
        >
          <BiSearch
            className={`absolute left-4 top-[50%] text-light2 -translate-y-[50%]`}
          />
          <input
            onFocus={() => setShowSearchUser(!showSearchUser)}
            onBlur={() => {
              setTimeout(() => {
                setShowSearchUser(!showSearchUser);
              }, 300);
            }}
            type="text"
            className="text-[13px] border-0 group focus:outline-0 w-full h-full"
            name="search"
            id="search"
            placeholder="Search for a contact"
            onChange={(e) =>
              setInput((prevState) => ({
                ...prevState,
                search: e.target.value,
              }))
            }
            autoComplete={false}
          />
        </div>
        {/* <button className="py-[12px] mt-[15px] flex items-center justify-center gap-2 bg-primary capitalize font-medium text-xs w-full rounded-3xl text-white hover:bg-secondary transition-all active:scale-[.98]">
          <LuPlus /> Start New Chat
        </button> */}
      </div>
      {showSearchUser ? (
        <div className="">
          <ul>
            {users?.length > 0 &&
              users?.map((user) => {
                return (
                  <li
                    onClick={() => {
                      router.push(`/dashboard/message/1${user?._id}`);
                      setIsOpen(true);
                    }}
                    className="px-[16px] flex items-center gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer"
                  >
                    <div className="w-[40px] h-[40px]">
                      <Image
                        className="w-full h-full rounded-full"
                        src={userImg}
                        alt=""
                      />
                    </div>
                    <div className="flex-1 select-none">
                      <div className="flex items-center justify-between ">
                        <h3 className="text-xs font-semibold">
                          {user?.fullname}
                        </h3>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      ) : (
        <ul className="mt-[5px]">
          <li
            onClick={() => {
              router.push("/dashboard/message/1");
              setIsOpen(true);
            }}
            className="px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer"
          >
            <div className="w-[40px] h-[40px]">
              <Image
                className="w-full h-full rounded-full"
                src={userImg}
                alt=""
              />
            </div>
            <div className="flex-1 select-none">
              <div className="flex items-center justify-between ">
                <h3 className="text-xs font-semibold">Cameron Williamson</h3>
                <span className="text-xs text-lightDark font-medium text-ellipsis">
                  1h
                </span>
              </div>
              <p className="leading-[16px] text-lightDark text-[10px] max-w-[80%]">
                Not too bad, just trying to . How about you?
              </p>
            </div>
            <div className="absolute bottom-2 right-4">
              <div className="w-[16px] h-[16px] rounded-full text-[10px] text-white font-bold bg-red-500 flex justify-center items-center">
                3
              </div>
              {/*<IoCheckmarkDone className="font-semibold text-lg text-blue-400" />*/}
            </div>
          </li>
          <li className="px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer">
            <div className="w-[40px] h-[40px]">
              <Image
                className="w-full h-full rounded-full"
                src={userImg}
                alt=""
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between ">
                <h3 className="text-xs font-semibold">Cameron Williamson</h3>
                <span className="text-xs text-lightDark font-medium text-ellipsis">
                  1h
                </span>
              </div>
              <p className="leading-[16px] text-lightDark text-[10px] max-w-[80%]">
                Not too bad, just trying to . How about you?
              </p>
            </div>
            <div className="absolute bottom-2 right-4">
              {/*<div className="w-[16px] h-[16px] rounded-full text-[10px] text-white font-bold bg-red-500 flex justify-center items-center">*/}
              {/*    3*/}
              {/*</div>*/}
              <IoCheckmarkDone className="font-semibold text-lg text-blue-400" />
            </div>
          </li>
          <li className="px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer">
            <div className="w-[40px] h-[40px]">
              <Image
                className="w-full h-full rounded-full"
                src={userImg}
                alt=""
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between ">
                <h3 className="text-xs font-semibold">Cameron Williamson</h3>
                <span className="text-xs text-lightDark font-medium text-ellipsis">
                  1h
                </span>
              </div>
              <p className="leading-[16px] text-lightDark text-[10px] max-w-[80%]">
                Not too bad, just trying to . How about you?
              </p>
            </div>
            <div className="absolute bottom-2 right-4">
              {/*<div className="w-[16px] h-[16px] rounded-full text-[10px] text-white font-bold bg-red-500 flex justify-center items-center">*/}
              {/*    3*/}
              {/*</div>*/}
              <IoCheckmarkDone className="font-semibold text-lg text-blue-400" />
            </div>
          </li>
          <li className="px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer">
            <div className="w-[40px] h-[40px]">
              <Image
                className="w-full h-full rounded-full"
                src={userImg}
                alt=""
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between ">
                <h3 className="text-xs font-semibold">Cameron Williamson</h3>
                <span className="text-xs text-lightDark font-medium text-ellipsis">
                  1h
                </span>
              </div>
              <p className="leading-[16px] text-lightDark text-[10px] max-w-[80%]">
                Not too bad, just trying to . How about you?
              </p>
            </div>
            <div className="absolute bottom-2 right-4">
              {/*<div className="w-[16px] h-[16px] rounded-full text-[10px] text-white font-bold bg-red-500 flex justify-center items-center">*/}
              {/*    3*/}
              {/*</div>*/}
              <IoCheckmarkDone className="font-semibold text-lg text-blue-400" />
            </div>
          </li>
          <li className="px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer">
            <div className="w-[40px] h-[40px]">
              <Image
                className="w-full h-full rounded-full"
                src={userImg}
                alt=""
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between ">
                <h3 className="text-xs font-semibold">Cameron Williamson</h3>
                <span className="text-xs text-lightDark font-medium text-ellipsis">
                  1h
                </span>
              </div>
              <p className="leading-[16px] text-lightDark text-[10px] max-w-[80%]">
                Not too bad, just trying to . How about you?
              </p>
            </div>
            <div className="absolute bottom-2 right-4">
              {/*<div className="w-[16px] h-[16px] rounded-full text-[10px] text-white font-bold bg-red-500 flex justify-center items-center">*/}
              {/*    3*/}
              {/*</div>*/}
              <IoCheckmarkDone className="font-semibold text-lg text-blue-400" />
            </div>
          </li>
          <li className="px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer">
            <div className="w-[40px] h-[40px]">
              <Image
                className="w-full h-full rounded-full"
                src={userImg}
                alt=""
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between ">
                <h3 className="text-xs font-semibold">Cameron Williamson</h3>
                <span className="text-xs text-lightDark font-medium text-ellipsis">
                  1h
                </span>
              </div>
              <p className="leading-[16px] text-lightDark text-[10px] max-w-[80%]">
                Not too bad, just trying to . How about you?
              </p>
            </div>
            <div className="absolute bottom-2 right-4">
              {/*<div className="w-[16px] h-[16px] rounded-full text-[10px] text-white font-bold bg-red-500 flex justify-center items-center">*/}
              {/*    3*/}
              {/*</div>*/}
              <IoCheckmarkDone className="font-semibold text-lg text-blue-400" />
            </div>
          </li>
          <li className="px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer">
            <div className="w-[40px] h-[40px]">
              <Image
                className="w-full h-full rounded-full"
                src={userImg}
                alt=""
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between ">
                <h3 className="text-xs font-semibold">Cameron Williamson</h3>
                <span className="text-xs text-lightDark font-medium text-ellipsis">
                  1h
                </span>
              </div>
              <p className="leading-[16px] text-lightDark text-[10px] max-w-[80%]">
                Not too bad, just trying to . How about you?
              </p>
            </div>
            <div className="absolute bottom-2 right-4">
              <div className="w-[16px] h-[16px] rounded-full text-[10px] text-white font-bold bg-red-500 flex justify-center items-center">
                3
              </div>
              {/*<IoCheckmarkDone className="font-semibold text-lg text-blue-400" />*/}
            </div>
          </li>
          <li className="px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer">
            <div className="w-[40px] h-[40px]">
              <Image
                className="w-full h-full rounded-full"
                src={userImg}
                alt=""
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between ">
                <h3 className="text-xs font-semibold">Cameron Williamson</h3>
                <span className="text-xs text-lightDark font-medium text-ellipsis">
                  1h
                </span>
              </div>
              <p className="leading-[16px] text-lightDark text-[10px] max-w-[80%]">
                Not too bad, just trying to . How about you?
              </p>
            </div>
            <div className="absolute bottom-2 right-4">
              <div className="w-[16px] h-[16px] rounded-full text-[10px] text-white font-bold bg-red-500 flex justify-center items-center">
                3
              </div>
              {/*<IoCheckmarkDone className="font-semibold text-lg text-blue-400" />*/}
            </div>
          </li>
          <li className="px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer">
            <div className="w-[40px] h-[40px]">
              <Image
                className="w-full h-full rounded-full"
                src={userImg}
                alt=""
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between ">
                <h3 className="text-xs font-semibold">Cameron Williamson</h3>
                <span className="text-xs text-lightDark font-medium text-ellipsis">
                  1h
                </span>
              </div>
              <p className="leading-[16px] text-lightDark text-[10px] max-w-[80%]">
                Not too bad, just trying to . How about you?
              </p>
            </div>
            <div className="absolute bottom-2 right-4">
              {/*<div className="w-[16px] h-[16px] rounded-full text-[10px] text-white font-bold bg-red-500 flex justify-center items-center">*/}
              {/*    3*/}
              {/*</div>*/}
              <IoCheckmarkDone className="font-semibold text-lg text-blue-400" />
            </div>
          </li>
          <li className="px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer">
            <div className="w-[40px] h-[40px]">
              <Image
                className="w-full h-full rounded-full"
                src={userImg}
                alt=""
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between ">
                <h3 className="text-xs font-semibold">Cameron Williamson</h3>
                <span className="text-xs text-lightDark font-medium text-ellipsis">
                  1h
                </span>
              </div>
              <p className="leading-[16px] text-lightDark text-[10px] max-w-[80%]">
                Not too bad, just trying to . How about you?
              </p>
            </div>
            <div className="absolute bottom-2 right-4">
              {/*<div className="w-[16px] h-[16px] rounded-full text-[10px] text-white font-bold bg-red-500 flex justify-center items-center">*/}
              {/*    3*/}
              {/*</div>*/}
              <IoCheckmarkDone className="font-semibold text-lg text-blue-400" />
            </div>
          </li>
          <li className="px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer">
            <div className="w-[40px] h-[40px]">
              <Image
                className="w-full h-full rounded-full"
                src={userImg}
                alt=""
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between ">
                <h3 className="text-xs font-semibold">Cameron Williamson</h3>
                <span className="text-xs text-lightDark font-medium text-ellipsis">
                  1h
                </span>
              </div>
              <p className="leading-[16px] text-lightDark text-[10px] max-w-[80%]">
                Not too bad, just trying to . How about you?
              </p>
            </div>
            <div className="absolute bottom-2 right-4">
              {/*<div className="w-[16px] h-[16px] rounded-full text-[10px] text-white font-bold bg-red-500 flex justify-center items-center">*/}
              {/*    3*/}
              {/*</div>*/}
              <IoCheckmarkDone className="font-semibold text-lg text-blue-400" />
            </div>
          </li>
          <li className="px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer">
            <div className="w-[40px] h-[40px]">
              <Image
                className="w-full h-full rounded-full"
                src={userImg}
                alt=""
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between ">
                <h3 className="text-xs font-semibold">Cameron Williamson</h3>
                <span className="text-xs text-lightDark font-medium text-ellipsis">
                  1h
                </span>
              </div>
              <p className="leading-[16px] text-lightDark text-[10px] max-w-[80%]">
                Not too bad, just trying to . How about you?
              </p>
            </div>
            <div className="absolute bottom-2 right-4">
              {/*<div className="w-[16px] h-[16px] rounded-full text-[10px] text-white font-bold bg-red-500 flex justify-center items-center">*/}
              {/*    3*/}
              {/*</div>*/}
              <IoCheckmarkDone className="font-semibold text-lg text-blue-400" />
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Conversation;

"use client";
import React, { useContext, useEffect, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { LuPlus } from "react-icons/lu";
import Image from "next/image";
import userImg from "../../../public/user.jpg";
import { IoCheckmarkDone } from "react-icons/io5";
import { useParams, usePathname, useRouter } from "next/navigation";
import { MyContext } from "@/Context/MyContext";
import { GetAuthUser, GetUsersByName } from "@/app/hook";
import socket from "@/utils/socket";
import axios from "axios";
import { BACKEND_URL } from "@/utils/url";
import Cookies from "js-cookie";

const Conversation = ({}) => {
  const router = useRouter();
  const { id } = useParams();
  const { isOpen, setIsOpen } = useContext(MyContext);
  const [showSearchUser, setShowSearchUser] = useState(false);
  const [input, setInput] = useState({});
  const { users } = GetUsersByName(input?.search);
  const [conversations, setConversations] = useState([]);

  const { authUser } = GetAuthUser();

  const handleSendMessage = async (searchUserId) => {
    const response = await axios.post(
      `${BACKEND_URL}/conversation/create-conversation`,
      {
        receiverId: searchUserId,
        message: "Say hi &128075;",
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
      }
    );

    if (response) {
      console.log(response);
      socket.emit("create-conversation", response?.data?.data?.conversation);
      setConversations((prevState) => [
        ...prevState,
        response?.data?.data?.conversation,
      ]);

      router.push(
        `/dashboard/message/${response?.data?.data?.conversation?._id}`
      );
    }
  };

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/conversation/get-conversation-by-id`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
      })
      .then((res) => {
        setConversations(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    socket.on("get-conversation", (data) => {
      console.log(data);
      setConversations((prevState) => [...prevState, data]);
    });
  }, []);

  useEffect(() => {
    console.log(conversations);
  }, [conversations]);

  const handleNavigateConversation = (id) => {
    router.push(`/dashboard/message/${id}`);
    setIsOpen(true);
  };
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
                        <button
                          onClick={() => handleSendMessage(user?._id)}
                          className="bg-primary px-3 py-1 rounded text-sm font-medium text-white"
                        >
                          Say hi &#128075;
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      ) : (
        <ul className="mt-[5px]">
          {conversations?.length > 0 &&
            conversations?.map((conversation) => {
              return (
                <li
                  onClick={() => handleNavigateConversation(conversation?._id)}
                  className={`${
                    id === conversation?.user1?._id ||
                    id === conversation?.user2?._id
                      ? "bg-gray"
                      : ""
                  } px-[16px] flex items-start gap-[10px] py-[14px] relative border-b border-light2 border-opacity-50 hover:bg-gray cursor-pointer`}
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
                        {conversation?.user2?._id !== authUser?._id
                          ? conversation?.user2?.fullname
                          : conversation?.user1?._id !== authUser?._id
                          ? conversation?.user1?.fullname
                          : ""}
                      </h3>
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
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default Conversation;

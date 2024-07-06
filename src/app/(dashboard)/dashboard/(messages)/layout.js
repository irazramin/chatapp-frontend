"use client";
import { MyContext } from "@/Context/MyContext";
import Conversation from "@/components/Conversation/Conversation";
import socket from "@/utils/socket";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
   
  }, []);
  return (
    <MyContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="bg-gray h-screen md:flex block relative overflow-hidden">
        <Conversation isOpen={isOpen} setIsOpen={setIsOpen} />
        <div
          className={`md:flex-1 md:ml-[320px] md:w-[100vh-320px] h-screen md:block ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {React.cloneElement(children, { isOpen, setIsOpen })}
        </div>
      </div>
    </MyContext.Provider>
  );
}

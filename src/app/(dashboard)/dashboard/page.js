"use client";
import socket from "@/utils/socket";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket is connected");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return <div>dashboard</div>;
};



export default Page;

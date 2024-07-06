"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import login from "../../public/login.png";
import register from "../../public/register.png";
import { ImFacebook } from "react-icons/im";
import { RiTwitterFill } from "react-icons/ri";
import { GrLinkedinOption } from "react-icons/gr";
import { PiUsersDuotone } from "react-icons/pi";
import { AiTwotoneMail } from "react-icons/ai";
import { AiTwotoneLock } from "react-icons/ai";
// import Registration from "src/components/Registration";
import { useRouter } from "next/navigation";
// import socket from "@/utils/socket";
import io from "socket.io-client";

export default function Home() {
  const [slide, setSlide] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();



  useEffect(() => {
    // setSlide("Login");
    // setLoading(false);
    router.push("/login");
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>; // Replace this with your loading component or spinner
  // }
  return (
    <main className="bg-background flex items-center justify-center w-full h-screen">
      {/* <section className="bg-white w-[70%] h-[80%] flex relative">
        <div
          className={`${
            slide === "Login" ? "sec-1-move" : "sec-1-forward"
          } w-[40%] h-full flex items-center justify-center relative z-50`}
        >
          {slide === "registration" && (
            <div className="w-full h-full relative">
              <Image
                className="w-full h-full object-cover"
                src={register}
                alt="Login"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <button
                  type="button"
                  className="py-[14px] bg-transparent border-2 text-white rounded-[25px] hover:bg-amber-50 hover:bg-opacity-40 active:scale-95 transition-all duration-300 absolute top-[50%] left-[50%] -translate-x-[50%] min-h-[40px] min-w-[158px] uppercase text-xs font-semibold"
                  onClick={(e) => {
                    e.preventDefault();
                    setSlide("Login");
                  }}
                >
                  Sign in
                </button>
              </div>
            </div>
          )}
          {slide === "Login" && (
            <div className="w-full h-full relative">
              <Image
                className="w-full h-full object-cover"
                src={login}
                alt="Login"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <button
                  type="button"
                  className="py-[14px] bg-transparent border-2 text-white rounded-[25px] hover:bg-amber-50 hover:bg-opacity-40 active:scale-95 transition-all duration-300 absolute top-[50%] left-[50%] -translate-x-[50%] min-h-[40px] min-w-[158px] uppercase text-xs font-semibold"
                  onClick={(e) => {
                    e.preventDefault();
                    setSlide("registration");
                  }}
                >
                  Sign up
                </button>
              </div>
            </div>
          )}
        </div>

        {slide === "registration" && (
          <div
            className={`${
              slide === "Login" ? "sec-2-move" : "sec-2-forward"
            } w-[60%] h-full`}
          >
            <Registration />
          </div>
        )}

        {slide === "Login" && (
          <div
            className={`${
              slide === "Login" ? "sec-2-move" : "sec-2-forward"
            } w-[60%] h-full`}
          >
            <Login />
          </div>
        )}
      </section> */}
    </main>
  );
}

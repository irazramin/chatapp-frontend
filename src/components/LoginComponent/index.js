import React, { useState } from "react";
import { PiUsersDuotone } from "react-icons/pi";
import { AiTwotoneLock, AiTwotoneMail } from "react-icons/ai";
import { RiTwitterFill } from "react-icons/ri";
import { ImFacebook } from "react-icons/im";
import { GrLinkedinOption } from "react-icons/gr";
import axios from "axios";
import { BACKEND_URL } from "@/utils/url";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginComponent = () => {
  const router = useRouter();
  const [focus, setFocus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const response = await axios.post(`${BACKEND_URL}/login`, data, {
      withCredentials: true,
    });
    if (response.data.code === 200) {
      toast("Login successful");
      router.push("dashboard/message");
    }
  };
  return (
    <>
      <div className="w-[70%] mx-auto my-[100px] ">
        <h2 className="text-[26px] font-bold text-primary text-center">
          Sign In to Your Account
        </h2>
        <div className="flex items-center justify-center gap-[21px] mt-[16px]">
          <button
            type="button"
            className="w-[28px] h-[28px] border rounded-full text-dark flex items-center justify-center group"
          >
            <RiTwitterFill className="group-hover:rotate-180 transition-all " />
          </button>
          <button
            type="button"
            className="w-[28px] h-[28px] border rounded-full text-dark flex items-center justify-center group"
          >
            <ImFacebook className="group-hover:rotate-180 transition-all " />
          </button>
          <button
            type="button"
            className="w-[28px] h-[28px] border rounded-full text-dark flex items-center justify-center group"
          >
            <GrLinkedinOption className="group-hover:rotate-180 transition-all " />
          </button>
        </div>
        <p className="text-light2 text-center text-[12px] leading-[14px] mt-10">
          oe use your email account
        </p>

        <div className="mt-[34px] text-center w-[70%] mx-auto">
          <form
            onSubmit={(e) => handleSubmit(e)}
            action="#"
            className="flex items-center flex-col gap-[10px]"
          >
            <div
              className={`${
                focus === "email" ? "border-primary transition-all" : ""
              } relative border border-light2 border-opacity-70 pl-[38px] pr-[26px] py-[10px] rounded-3xl w-full form-field`}
            >
              <AiTwotoneMail
                className={`absolute left-4 top-[50%] -translate-y-[50%]`}
              />
              <input
                onBlur={() => setFocus("")}
                onFocus={() => setFocus("email")}
                type="email"
                className="text-[13px] border-0 group focus:outline-0 w-full h-full"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div
              className={`${
                focus === "password" ? "border-primary transition-all" : ""
              }  relative border border-light2 border-opacity-70 pl-[38px] pr-[26px] py-[10px] rounded-3xl w-full form-field`}
            >
              <AiTwotoneLock
                className={`absolute left-4 top-[50%] -translate-y-[50%]`}
              />
              <input
                onBlur={() => setFocus("")}
                onFocus={() => setFocus("password")}
                type="password"
                className="text-[13px] border-0 group focus:outline-0 w-full h-full"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <button className="py-[15px] mt-[15px] bg-primary uppercase font-bold text-xs w-full rounded-3xl text-white hover:bg-secondary transition-all">
              Login
            </button>
            <button
              type="button"
              className="text-[13px] text-light font-semibold capitalize mt-[14px]"
            >
              Forgot Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;

"use client";
import RegistrationComponent from "@/components/RegistrationComponent";
import React from "react";
import register from "../../../public/register.png";
import Image from "next/image";
import AuthLayout from "@/components/AuthLayout";
import { useRouter } from "next/navigation";

const Registration = () => {
  const router = useRouter();
  return (
    <AuthLayout>
      <div className={`w-[60%] h-full`}>
        <RegistrationComponent />
      </div>
      <div
        className={` w-[40%] h-full flex items-center justify-center relative z-50`}
      >
        <div className="w-full h-full relative">
          <Image
            className="w-full h-full object-cover"
            src={register}
            alt="Registration"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <button
              type="button"
              className="py-[14px] bg-transparent border-2 text-white rounded-[25px] hover:bg-amber-50 hover:bg-opacity-40 active:scale-95 transition-all duration-300 absolute top-[50%] left-[50%] -translate-x-[50%] min-h-[40px] min-w-[158px] uppercase text-xs font-semibold"
              onClick={(e) => {
                e.preventDefault();
                router.push("/login");
              }}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Registration;

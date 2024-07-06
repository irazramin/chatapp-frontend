"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import login from "../../../public/login.png";
import LoginComponent from "@/components/LoginComponent";
import AuthLayout from "@/components/AuthLayout";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const Login = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router?.events?.on("routeChangeError", (e) => setLoading(false));
    router?.events?.on("routeChangeStart", (e) => setLoading(false));
    router?.events?.on("routeChangeComplete", (e) => setLoading(true));

    return () => {
      router?.events?.off("routeChangeError", (e) => setLoading(false));
      router?.events?.off("routeChangeStart", (e) => setLoading(false));
      router?.events?.off("routeChangeComplete", (e) => setLoading(true));
    };
  }, [router.events]);

  const authUser = Cookies.get("auth_user");

  if (authUser && !loading) {
    router.push("/dashboard/message");
  }
  return loading === true ? (
    <></>
  ) : (
    <AuthLayout>
      <div
        className={` w-[40%] h-full flex items-center justify-center relative z-50`}
      >
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
                router.push("/registration");
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>

      <div className={`w-[60%] h-full`}>
        <LoginComponent />
      </div>
    </AuthLayout>
  );
};

export default Login;

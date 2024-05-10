"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
const AuthGuard = ({ children }) => {
  const authUser = Cookies.get("auth_user");
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

  if (!authUser) {
    router.push("/login");
  }

  return loading ? (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      Loading...
    </div>
  ) : (
    <>{children}</>
  );
};

export default AuthGuard;

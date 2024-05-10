import Image from "next/image";
import React from "react";
import loader from "../../public/loader-login.svg";
const loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center">
      <Image src={loader} />
    </div>
  );
};

export default loading;

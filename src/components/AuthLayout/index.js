import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <main className="bg-background flex items-center justify-center w-full h-screen">
      <section className="bg-white w-[70%] h-[80%] flex relative">
        {children}
      </section>
    </main>
  );
};

export default AuthLayout;

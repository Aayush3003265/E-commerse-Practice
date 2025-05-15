import Image from "next/image";
import React from "react";
import bg from "@/app/assets/images/login-bg.jpg";
import cartPng from "@/app/assets/images/cart.jpg";

const AuthLayout = ({ children }) => {
  return (
    <section className="flex justify-center px-10 ">
      <Image
        src={bg}
        alt=""
        height={2000}
        width={2000}
        className="h-full w-full fixed max-w-screen left-0  right-0 -z-1 object-cover"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-2/3  xl:w-1/2 shadow-xl rounded-xl bg-white min-h-[70vh]  ">
        {children}
        <Image
          src={cartPng}
          alt=""
          height={1200}
          width={1200}
          className="h-full w-auto rounded-r-xl object-cover hidden md:block"
        />
      </div>
    </section>
  );
};

export default AuthLayout;

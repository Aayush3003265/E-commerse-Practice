"use client";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register } = useForm();
  const { ref, name, onChange, onBlur } = register("email");
  return (
    <div className="py-12 px-12">
      <h1 className="text-center text-3xl font-bold mb-4">Login Page</h1>
      <div className="py-2">
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name={name}
          ref={ref}
          className="border rounded-xl w-full p-2 mt-1"
        />
      </div>
      <div className="py-2">
        <label htmlFor="password">password:</label>
        <input
          type="password"
          id="password"
          className="border rounded-xl w-full p-2 mt-1"
        />
      </div>
      <div className="py-2">
        <input
          type="submit"
          value="Login"
          className="w-full bg-blue-600 hover:bg-blue-700 mt-2 text-white py-2 rounded hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Login;

"use client";
import { loginAuth } from "@/api/auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { EMAIL_REGEX } from "@/app/constants/Regex";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/auth/authActions";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { user, error, loading } = useSelector((state) => state.auth);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  useEffect(() => {
    if (user) return router.push("/");
    if (error)
      toast.error(error, {
        autoClose: 850,
      });
  }, [user, error]);

  //passing my form data to api for authentication
  const submitForm = (data) => {
    dispatch(loginUser(data));
  };

  // const { ref, name, onChange, onBlur } = register("email");
  return (
    <div className="dark:bg-slate-800 dark:text-white">
      <h1 className="text-center text-3xl font-bold mt-[80px]">Login Page</h1>
      <form className="py-16 px-12" onSubmit={handleSubmit(submitForm)}>
        <div className="pb-2">
          <label htmlFor="email" className="font-medium">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: EMAIL_REGEX,
                message: "Invalid Email Address",
              },
            })}
            className="border rounded-xl w-full p-2 mt-1 bg-slate-100 dark:bg-slate-700"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>
        <div className="pb-1 relative">
          <label htmlFor="password" className="font-medium">
            Password:
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password", { required: "Password is required" })}
            className="border rounded-xl w-full p-2 mt-1"
          />
          <button
            type="button"
            className="absolute right-4 top-10"
            onClick={() => {
              setShowPassword(!showPassword);
            }}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>

          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>
        <div className="py-2">
          <input
            type="submit"
            disabled={loading}
            value={loading ? "Submitting...." : "Login"}
            className="w-full bg-blue-600 hover:bg-blue-700 mt-2 text-white py-2 rounded hover:cursor-pointer disabled:opacity-60"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;

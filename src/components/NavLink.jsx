"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link, index }) => {
  const pathName = usePathname();
  const isActive =
    pathName == link.route ||
    (link.route !== "/" && pathName.startsWith(link.route));
  return (
    <li key={index}>
      <Link
        href={link.route}
        className={`${
          isActive
            ? "md:dark:text-white text-blue-600"
            : "text-blue-700 md:dark:text-white"
        }block py-2 px-3 text-white bg-blue-700 hover:text-white rounded-sm md:bg-transparent  md:dark:text-blue-500`}
        aria-current="page">
        {link.name}
      </Link>
    </li>
  );
};

export default NavLink;

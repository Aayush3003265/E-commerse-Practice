"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  const isActive =
    pathName == link.route ||
    (link.route !== "/" && pathName.startsWith(link.route));
  return (
    <li>
      <Link
        href={link.route}
        className={`block py-2 px-3 rounded-sm transition
      ${
        isActive
          ? "text-blue-600 dark:text-blue-500 font-semibold"
          : "text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
      }`}
        aria-current="page">
        {link.name}
      </Link>
    </li>
  );
};

export default NavLink;

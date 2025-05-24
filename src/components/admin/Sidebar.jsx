"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HiChartPie } from "react-icons/hi";
import { RiUserSettingsFill } from "react-icons/ri";
import { TbBasketCog } from "react-icons/tb";

const Sidebar = () => {
  const pathName = usePathname();

  const links = [
    {
      route: "/dashboard",
      label: "Dashboard",
      icon: <HiChartPie className="w-5 h-5" />,
    },
    {
      route: "/user-Management",
      label: "User Management",
      icon: <RiUserSettingsFill className="w-5 h-5" />,
    },
    {
      route: "/product-Management",
      label: "Product Management",
      icon: <TbBasketCog className="w-5 h-5" />,
    },
  ];

  return (
    <aside className="sticky top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 hidden sm:block">
      <div className="h-full px-3 pb-4 pt-4  overflow-y-auto bg-gray-100 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {links.map((link) => {
            const isActive = pathName.startsWith(link.route);
            return (
              <li key={link.route}>
                <Link
                  href={link.route}
                  className={`flex items-center p-2 rounded-lg group ${
                    isActive
                      ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}>
                  {link.icon}
                  <span className="ms-3">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

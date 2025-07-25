"use client";

import { Tooltip } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebarItem({ label, href, icon, isDisabled }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <li
      className={`
      flex gap-2 p-2 text-sm border-none h-8 rounded transition-all duration-100 text-black hover:bg-gray-100
      ${isActive ? "bg-gray-100 font-bold" : "text-gray-600"}
      ${isDisabled && "cursor-default  opacity-50 hover:bg-transparent"}
    `}
    >
      {isDisabled ? (
        <Tooltip
          isDisabled={!isDisabled}
          color="foreground"
          content={"Proximamente"}
          placement={"right"}
        >
          <div className="flex items-center gap-2 select-none">
            {icon}
            {label}
          </div>
        </Tooltip>
      ) : (
        <Link className="flex items-center gap-2 w-full" href={href}>
          {icon}
          {label}
        </Link>
      )}
    </li>
  );
}

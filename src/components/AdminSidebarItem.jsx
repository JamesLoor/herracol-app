"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebarItem({ label, href, icon, isDisabled }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <li
      className={`
      flex gap-2 p-2 text-sm border-none h-8 rounded transition-all duration-100
      ${
        isDisabled
          ? "cursor-default text-gray-400 opacity-70"
          : "cursor-pointer hover:text-blue-700 hover:font-bold"
      }
      ${isActive ? "text-blue-700 font-bold" : "text-black"}
    `}
    >
      {isDisabled ? (
        <div className="flex items-center gap-2 select-none">
          {icon}
          {label}
        </div>
      ) : (
        <Link className="flex items-center gap-2" href={href}>
          {icon}
          {label}
        </Link>
      )}
    </li>
  );
}

"use client";

import Link from "next/link";

export default function NavItem({ route, label, handleClicked, isActive }) {
  return (
    <li onClick={handleClicked} className="text-white text-[18px] font-bold">
      <Link
        className={isActive ? "border-b-2 border-accent" : "border-b-0"}
        href={route}
      >
        {label}
      </Link>
    </li>
  );
}

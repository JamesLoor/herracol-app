"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ route, label, handleClicked }) {
  const pathname = usePathname();
  const isActive = pathname === route || pathname.startsWith(`${route}/`);
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

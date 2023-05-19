"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ route, label }) {
  const pathname = usePathname();
  const isActive = pathname === route;
  return (
    <li className="text-white text-[18px] font-bold">
      <Link
        className={isActive ? "border-b-2 border-accent" : "border-b-0"}
        href={route}
      >
        {label}
      </Link>
    </li>
  );
}

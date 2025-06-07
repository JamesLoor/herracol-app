"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuCategoryItem({ route, category, target, onClose }) {
  const pathname = usePathname();
  const isActive = pathname === route;
  return (
    <Link
      onClick={onClose}
      className={`flex justify-between items-center rounded-3xl px-5 py-2 capitalize group hover:bg-accent hover:text-black ease-in duration-200 ${
        isActive ? "bg-accent text-black" : "bg-primary-dark text-white"
      }`}
      href={route}
      target={target}
    >
      {category}
      <figure>
        <Image
          className={`${isActive ? "invert" : "group-hover:invert"}`}
          src="/icons/menu-category-item.svg"
          width={15}
          height={15}
          alt="Menu list icon"
        />
      </figure>
    </Link>
  );
}

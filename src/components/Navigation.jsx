"use client";

import Image from "next/image";
import NavItem from "./NavItem";
import { useState } from "react";
import Link from "next/link";

const links = [
  {
    key: "inicio",
    label: "Inicio",
    route: "/",
  },
  {
    key: "productos",
    label: "Productos",
    route: "/productos",
  },
  {
    key: "contacto",
    label: "Contacto",
    route: "/contacto",
  },
];

export default function Navigation() {
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <header className="fixed z-40 w-full grid grid-cols-header justify-between items-center px-[4%] bg-primary min-h-[69px]">
      <Link href="/">
        <Image
          width={225}
          height={48}
          src="/assets/logoHerracolSA.png"
          alt="Logo Herracol S.A."
        />
      </Link>
      <button className="md:hidden" onClick={handleClicked}>
        <Image src="/icons/menu.svg" width={35} height={35} alt="Menu Icon" />
      </button>
      <nav
        className={`${
          clicked ? "left-0" : "-left-full"
        } absolute z-50 top-0 bottom-0 w-screen h-screen grid justify-center items-center bg-primary ease-in duration-300 md:static md:w-full md:h-full md:text-right`}
      >
        <button
          className="absolute top-2 right-[5%] md:hidden"
          onClick={handleClicked}
        >
          <Image
            src="/icons/close.svg"
            width={50}
            height={50}
            alt="Menu Icon"
          />
        </button>
        <ul className="grid gap-5 text-center md:flex md:gap-8 md:items-center">
          {links.map(({ key, route, label }) => {
            return <NavItem key={key} route={route} label={label} />;
          })}
        </ul>
      </nav>
    </header>
  );
}

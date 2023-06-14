"use client";

import { useToggle } from "@/hooks/useToggle";
import Image from "next/image";
import NavItem from "./NavItem";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { usePathname } from "next/navigation";
import DropdownItem from "./DropdownItem";

export default function Navigation() {
  const [isOpenMenu, toggleMenu] = useToggle();
  const [isOpenDropdown, toggleDropdown] = useToggle();
  const pathname = usePathname();

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
      <button className="md:hidden" onClick={toggleMenu}>
        <Image src="/icons/menu.svg" width={35} height={35} alt="Menu Icon" />
      </button>
      <nav
        className={`${
          isOpenMenu ? "left-0" : "-left-full"
        } absolute z-50 top-0 bottom-0 w-full h-screen grid justify-center items-center bg-primary ease-in duration-300 md:transition-none md:static md:w-full md:h-full md:text-right`}
      >
        <button
          className="absolute top-2 right-[5%] md:hidden"
          onClick={toggleMenu}
        >
          <Image
            src="/icons/close.svg"
            width={50}
            height={50}
            alt="Menu Icon"
          />
        </button>
        <ul className="grid gap-6 text-center md:flex md:gap-10 md:items-center">
          {links.map(({ key, route, label, subItems }) => {
            const isActive =
              pathname === route || pathname.startsWith(`${route}/`);

            if (subItems) {
              return (
                <Dropdown
                  key={key}
                  isOpen={isOpenDropdown}
                  toggleDropdown={toggleDropdown}
                  label={() => (
                    <li
                      className={`w-full text-white text-lg text-left ${
                        isActive ? "border-b-2 border-accent" : "border-b-0"
                      }`}
                    >
                      {label}
                    </li>
                  )}
                  className="!bg-primary border-primary"
                >
                  {subItems.map((item) => {
                    return (
                      <DropdownItem
                        key={item.key}
                        className="hover:bg-primaryDark"
                        onClick={() => {
                          toggleDropdown();
                          toggleMenu();
                        }}
                      >
                        <Link
                          href={`${route}${item.route}`}
                          className="w-full text-white text-lg py-2 px-4 text-left"
                        >
                          {item.label}
                        </Link>
                      </DropdownItem>
                    );
                  })}
                </Dropdown>
              );
            }

            return (
              <NavItem
                key={key}
                route={route}
                label={label}
                isActive={isActive}
                handleClicked={() => {
                  if (isOpenDropdown) toggleDropdown();
                  toggleMenu();
                }}
              />
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

const links = [
  {
    key: "inicio",
    label: "Inicio",
    route: "/",
  },
  {
    key: "aluminio-y-vidrio",
    label: "Aluminio y Vidrio",
    route: "/aluminio-y-vidrios",
    subItems: [
      {
        key: "servicios",
        label: "Servicios",
        route: "/servicios",
      },
      {
        key: "obras",
        label: "Obras",
        route: "/obras",
      },
    ],
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

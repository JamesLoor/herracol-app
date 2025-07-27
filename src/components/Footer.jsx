"use client";

import { contactPhone } from "@/config";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="grid gap-10 px-[4%] py-10 md:grid-cols-4">
      <div className="grid grid-rows-[var(--grid-footer)] place-items-center">
        <Image
          src="/assets/footer-logo.png"
          width={188}
          height={126}
          alt="Logo Herracol"
        />
        <span>© Herracol {new Date().getFullYear()}</span>
      </div>
      {content.map(({ key, title, links }) => {
        return (
          <div key={key}>
            <div className=" border-b-2 border-accent pb-3 w-full">
              <h5 className="text-2xl font-extrabold">{title}</h5>
            </div>
            <ul className="grid gap-3 mt-3">
              {links.map(({ component, key, route, label, ...props }) => {
                if (component === "a") {
                  return (
                    <li key={key}>
                      <a href={route} {...props}>
                        {label}
                      </a>
                    </li>
                  );
                }

                return (
                  <li key={key}>
                    <Link href={route} {...props}>
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </footer>
  );
}

const content = [
  {
    key: "empresa",
    title: "Empresa",
    links: [
      {
        key: "productos",
        route: "/productos",
        label: "Productos",
      },
      {
        key: "catalogoHerramientas",
        route:
          "https://firebasestorage.googleapis.com/v0/b/herracol-api-8820d.appspot.com/o/catalogue%2FHerracol%2FCatalogoHerracol2022.pdf?alt=media",
        label: "Catálogo Herramientas",
        target: "_blank",
      },
      {
        key: "catalogoObras",
        route:
          "https://firebasestorage.googleapis.com/v0/b/herracol-api-8820d.appspot.com/o/catalogue%2FCata%CC%81logo%20de%20Obras%20.pdf?alt=media",
        label: "Catálogo Obras",
        target: "_blank",
      },
    ],
  },
  {
    key: "contacto",
    title: "Contacto",
    links: [
      {
        key: "direccion",
        route:
          "https://www.google.com/maps/place/Parque+california+2+bodegas/@-2.096338,-79.937145,16z/data=!4m6!3m5!1s0x902d0d416a07ba3f:0x343b7937a49a3d51!8m2!3d-2.0963376!4d-79.937145!16s%2Fg%2F11clstkck_?hl=es",
        label: "Via a Daule km 11.5 Bodegas C7 y C41 Parque California 2",
        target: "_blank",
      },
      {
        key: "correo",
        route: "mailto:info@herracol.net",
        label: "info@herracol.net",
        component: "a",
      },
      {
        key: "celular",
        route: `tel:+${contactPhone}`,
        label: `+${contactPhone.slice(0, 3)}  ${contactPhone.slice(
          3,
          5
        )} ${contactPhone.slice(5, 8)} ${contactPhone.slice(8)}`,
        component: "a",
      },
    ],
  },
  {
    key: "legal",
    title: "Legal",
    links: [
      {
        key: "terminos",
        route: "/terminos-y-condiciones",
        label: "Términos y condiciones",
        target: "_blank",
      },
      {
        key: "politica",
        route: "/politicas-de-privacidad",
        label: "Políticas de privacidad",
        target: "_blank",
      },
    ],
  },
];

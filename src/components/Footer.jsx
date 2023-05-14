import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="grid gap-10 px-[4%] md:grid-cols-4">
      <div className="grid place-items-center text-center">
        <Image
          src="/assets/footer-logo.png"
          width={188}
          height={126}
          alt="Logo Herracol"
        />
        <span>© Herracol 2023</span>
      </div>
      {content.map(({ key, title, links }) => {
        return (
          <div key={key}>
            <div className=" border-b-2 border-accent pb-3 w-full">
              <h5 className="text-2xl font-extrabold">{title}</h5>
            </div>
            <ul className="grid gap-3 mt-3">
              {links.map(({ route, label }) => {
                return (
                  <li key={route}>
                    <Link href={route}>{label}</Link>
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
        route: "/",
        label: "Catálogo Herramientas",
      },
      {
        key: "catalogoObras",
        route: "/",
        label: "Catálogo Obras",
      },
    ],
  },
  {
    key: "contacto",
    title: "Contacto",
    links: [
      {
        key: "direccion",
        route: "/",
        label: "Via a Daule km 11.5 Bodegas C7 y C41 Parque California 2",
      },
      {
        key: "correo",
        route: "/",
        label: "info@herracol.net",
      },
      {
        key: "celular",
        route: "/",
        label: "+593 98 324 5586",
      },
    ],
  },
  {
    key: "legal",
    title: "Legal",
    links: [
      {
        key: "terminos",
        route: "/",
        label: "Términos y condiciones",
      },
      {
        key: "politica",
        route: "/",
        label: "Política de privacidad",
      },
    ],
  },
];

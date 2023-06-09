export const metadata = {
  title: `Contacto | Herracol S.A.`,
  description:
    "¿Tienes preguntas o necesitas ayuda con nuestros productos o servicios? Contáctanos o ven a visitarnos. Encuentra aquí toda nuestra información de contacto, la ubicación de nuestra empresa en Google Maps y un conveniente formulario para hacer tu consulta directamente. Estamos aquí para ayudarte.",
  openGraph: {
    title: `Contacto | Herracol S.A.`,
    description:
      "¿Tienes preguntas o necesitas ayuda con nuestros productos o servicios? Contáctanos o ven a visitarnos. Encuentra aquí toda nuestra información de contacto, la ubicación de nuestra empresa en Google Maps y un conveniente formulario para hacer tu consulta directamente. Estamos aquí para ayudarte.",
    url: "https://herracol.net/contacto",
  },
  alternates: {
    canonical: "https://herracol.net/contacto",
  },
};

import Map from "@/components/Map";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contacto | Herracol S.A.</title>
        <meta
          name="description"
          content="¿Tienes preguntas o necesitas ayuda con nuestros productos o servicios? Contáctanos o ven a visitarnos. Encuentra aquí toda nuestra información de contacto, la ubicación de nuestra empresa en Google Maps y un conveniente formulario para hacer tu consulta directamente. Estamos aquí para ayudarte."
        />
        <link rel="canonical" href="https://herracol.net/contacto" />
      </Head>
      <section className="h-full">
        <Map src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3987.148069725225!2d-79.937145!3d-2.096338!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d0d416a07ba3f%3A0x343b7937a49a3d51!2sParque%20california%202%20bodegas!5e0!3m2!1ses!2sec!4v1684454482402!5m2!1ses!2sec" />
        <div className="grid gap-8 px-[4%] py-10 w-full md:grid-cols-contact md:items-start">
          <div className="p-8 border-solid border rounded-md shadow-lg bg-white md:mt-[-250px] md:w-[350px] md:place-self-end">
            <ContactForm
              initialState={{
                name: "",
                email: "",
                message: "",
              }}
              fields={[
                { component: Input, name: "name", label: "Nombre:" },
                {
                  component: Input,
                  name: "email",
                  label: "Correo electrónico:",
                  type: "email",
                },
                {
                  component: Textarea,
                  name: "message",
                  label: "Mensaje:",
                },
              ]}
            />
          </div>

          <div className="w-full grid gap-6 md:order-[-1] lg:grid-cols-contactInfo">
            {contactMethods.map(({ component, id, icon, label, ...props }) => {
              if (component === "a") {
                return (
                  <a
                    key={id}
                    className="w-fit flex gap-4 items-center"
                    {...props}
                  >
                    <Image width={30} height={30} src={icon} alt={id} />
                    <h4>{label}</h4>
                  </a>
                );
              }

              return (
                <Link
                  key={id}
                  className="w-fit flex gap-4 items-center"
                  {...props}
                >
                  <Image width={30} height={30} src={icon} alt={id} />
                  <h4>{label}</h4>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

const contactMethods = [
  {
    id: "whatsapp",
    icon: "/icons/whatsapp.svg",
    href: "https://wa.me/593983245586",
    label: "+593 98 324 5586",
    target: "_blank",
    prefetch: false,
  },
  {
    id: "location",
    icon: "/icons/map.svg",
    href: "https://www.google.com/maps/place/Parque+california+2+bodegas/@-2.096338,-79.937145,16z/data=!4m6!3m5!1s0x902d0d416a07ba3f:0x343b7937a49a3d51!8m2!3d-2.0963376!4d-79.937145!16s%2Fg%2F11clstkck_?hl=es",
    label:
      "Via a Daule km 11.5 Bodegas C7 y C41 Parque California 2 - Guayaquil - Ecuador",
    target: "_blank",
    prefetch: false,
  },
  {
    id: "instagram",
    icon: "/icons/instagram.svg",
    href: "https://www.instagram.com/herracol_sa/?hl=es",
    label: "@herracol_sa",
    target: "_blank",
    prefetch: false,
  },
  {
    id: "email",
    icon: "/icons/mail.svg",
    href: "mailto:info@herracol.net",
    label:
      "info@herracol.net - ventas@herracol.net - importaciones@herracol.net",
    component: "a",
  },
  {
    id: "phone",
    icon: "/icons/phone.svg",
    href: "tel:+593983245586",
    label: "+593 4 2103460",
    component: "a",
  },
];

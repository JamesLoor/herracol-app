import Map from "@/components/Map";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
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
            {contactMethods.map((info) => {
              return (
                <Link
                  href={info.href}
                  target="_blank"
                  key={info.id}
                  className="w-fit flex gap-4 items-center"
                >
                  <Image width={30} height={30} src={info.icon} alt={info.id} />
                  <h4>{info.value}</h4>
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
    value: "+593 98 324 5586",
    href: "https://wa.me/593983245586",
  },

  {
    id: "location",
    icon: "/icons/map.svg",
    value:
      "Via a Daule km 11.5 Bodegas C7 y C41 Parque California 2 - Guayaquil - Ecuador",
    href: "https://www.google.com/maps/place/Parque+california+2+bodegas/@-2.096338,-79.937145,16z/data=!4m6!3m5!1s0x902d0d416a07ba3f:0x343b7937a49a3d51!8m2!3d-2.0963376!4d-79.937145!16s%2Fg%2F11clstkck_?hl=es",
  },
  {
    id: "instagram",
    icon: "/icons/instagram.svg",
    value: "@herracol_sa",
    href: "https://www.instagram.com/herracol_sa/?hl=es",
  },
  {
    id: "email",
    icon: "/icons/mail.svg",
    value:
      "info@herracol.net - ventas@herracol.net - importaciones@herracol.net",
    href: "mailto:info@herracol.net",
  },
  {
    id: "phone",
    icon: "/icons/phone.svg",
    value: "+593 4 2103460",
    href: "tel:+593983245586",
  },
];

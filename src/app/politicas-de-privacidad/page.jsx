export const metadata = {
  title: `${policy.title} | Herracol S.A.`,
  description:
    "Tu privacidad es importante para nosotros. Descubre cómo recogemos, usamos y protegemos tu información personal en nuestra Política de Privacidad. Estamos comprometidos con la transparencia y la seguridad de tus datos.",
  openGraph: {
    title: `${policy.title} | Herracol S.A.`,
    description:
      "Tu privacidad es importante para nosotros. Descubre cómo recogemos, usamos y protegemos tu información personal en nuestra Política de Privacidad. Estamos comprometidos con la transparencia y la seguridad de tus datos.",
    url: "https://herracol.net/politicas-de-privacidad",
  },
  alternates: {
    canonical: "https://herracol.net/politicas-de-privacidad",
  },
};

export default function PolicyOfPrivacy() {
  return (
    <section className="pt-[50px] px-[4%] max-w-[1280px] mx-auto">
      <h2 class="mb-8 text-3xl font-bold">{policy.title}</h2>
      {policy.items.map((item) => {
        return (
          <>
            <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
            <p className="mb-6">{item.paragraph}</p>
          </>
        );
      })}
      <p class="mb-6">{policy.date}</p>
    </section>
  );
}

const policy = {
  title: "Política de Privacidad",
  items: [
    {
      title: "1. Recopilación de información personal",
      paragraph:
        "Al utilizar el formulario de contacto en este sitio web, usted acepta proporcionar su nombre, dirección de correo electrónico, número de teléfono y cualquier otra información solicitada. Esta información se utilizará exclusivamente para responder a sus consultas y proporcionarle información sobre nuestros servicios.",
    },
    {
      title: "2. Uso de la información",
      paragraph:
        "La información personal que proporciona será utilizada únicamente para los fines descritos en esta Política de Privacidad y en los Términos y Condiciones de Uso. No compartiremos su información personal con terceros sin su consentimiento, excepto cuando sea necesario para cumplir con la ley, proteger nuestros derechos o cumplir con los requisitos legales.",
    },
    {
      title: "3. Seguridad de la información",
      paragraph:
        "Nos esforzamos por proteger la información personal que nos proporciona, utilizando medidas de seguridad adecuadas para prevenir el acceso no autorizado, divulgación, modificación o destrucción de dicha información. Sin embargo, no podemos garantizar la seguridad absoluta de su información personal.",
    },
    {
      title: "4. Acceso y rectificación de la información",
      paragraph:
        "Usted tiene derecho a acceder, rectificar, actualizar o eliminar su información personal almacenada en nuestros sistemas. Para ejercer estos derechos, por favor póngase en contacto con nosotros a través de la dirección de correo electrónico o número de teléfono proporcionados en este sitio web.",
    },
    {
      title: "5. Cambios en la política de privacidad",
      paragraph:
        "HERRACOL S.A. se reserva el derecho de modificar esta Política de Privacidad en cualquier momento y sin previo aviso. Al utilizar este sitio web, usted acepta cumplir con la política de privacidad vigente en ese momento.",
    },
    {
      title: "6. Uso de cookies",
      paragraph:
        "Este sitio web puede utilizar cookies y otras tecnologías de seguimiento para mejorar su experiencia de navegación, analizar el uso del sitio web y brindar funcionalidades adicionales. Al utilizar este sitio web, usted acepta el uso de cookies y otras tecnologías de seguimiento, de acuerdo con nuestra Política de Cookies, si corresponde.",
    },
    {
      title: "7. Enlaces a sitios web de terceros",
      paragraph:
        "Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad o el contenido de estos sitios web de terceros. Si visita estos sitios web, le recomendamos que revise sus políticas de privacidad y términos y condiciones antes de proporcionar cualquier información personal.",
    },
    {
      title: "8. Contacto",
      paragraph:
        "Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad o sobre el tratamiento de su información personal, no dude en ponerse en contacto con nosotros utilizando la información de contacto proporcionada en este sitio web.",
    },
  ],
  date: "Fecha de la última actualización: 28/05/2023",
};

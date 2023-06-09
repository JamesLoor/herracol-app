export const metadata = {
  title: `${terms.title} | Herracol S.A.`,
  description:
    "Revisa nuestros Términos y Condiciones para entender cómo funcionan nuestros servicios y qué puedes esperar de nosotros. Nos comprometemos a mantener un entorno seguro y transparente para nuestros usuarios.",
  openGraph: {
    title: `${terms.title} | Herracol S.A.`,
    description:
      "Revisa nuestros Términos y Condiciones para entender cómo funcionan nuestros servicios y qué puedes esperar de nosotros. Nos comprometemos a mantener un entorno seguro y transparente para nuestros usuarios.",
    url: "https://herracol.net/terminos-y-condiciones",
  },
  alternates: {
    canonical: "https://herracol.net/terminos-y-condiciones",
  },
};

export default function TermsOfUse() {
  return (
    <section className="pt-[50px] px-[4%] max-w-[1280px] mx-auto">
      <h2 class="mb-8 text-3xl font-bold">{terms.title}</h2>
      {terms.items.map((item) => {
        return (
          <>
            <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
            <p className="mb-6 text-justify">{item.paragraph}</p>
          </>
        );
      })}
      <p class="mb-6">{terms.date}</p>
    </section>
  );
}

const terms = {
  title: "Términos y Condiciones de Uso",
  items: [
    {
      title: "1. Introducción",
      paragraph:
        "Al utilizar esta landing page, usted acepta cumplir con estos Términos y Condiciones de Uso. Si no está de acuerdo con alguno de estos términos, no utilice este sitio web.",
    },
    {
      title: "2. Derechos de propiedad intelectual",
      paragraph:
        "Todos los derechos de propiedad intelectual relacionados con el contenido, diseño, logotipos, imágenes y demás elementos de este sitio web son propiedad de HERRACOL S.A. o sus licenciantes. Queda prohibida la reproducción, distribución, comunicación pública o transformación de estos elementos sin la autorización previa y por escrito de HERRACOL S.A. o sus licenciantes.",
    },
    {
      title: "3. Uso del formulario de contacto",
      paragraph:
        "Al proporcionar su información personal a través del formulario de contacto, usted acepta que HERRACOL S.A. pueda utilizar esa información para contactarlo con respecto a sus servicios. Al proporcionar su información, usted garantiza que es veraz, exacta y actualizada.",
    },
    {
      title: "4. Limitación de responsabilidad",
      paragraph:
        "HERRACOL S.A. no será responsable de ningún daño o pérdida que pueda resultar del uso de este sitio web o la información contenida en él. HERRACOL S.A. no garantiza que el sitio web esté libre de errores, virus u otros elementos dañinos.",
    },
    {
      title: "5. Modificaciones de los términos y condiciones",
      paragraph:
        "HERRACOL S.A. se reserva el derecho de modificar estos Términos y Condiciones de Uso en cualquier momento y sin previo aviso. Al utilizar este sitio web, usted acepta cumplir con los términos y condiciones vigentes en ese momento.",
    },
  ],
  date: "Fecha de la última actualización: 28/05/2023",
};

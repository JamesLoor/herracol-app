import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="grid gap-8 items-center min-h-[calc(100vh-69px)] w-full px-[4%] mx-[auto] py-10 md:grid-cols-banner">
        <div className="grid order-2 gap-4 md:gap-6 md:order-1">
          <h1 className="text-3xl md:text-6xl font-bold">{banner.title}</h1>
          <p className="leading-relaxed md:text-lg">{banner.text}</p>
          <ButtonLink route={banner.cta.route}>{banner.cta.label}</ButtonLink>
        </div>
        <div className="grid place-items-center md:order-1">
          <Image
            alt="Mountains"
            src={banner.image}
            width={300}
            height={300}
            sizes="100vw"
            className="w-full h-auto max-w-[300px] md:max-w-full"
            priority={true}
          />
        </div>
      </section>
    </>
  );
}

const banner = {
  title: "Quienes Somos",
  text: "Herracol S.A. es una empresa familiar fundada en Guayaquil - Ecuador el 13 de noviembre del 2000, dedicada a la importación y distribución de herramientas para la construcción, agricultura, jardinería e industria con cobertura en todo el territorio nacional. En nuestro portafolio de productos contamos con una línea de negocios y punto de venta de aluminio, vidrio y sus accesorios.",
  cta: {
    label: "Contactar",
    route: "/contacto",
  },
  image: "/assets/logoHerracolRounded.png",
};

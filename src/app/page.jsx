import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="grid gap-8 items-center min-h-[calc(100vh-69px)] w-full px-[4%] mx-[auto] py-10 md:grid-cols-banner">
        <div className="grid order-2 gap-4 md:gap-6 md:order-1">
          <h1 className="text-3xl lg:text-5xl font-bold">{banner.title}</h1>
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
      <section className="grid gap-8 px-[4%] py-10 w-full">
        <h2 className="text-3xl lg:text-5xl font-bold text-center">
          Nuestras Marcas
        </h2>
        <figure className="grid gap-3 lg:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {brands.map(({ route, alt }) => {
            return (
              <Image
                key="brand"
                src={route}
                alt={alt}
                width={300}
                height={300}
                quality={100}
                className="w-full h-auto"
              />
            );
          })}
        </figure>
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

const brands = [
  {
    route: "/assets/brands/logoBolt.png",
    alt: "Logo Bolt",
  },
  {
    route: "/assets/brands/logoGermany.png",
    alt: "Logo Germany",
  },
  {
    route: "/assets/brands/logoGavilan.png",
    alt: "Logo Gavilan",
  },
  {
    route: "/assets/brands/logoIncolma.png",
    alt: "Logo Incolma",
  },
  {
    route: "/assets/brands/logoColima.png",
    alt: "Logo Colima",
  },
  {
    route: "/assets/brands/logoAbro.png",
    alt: "Logo Abro",
  },
  {
    route: "/assets/brands/logoNorton.png",
    alt: "Logo Norton",
  },
  {
    route: "/assets/brands/logoSaintGobain.png",
    alt: "Logo Saint Gobain",
  },
  {
    route: "/assets/brands/logoCaribe.png",
    alt: "Logo Caribe",
  },
  {
    route: "/assets/brands/logoTEKBOND.png",
    alt: "Logo TEKBOND",
  },
  {
    route: "/assets/brands/logoPractiagro.png",
    alt: "Logo Practiagro",
  },
  {
    route: "/assets/brands/logoAgrimix.png",
    alt: "Logo Agrimix",
  },
];

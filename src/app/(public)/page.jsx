import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        id="banner"
        className="grid gap-8 items-center min-h-[calc(100vh-69px)] w-full px-[4%] mx-auto py-10 md:grid-cols-[var(--grid-banner)]"
      >
        <div className="grid order-2 gap-4 md:gap-6 md:order-1">
          <h1 className="text-3xl lg:text-5xl font-bold">{banner.title}</h1>
          <p className="leading-relaxed md:text-lg text-justify">
            {banner.text[0]}
          </p>
          <p className="leading-relaxed md:text-lg text-justify">
            {banner.text[1]}
          </p>
          <div className="flex gap-4 flex-wrap">
            <ButtonLink className="max-content" route={banner.cta.route}>
              {banner.cta.label}
            </ButtonLink>
            <ButtonLink
              className="max-content"
              route={banner.buttonWorks.route}
            >
              {banner.buttonWorks.label}
            </ButtonLink>
            <ButtonLink
              className="max-content"
              route={banner.buttonServices.route}
            >
              {banner.buttonServices.label}
            </ButtonLink>
          </div>
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

      <section id="brands" className="grid gap-8 px-[4%] py-10 w-full">
        <h2 className="text-2xl lg:text-4xl font-bold text-center">
          Nuestras Marcas
        </h2>
        <figure className="grid gap-3 lg:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
          {brands
            .filter(({ disabled }) => !disabled)
            .map(({ route, alt }) => {
              return (
                <Image
                  key={alt}
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
  text: [
    "Somos una empresa familiar fundada en Guayaquil - Ecuador el 13 de Noviembre del año 2000, dedicada a la importación y distribución de herramientas para la construcción, agricultura, jardinería e industria con cobertura en todo el territorio nacional.",
    "A partir del 2007 contamos con una línea de negocios relacionada con importación de Aluminio y Vidrio. Nuestra bodega Matriz está ubicada en Guayaquil y además tenemos un punto de venta en la ciudad de Manta. Realizamos instalaciones de vidrio crudo, templado y laminado en villas, departamentos, oficinas, centros comerciales, entre otros. Contamos con personal calificado para ello.",
  ],
  cta: {
    label: "Contactar",
    route: "/contacto",
  },
  buttonServices: {
    label: "Servicios",
    route: "/aluminio-y-vidrios/servicios",
  },
  buttonWorks: {
    label: "Obras",
    route: "/aluminio-y-vidrios/obras",
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
    route: "https://www.maxmetal.com.br/site/static/images/logo.svg",
    alt: "Logo Max ",
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
    disabled: true,
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
    disabled: true,
  },
  {
    route: "/assets/brands/logoTEKBOND.png",
    alt: "Logo TEKBOND",
  },
  {
    route: "/assets/brands/logoPractiagro.png",
    alt: "Logo Practiagro",
    disabled: true,
  },
  {
    route: "/assets/brands/logoAgrimix.png",
    alt: "Logo Agrimix",
  },
].filter(({ disabled }) => !disabled);

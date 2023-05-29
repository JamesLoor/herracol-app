import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        id="obras"
        className="grid auto-rows-max place-content-center gap-8 min-h-[calc(100vh-69px)] w-full px-[4%] max-w-7xl mx-[auto] py-10"
      >
        <div className="grid order-2 gap-4 md:gap-6 md:order-1">
          <h1 className="text-3xl lg:text-5xl font-bold">{banner.title}</h1>
          <p className="leading-relaxed md:text-lg text-justify">
            {banner.text[0]}
          </p>
        </div>
        <div className="grid auto-rows-max grid-cols-2 min-h-[300px] items-center">
          {banner.projects.map((project) => {
            return (
              <article
                key={project.id}
                className="grid place-items-center auto-rows-max"
              >
                <Image
                  alt="Mountains"
                  src={project.image}
                  width={300}
                  height={300}
                  sizes="100vw"
                  className="w-full h-full md:max-w-[350px]"
                  priority={true}
                />
                <div className="grid text-center gap-1">
                  <p className="uppercase font-bold text-lg">{project.name}</p>
                  <p>{project.location}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

const banner = {
  title: "Obras",
  text: [
    "Puertas y ventanas corredizas en vidrio crudo y laminado, ventanas abatibles, puertas de baño en vidrio templado, pasamanos de acero inoxidable y vidrio templado, vidrio templado en área de piscinas, mamparas en vidrio crudo y laminado, divisiones de oficinas. Todo en perfileria de aluminio nacional e importado en series 100, 200 y tipo Europeo",
  ],
  projects: [
    {
      id: "edificio-cuarzo",
      image: "/assets/logoHerracolRounded.png",
      name: "Edificio Cuarzo",
      location: "Playa Alta, Manta",
    },
    {
      id: "villa-cristal-azul",
      image: "/assets/logoHerracolRounded.png",
      name: "Villas cristal Azul",
      location: "Etapa 1 & 2",
    },
  ],
};

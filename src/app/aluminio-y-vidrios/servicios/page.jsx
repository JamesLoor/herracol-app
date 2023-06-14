import Image from "next/image";

export default function Services() {
  return (
    <>
      <section
        id="services"
        className="grid gap-8 items-center w-full px-[4%] mx-[auto] py-10 md:grid-cols-2"
      >
        <div className="grid order-2 gap-4 md:gap-6 ">
          <h2 className="text-2xl lg:text-4xl font-bold">{services.title}</h2>
          <p className="leading-relaxed md:text-lg text-justify">
            {services.text}
          </p>
          <ul className="ml-8">
            {services.list.map(({ key, text }) => {
              return (
                <li
                  key={key}
                  className="list-disc leading-relaxed md:text-lg text-justify"
                >
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="grid order-1 place-items-center">
          <Image
            alt="Mountains"
            src={services.image}
            width={300}
            height={300}
            sizes="100vw"
            className="w-full h-auto md:min-h-[600px] md:object-cover md:max-w-full"
            priority={true}
          />
        </div>
      </section>
    </>
  );
}

const services = {
  title: "Servicios",
  text: "Realizamos obras de instalación en: oficinas, residencias, edificios y centros comerciales:",
  image: "/assets/serviceBackground.jpg",
  list: [
    { key: "item-1", text: "Vidrio Crudo" },
    { key: "item-2", text: "Vidrio Templado" },
    { key: "item-3", text: "Vidrio Laminado" },
    {
      key: "item-4",
      text: "Puertas de baño en Acero Inoxidable y vidrio Templado",
    },
    { key: "item-5", text: "Vidrios de Control Solar y baja emisividad" },
    {
      key: "item-6",
      text: "Trabajos de Alucubond en Aluminio Compuesto y Policarbonato.",
    },
    { key: "item-7", text: "Pérgolas" },
    {
      key: "item-8",
      text: "Instalación con Acero Inoxidable en pasamanos, mamparas, entre otras aplicaciones",
    },
  ],
};

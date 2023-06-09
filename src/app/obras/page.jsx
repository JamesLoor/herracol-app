import SlideSection from "@/components/SlideSection";

export const metadata = {
  title: `Obras | Herracol S.A.`,
  description:
    "Explora nuestra galería de obras realizadas, desde baños y pérgolas hasta fachadas y espejos. Nos especializamos en el uso de acero inoxidable importado y vidrio en diversas aplicaciones, creando soluciones de diseño funcionales y estéticas. Descubre la calidad y variedad de nuestros proyectos.",
  openGraph: {
    title: `Obras | Herracol S.A.`,
    description:
      "Explora nuestra galería de obras realizadas, desde baños y pérgolas hasta fachadas y espejos. Nos especializamos en el uso de acero inoxidable importado y vidrio en diversas aplicaciones, creando soluciones de diseño funcionales y estéticas. Descubre la calidad y variedad de nuestros proyectos.",
    url: "https://herracol.net/obras",
  },
  alternates: {
    canonical: "https://herracol.net/obras",
  },
};

export default function Home() {
  return (
    <>
      {/* <section
        id="obras"
        className="grid auto-rows-max place-content-center gap-8 min-h-[calc(100vh-69px)] w-full px-[4%] py-10"
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
      </section> */}

      {slides.map((slide, index) => {
        return (
          <SlideSection
            key={slide.id}
            direction={index % 2 !== 0 ? "right" : "left"}
            {...slide}
          />
        );
      })}
    </>
  );
}

// const banner = {
//   title: "Obras",
//   text: [
//     "Puertas y ventanas corredizas en vidrio crudo y laminado, ventanas abatibles, puertas de baño en vidrio templado, pasamanos de acero inoxidable y vidrio templado, vidrio templado en área de piscinas, mamparas en vidrio crudo y laminado, divisiones de oficinas. Todo en perfileria de aluminio nacional e importado en series 100, 200 y tipo Europeo",
//   ],
//   projects: [
//     {
//       id: "edificio-cuarzo",
//       image: "/assets/logoHerracolRounded.png",
//       name: "Edificio Cuarzo",
//       location: "Playa Alta, Manta",
//     },
//     {
//       id: "villa-cristal-azul",
//       image: "/assets/logoHerracolRounded.png",
//       name: "Villas cristal Azul",
//       location: "Etapa 1 & 2",
//     },
//   ],
// };

const slides = [
  {
    id: "fachadas",
    title: "Fachadas",
    description:
      "Fachadas en piel de vidrio con estructura de aluminio nacional o importado y también en paneles de aluminio compuesto (Alucubound).",
    images: [
      {
        key: "fachada-1",
        image: "/assets/obras/Fachadas/fachada-1.jpg",
        alt: "Fachada 1",
      },
      {
        key: "fachada-2",
        image: "/assets/obras/Fachadas/fachada-2.jpeg",
        alt: "Fachada 2",
      },
      {
        key: "fachada-3",
        image: "/assets/obras/Fachadas/fachada-3.jpg",
        alt: "Fachada 3",
      },
      {
        key: "fachada-4",
        image: "/assets/obras/Fachadas/fachada-4.jpg",
        alt: "Fachada 4",
      },
      {
        key: "fachada-5",
        image: "/assets/obras/Fachadas/fachada-5.jpg",
        alt: "Fachada 5",
      },
      {
        key: "fachada-6",
        image: "/assets/obras/Fachadas/fachada-6.jpg",
        alt: "Fachada 6",
      },
      {
        key: "fachada-7",
        image: "/assets/obras/Fachadas/fachada-7.jpg",
        alt: "Fachada 7",
      },
      {
        key: "fachada-8",
        image: "/assets/obras/Fachadas/fachada-8.jpg",
        alt: "Fachada 8",
      },
      {
        key: "fachada-9",
        image: "/assets/obras/Fachadas/fachada-9.jpg",
        alt: "Fachada 9",
      },
    ],
  },
  {
    id: "pasamanos",
    title: "Pasamanos",
    description:
      "Pasamanos elaborados en Vidrio templado con accesorios de acero inoxidable importado",
    images: [
      {
        key: "pasamanos-1",
        image: "/assets/obras/Pasamanos/pasamanos-1.jpg",
        alt: "Pasamanos-1",
      },
      {
        key: "pasamanos-2",
        image: "/assets/obras/Pasamanos/pasamanos-2.jpg",
        alt: "Pasamanos-2",
      },
      {
        key: "pasamanos-3",
        image: "/assets/obras/Pasamanos/pasamanos-3.jpg",
        alt: "Pasamanos-3",
      },
      {
        key: "pasamanos-4",
        image: "/assets/obras/Pasamanos/pasamanos-4.jpg",
        alt: "Pasamanos-4",
      },
      {
        key: "pasamanos-5",
        image: "/assets/obras/Pasamanos/pasamanos-5.jpg",
        alt: "Pasamanos-5",
      },
      {
        key: "pasamanos-6",
        image: "/assets/obras/Pasamanos/pasamanos-6.jpg",
        alt: "Pasamanos-6",
      },
      {
        key: "pasamanos-7",
        image: "/assets/obras/Pasamanos/pasamanos-7.jpg",
        alt: "Pasamanos-7",
      },
      {
        key: "pasamanos-8",
        image: "/assets/obras/Pasamanos/pasamanos-8.jpg",
        alt: "Pasamanos-8",
      },
      {
        key: "pasamanos-9",
        image: "/assets/obras/Pasamanos/pasamanos-9.jpg",
        alt: "Pasamanos-9",
      },
      {
        key: "pasamanos-10",
        image: "/assets/obras/Pasamanos/pasamanos-10.jpg",
        alt: "Pasamanos-10",
      },
      {
        key: "pasamanos-11",
        image: "/assets/obras/Pasamanos/pasamanos-11.jpg",
        alt: "Pasamanos-11",
      },
    ],
  },
  {
    id: "puertas",
    title: "Puertas",
    description:
      "Puertas abatibles y corredizas en vidrio crudo, laminado y templado elaboradas en perfilería de aluminio nacional o importado tipo standard o europeo.",
    images: [
      {
        key: "puertas-1",
        image: "/assets/obras/Puertas/puertas-1.jpg",
        alt: "puertas-1",
      },
      {
        key: "puertas-2",
        image: "/assets/obras/Puertas/puertas-2.jpg",
        alt: "puertas-2",
      },
      {
        key: "puertas-3",
        image: "/assets/obras/Puertas/puertas-3.jpg",
        alt: "puertas-3",
      },
      {
        key: "puertas-4",
        image: "/assets/obras/Puertas/puertas-4.jpg",
        alt: "puertas-4",
      },
      {
        key: "puertas-5",
        image: "/assets/obras/Puertas/puertas-5.jpg",
        alt: "puertas-5",
      },
      {
        key: "puertas-6",
        image: "/assets/obras/Puertas/puertas-6.jpg",
        alt: "puertas-6",
      },
      {
        key: "puertas-7",
        image: "/assets/obras/Puertas/puertas-7.jpg",
        alt: "puertas-7",
      },
      {
        key: "puertas-8",
        image: "/assets/obras/Puertas/puertas-8.jpg",
        alt: "puertas-8",
      },
    ],
  },
  {
    id: "ventanas",
    title: "Ventanas",
    description:
      "Ventanas corredizas, proyectables, fijas con vidrio crudo, laminado o templado elaboradas en perfilería de aluminio nacional o importado tipo standard o europeo.",
    images: [
      {
        key: "ventanas-1",
        image: "/assets/obras/Ventanas/ventanas-1.jpg",
        alt: "ventanas-1",
      },
      {
        key: "ventanas-2",
        image: "/assets/obras/Ventanas/ventanas-2.jpg",
        alt: "ventanas-2",
      },
      {
        key: "ventanas-3",
        image: "/assets/obras/Ventanas/ventanas-3.jpg",
        alt: "ventanas-3",
      },
      {
        key: "ventanas-4",
        image: "/assets/obras/Ventanas/ventanas-4.jpg",
        alt: "ventanas-4",
      },
      {
        key: "ventanas-5",
        image: "/assets/obras/Ventanas/ventanas-5.jpg",
        alt: "ventanas-5",
      },
      {
        key: "ventanas-6",
        image: "/assets/obras/Ventanas/ventanas-6.jpg",
        alt: "ventanas-6",
      },
      {
        key: "ventanas-7",
        image: "/assets/obras/Ventanas/ventanas-7.jpg",
        alt: "ventanas-7",
      },
      {
        key: "ventanas-8",
        image: "/assets/obras/Ventanas/ventanas-8.jpg",
        alt: "ventanas-8",
      },
    ],
  },
  {
    id: "pergolas",
    title: "Pérgolas",
    description:
      "Pérgolas en vidrios laminados, templados, o especiales de control solar y baja emisividad.",
    images: [
      {
        key: "pergolas-1",
        image: "/assets/obras/Pergolas/pergolas-1.jpg",
        alt: "pergolas-1",
      },
      {
        key: "pergolas-2",
        image: "/assets/obras/Pergolas/pergolas-2.jpg",
        alt: "pergolas-2",
      },
    ],
  },
  {
    id: "banos",
    title: "Baños",
    description:
      "Puertas corredizas, abatibles y tarjetas fijas con sus respectivos accesorios importados en acero inoxidable.",
    images: [
      {
        key: "banos-1",
        image: "/assets/obras/Banos/banos-1.jpg",
        alt: "banos-1",
      },
      {
        key: "banos-2",
        image: "/assets/obras/Banos/banos-2.jpg",
        alt: "banos-2",
      },
      {
        key: "banos-3",
        image: "/assets/obras/Banos/banos-3.jpg",
        alt: "banos-3",
      },
    ],
  },
  {
    id: "espejos",
    title: "Espejos",
    description:
      "Espejos importados cortados en diferentes formas y espesores para baños, habitaciones, tiendas, hoteles, etc.",
    images: [
      {
        key: "espejos-1",
        image: "/assets/obras/Espejos/espejo-1.jpg",
        alt: "espejos-1",
      },
      {
        key: "espejos-2",
        image: "/assets/obras/Espejos/espejo-2.jpg",
        alt: "espejos-2",
      },
    ],
  },
];

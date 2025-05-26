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

export default function Works() {
  return (
    <>
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

const slides = [
  {
    id: "fachadas",
    title: "Fachadas",
    description:
      "Fachadas en piel de vidrio con estructura de aluminio nacional o importado y también en paneles de aluminio compuesto (Alucubound).",
    images: [
      {
        key: "fachada-1",
        image: "/assets/obras/Fachadas/fachada1.jpg",
        alt: "Fachada 1",
      },
      {
        key: "fachada-2",
        image: "/assets/obras/Fachadas/fachada2.jpg",
        alt: "Fachada 2",
      },
      {
        key: "fachada-3",
        image: "/assets/obras/Fachadas/fachada3.jpeg",
        alt: "Fachada 3",
      },
      {
        key: "fachada-4",
        image: "/assets/obras/Fachadas/fachada4.jpg",
        alt: "Fachada 4",
      },
      {
        key: "fachada-5",
        image: "/assets/obras/Fachadas/fachada5.jpg",
        alt: "Fachada 5",
      },
      {
        key: "fachada-6",
        image: "/assets/obras/Fachadas/fachada6.jpg",
        alt: "Fachada 6",
      },
      {
        key: "fachada-7",
        image: "/assets/obras/Fachadas/fachada7.jpg",
        alt: "Fachada 7",
      },
      {
        key: "fachada-8",
        image: "/assets/obras/Fachadas/fachada8.jpg",
        alt: "Fachada 8",
      },
      {
        key: "fachada-9",
        image: "/assets/obras/Fachadas/fachada9.jpg",
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
        image: "/assets/obras/Pasamanos/pasamanos1.jpg",
        alt: "Pasamanos-1",
      },
      {
        key: "pasamanos-2",
        image: "/assets/obras/Pasamanos/pasamanos2.jpg",
        alt: "Pasamanos-2",
      },
      {
        key: "pasamanos-3",
        image: "/assets/obras/Pasamanos/pasamanos3.jpg",
        alt: "Pasamanos-3",
      },
      {
        key: "pasamanos-4",
        image: "/assets/obras/Pasamanos/pasamanos4.jpg",
        alt: "Pasamanos-4",
      },
      {
        key: "pasamanos-5",
        image: "/assets/obras/Pasamanos/pasamanos5.jpg",
        alt: "Pasamanos-5",
      },
      {
        key: "pasamanos-6",
        image: "/assets/obras/Pasamanos/pasamanos6.jpg",
        alt: "Pasamanos-6",
      },
      {
        key: "pasamanos-7",
        image: "/assets/obras/Pasamanos/pasamanos7.jpg",
        alt: "Pasamanos-7",
      },
      {
        key: "pasamanos-8",
        image: "/assets/obras/Pasamanos/pasamanos8.jpg",
        alt: "Pasamanos-8",
      },
      {
        key: "pasamanos-9",
        image: "/assets/obras/Pasamanos/pasamanos9.jpg",
        alt: "Pasamanos-9",
      },
      {
        key: "pasamanos-10",
        image: "/assets/obras/Pasamanos/pasamanos10.jpg",
        alt: "Pasamanos-10",
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
        image: "/assets/obras/Puertas/puertas1.jpg",
        alt: "puertas-1",
      },
      {
        key: "puertas-2",
        image: "/assets/obras/Puertas/puertas2.jpg",
        alt: "puertas-2",
      },
      {
        key: "puertas-3",
        image: "/assets/obras/Puertas/puertas3.jpg",
        alt: "puertas-3",
      },
      {
        key: "puertas-4",
        image: "/assets/obras/Puertas/puertas4.jpg",
        alt: "puertas-4",
      },
      {
        key: "puertas-5",
        image: "/assets/obras/Puertas/puertas5.jpg",
        alt: "puertas-5",
      },
      {
        key: "puertas-6",
        image: "/assets/obras/Puertas/puertas6.jpg",
        alt: "puertas-6",
      },
      {
        key: "puertas-7",
        image: "/assets/obras/Puertas/puertas7.jpg",
        alt: "puertas-7",
      },
      {
        key: "puertas-8",
        image: "/assets/obras/Puertas/puertas8.jpg",
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
        image: "/assets/obras/Ventanas/ventanas1.jpg",
        alt: "ventanas-1",
      },
      {
        key: "ventanas-2",
        image: "/assets/obras/Ventanas/ventanas2.jpg",
        alt: "ventanas-2",
      },
      {
        key: "ventanas-3",
        image: "/assets/obras/Ventanas/ventanas3.jpg",
        alt: "ventanas-3",
      },
      {
        key: "ventanas-4",
        image: "/assets/obras/Ventanas/ventanas4.jpg",
        alt: "ventanas-4",
      },
      {
        key: "ventanas-5",
        image: "/assets/obras/Ventanas/ventanas5.jpg",
        alt: "ventanas-5",
      },
      {
        key: "ventanas-6",
        image: "/assets/obras/Ventanas/ventanas6.jpg",
        alt: "ventanas-6",
      },
      {
        key: "ventanas-7",
        image: "/assets/obras/Ventanas/ventanas7.jpg",
        alt: "ventanas-7",
      },
      {
        key: "ventanas-8",
        image: "/assets/obras/Ventanas/ventanas8.jpg",
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
        image: "/assets/obras/Banos/banos1.jpg",
        alt: "banos-1",
      },
      {
        key: "banos-2",
        image: "/assets/obras/Banos/banos2.jpg",
        alt: "banos-2",
      },
      {
        key: "banos-3",
        image: "/assets/obras/Banos/banos3.jpg",
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

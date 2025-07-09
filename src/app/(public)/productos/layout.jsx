import Head from "next/head";

export default function ProductsLayout({ children }) {
  return (
    <>
      <Head key="products">
        <title>Productos | Herracol S.A.</title>
        <meta
          name="description"
          content="Desde 2000, somos tu proveedor confiable en Ecuador para una amplia gama de herramientas, desde equipos para automóviles y agricultura, hasta productos de seguridad industrial y pintura. Ofrecemos también servicios de instalación de aluminio y vidrio con expertos calificados."
        />
        <meta property="og:title" content="Productos | Herracol S.A." />
        <meta
          property="og:description"
          content="Desde 2000, somos tu proveedor confiable en Ecuador para una amplia gama de herramientas, desde equipos para automóviles y agricultura, hasta productos de seguridad industrial y pintura. Ofrecemos también servicios de instalación de aluminio y vidrio con expertos calificados."
        />
        <meta property="og:url" content="https://herracol.net/productos" />
        <link rel="canonical" href="https://herracol.net/productos" />
      </Head>
      <section className="px-[4%] py-10 grid gap-3">{children}</section>
    </>
  );
}

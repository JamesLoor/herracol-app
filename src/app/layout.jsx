import "@/styles/globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Lato } from "next/font/google";
import { ProductsProvider } from "@/context/products";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700", "900"] });

export const metadata = {
  title: "Herracol S.A.",
  description:
    "Herracol S.A. empresa dedicada a la importación y distribución de marcas para el mercado ferretero agrícola e industrial.",
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "James" }, { name: "Derian" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Herracol S.A.",
    description:
      "Herracol S.A. empresa dedicada a la importación y distribución de marcas para el mercado ferretero agrícola e industrial.",
    url: "https://herracol.net",
    siteName: "Herracol.net",
    locale: "es_EC",
    type: "website",
  },
  alternates: {
    canonical: "https://herracol.net",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={lato.className}>
      <body className="!overflow-visible">
        <ProductsProvider>
          <Navigation />
          <main className="pt-[69px]">{children}</main>
          <Footer />
        </ProductsProvider>
      </body>
    </html>
  );
}

import "@/styles/globals.css";
import { Lato } from "next/font/google";
import { ProductsProvider } from "@/context/products";
import { ClerkProvider } from "@clerk/nextjs";
import { esMX } from "@clerk/localizations";

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

const localization = {
  signIn: {
    start: {
      title: "Inicia sesión en Herracol",
      subtitle: "¡Bienvenido! Inicia sesión para continuar",
    },
    password: {
      title: "Ingresa tu contraseña",
      subtitle: "Ingresa la contraseña asociada a tu cuenta",
    },
  },
};

const mergedLocalization = { ...esMX, ...localization };

export default function RootLayout({ children }) {
  return (
    <ClerkProvider localization={mergedLocalization} afterSignOutUrl="/admin">
      <ProductsProvider>
        <html lang="es" className={lato.className}>
          <body className="overflow-visible!">{children}</body>
        </html>
      </ProductsProvider>
    </ClerkProvider>
  );
}

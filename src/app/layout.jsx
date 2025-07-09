import { ProductsProvider } from "@/context/products";
import { productService } from "@/sevices/product";
import { esMX } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import { Lato } from "next/font/google";
import "./globals.css";

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

export default async function RootLayout({ children }) {
  const products = await productService.getProducts();
  const newProducts = products.map((product) => {
    const newCategories = product.category.map((category) => {
      return {
        label: category.toLowerCase().replaceAll("-", " "),
        slug: category.toLowerCase(),
      };
    });

    return {
      ...product,
      category: newCategories,
    };
  });
  return (
    <ClerkProvider localization={mergedLocalization} afterSignOutUrl="/admin">
      <ProductsProvider initialProducts={newProducts}>
        <html lang="es" className={lato.className}>
          <body className="overflow-visible!">{children}</body>
        </html>
      </ProductsProvider>
    </ClerkProvider>
  );
}

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function PublicLayout({ children }) {
  return (
    <>
      <Navigation />
      <main className="pt-[69px]">{children}</main>
      <Footer />
    </>
  );
}

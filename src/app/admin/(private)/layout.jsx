"use client";

import AdminHeader from "@/components/AdminHeader";
import AdminSidebar from "@/components/AdminSidebar";
import { useToggle } from "@/hooks/useToggle";
import { useEffect } from "react";

export default function PrivateLayout({ children }) {
  const [clicked, handleClicked] = useToggle();

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      handleClicked();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AdminSidebar isOpen={clicked} onToggledSidebar={handleClicked} />
      <div
        className={`${
          clicked ? "lg:pl-64" : ""
        } w-full p-2 md:p-4 transition-all duration-300`}
      >
        <section className="shadow-md rounded-md bg-white">
          <AdminHeader handleClicked={handleClicked} clicked={clicked} />
          <div className="p-3 md:p-6 bg-white min-h-[calc(100dvh-68px)] md:min-h-[calc(100dvh-107px)]">
            {children}
          </div>
        </section>
      </div>
    </>
  );
}

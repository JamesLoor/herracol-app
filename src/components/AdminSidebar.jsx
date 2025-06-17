import {
  Bell,
  ChartColumnIncreasing,
  ClipboardList,
  House,
  Package,
  ShoppingCart,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import AdminSidebarSection from "./AdminSidebarSection";

export default function AdminSidebar({ isOpen, onToggledSidebar }) {
  return (
    <>
      {isOpen && (
        <div
          onClick={onToggledSidebar}
          className="fixed top-0 left-0 w-full h-full z-50 bg-black/50 lg:hidden"
        />
      )}

      <nav
        className={`${
          isOpen ? "left-0" : "-left-full"
        } flex flex-col gap-6 fixed top-0 bottom-0 z-50 w-64 h-[100dvh] p-6 bg-gray-50 lg:bg-transparent transition-all duration-300`}
      >
        {isOpen && (
          <button
            onClick={onToggledSidebar}
            className="absolute top-2 right-2 lg:hidden flex items-center justify-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer transition-all duration-200"
          >
            <X width={22} height={22} />
          </button>
        )}
        <button className="flex items-center gap-2 p-2">
          <figure>
            <Image
              src="/assets/footer-logo.png"
              alt="logo"
              width={32}
              height={32}
            />
          </figure>
          <span className="flex flex-col text-sm font-semibold">
            AdminPanel
            <span className="text-xs font-medium text-gray-500">
              E-commerce
            </span>
          </span>
        </button>

        <div className="flex flex-col gap-8">
          <AdminSidebarSection title="Principal" links={mainLinks} />
          <AdminSidebarSection title="Gestion" links={managementLinks} />
        </div>
      </nav>
    </>
  );
}

const mainLinks = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: <House size={16} />,
    isDisabled: false,
  },
  {
    key: "productos",
    label: "Productos",
    href: "/admin/productos",
    icon: <Package size={16} />,
    isDisabled: false,
  },
  {
    key: "pedidos",
    label: "Pedidos",
    href: "/admin/pedidos",
    icon: <ShoppingCart size={16} />,
    isDisabled: true,
  },
  {
    key: "clientes",
    label: "Clientes",
    href: "/admin/clientes",
    icon: <Users size={16} />,
    isDisabled: true,
  },
  {
    key: "reportes",
    label: "Reportes",
    href: "/admin/reportes",
    icon: <ChartColumnIncreasing size={16} />,
    isDisabled: true,
  },
];

const managementLinks = [
  {
    key: "inventario",
    label: "Inventario",
    href: "/admin/inventario",
    icon: <ClipboardList size={16} />,
    isDisabled: true,
  },
  {
    key: "notificaciones",
    label: "Notificaciones",
    href: "/admin/notificaciones",
    icon: <Bell size={16} />,
    isDisabled: true,
  },
];

import AdminSidebarItem from "./AdminSidebarItem";

export default function AdminSidebarSection({ title, links }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-gray-500 text-xs px-2">{title}</span>
      <ul className="flex flex-col gap-0.5">
        {links.map(({ key, ...link }) => (
          <AdminSidebarItem key={key} {...link} />
        ))}
      </ul>
    </div>
  );
}

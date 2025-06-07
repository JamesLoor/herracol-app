import Link from "next/link";

export default function ButtonLink({ route, children }) {
  return (
    <Link
      className="text-lg font-bold w-max px-8 py-3 bg-accent text-primary-light rounded-3xl"
      href={route}
    >
      {children}
    </Link>
  );
}

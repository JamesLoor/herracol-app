"use client";

export default function Button({
  type = "button",
  children,
  onClick,
  className,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} text-lg font-bold w-max px-12 py-3 bg-accent text-primaryLight rounded-3xl`}
    >
      {children}
    </button>
  );
}

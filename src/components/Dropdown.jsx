"use client";

export default function Dropdown({
  label: Label,
  children,
  isOpen = false,
  toggleDropdown = () => {},
}) {
  return (
    <div className="relative">
      <button onClick={toggleDropdown}>
        <Label />
      </button>

      <ul
        className={`${
          isOpen ? "" : "hidden"
        } bg-primary md:absolute md:pt-2 md:py-2 w-full`}
      >
        {children}
      </ul>
    </div>
  );
}

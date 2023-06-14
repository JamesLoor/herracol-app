"use client";

export default function DropdownItem({ children, className, ...rest }) {
  return (
    <li className={`${className} text-lg md:text-left py-2 px-2`} {...rest}>
      {children}
    </li>
  );
}

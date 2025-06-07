"use client";

export default function Input({ label, name, onChange, type = "text" }) {
  return (
    <label className="grid gap-1">
      {label}
      <input
        className="w-full h-12 px-5 rounded-[20px] border-solid border-secondary-light border"
        type={type}
        name={name}
        onChange={onChange}
      />
    </label>
  );
}

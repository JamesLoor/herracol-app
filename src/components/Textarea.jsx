"use client";

export default function Textarea({
  label,
  name,
  onChange,
  rows = 4,
  cols = null,
}) {
  return (
    <label className="grid gap-1">
      {label}
      <textarea
        cols={cols}
        rows={rows}
        className="w-full px-5 py-3 rounded-[20px] border-solid border-secondary-light border resize-none overflow-hidden"
        name={name}
        onChange={onChange}
      />
    </label>
  );
}

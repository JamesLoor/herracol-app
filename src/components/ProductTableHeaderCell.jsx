export default function ProductTableHeader({ label, isLast }) {
  return (
    <th
      className={`px-6 py-3 text-xs font-semibold text-gray-500 tracking-wider ${
        isLast ? "text-center" : "text-left"
      }`}
    >
      {label}
    </th>
  );
}

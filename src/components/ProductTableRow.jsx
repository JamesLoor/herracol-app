import { SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";

export default function ProductTableRow({
  product,
  onToggledModal,
  onToggledDeleteModal,
}) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={40}
            height={40}
            className="w-8 h-8 object-cover rounded"
          />
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{product.name}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{product.brand}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex flex-wrap gap-1">
          {product.category.map((category, index) => (
            <span key={index} variant="secondary" className="text-xs">
              {category}
            </span>
          ))}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{product.code}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={onToggledModal}
            className="text-blue-600 hover:text-blue-800"
          >
            <SquarePen width={18} height={18} />
          </button>
          <button
            onClick={onToggledDeleteModal}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 width={18} height={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}

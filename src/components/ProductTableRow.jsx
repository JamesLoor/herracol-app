import { Button, Chip } from "@heroui/react";
import { SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";

export default function ProductTableRow({
  product,
  onToggledUpdateModal,
  onToggledDeleteModal,
}) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="w-10 h-10 p-1 border border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-full object-contain"
          />
        </div>
      </td>

      <td className="px-6 py-4 max-w-[300px]">
        <div className="text-sm font-medium text-gray-900 uppercase">
          {product.name}
        </div>
      </td>

      <td className="px-6 py-4">
        <div className="text-sm text-gray-900 uppercase">{product.brand}</div>
      </td>

      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-1">
          {product.category.map(({ label, slug }) => (
            <Chip
              key={slug}
              variant="faded"
              color="primary"
              className="text-xs capitalize"
            >
              {label}
            </Chip>
          ))}
        </div>
      </td>

      <td className="px-6 py-4">
        {product.sku ? (
          <div className="text-sm text-gray-900">{product.sku}</div>
        ) : (
          <div className="text-sm text-gray-900">
            {product.infoSku.map(({ sku, information }) => (
              <div key={sku}>
                {sku} - {information}
              </div>
            ))}
          </div>
        )}
      </td>

      <td className="px-6 py-4">
        <div className="text-sm text-gray-900 flex items-center gap-1">
          {product.isActive ? (
            <>
              <span className="inline-block w-2 h-2 rounded-full mr-2 bg-success" />
              <span className="text-xs text-success">Activo</span>
            </>
          ) : (
            <>
              <span className="inline-block w-2 h-2 rounded-full mr-2 bg-gray-500" />
              <span className="text-xs text-gray-500">Inactivo</span>
            </>
          )}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center justify-center space-x-2">
          <Button
            isIconOnly
            aria-label="Like"
            variant="light"
            color="default"
            className="text-blue-600"
            onPress={() => onToggledUpdateModal(product)}
          >
            <SquarePen width={18} height={18} />
          </Button>

          <Button
            isIconOnly
            aria-label="Like"
            variant="light"
            color="danger"
            onPress={() => onToggledDeleteModal(product)}
          >
            <Trash2 width={18} height={18} />
          </Button>
        </div>
      </td>
    </tr>
  );
}

import { useProducts } from "@/context/products";

export default function Search() {
  const { searchValue, setSearchValue } = useProducts();

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div>
      <input
        onChange={handleChange}
        value={searchValue}
        className="px-5 py-2 text-black w-full border-sm border-secondary-light rounded-3xl outline-1 outline-secondary-light"
        type="text"
        placeholder="Buscar..."
      />
    </div>
  );
}

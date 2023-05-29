import { ProductsContext } from "@/context/products";
import { useContext } from "react";

export default function Search() {
  const { searchValue, setSearchValue } = useContext(ProductsContext);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div>
      <input
        onChange={handleChange}
        value={searchValue}
        className="px-5 py-2 text-black w-full border border-secundaryLight rounded-3xl outline-1 outline-secundaryLight"
        type="text"
        placeholder="Buscar..."
      />
    </div>
  );
}

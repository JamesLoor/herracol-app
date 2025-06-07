import ProductList from "@/components/ProductList";
import { use } from "react";

export default function Page(props) {
  const params = use(props.params);

  return <ProductList category={params.category} />;
}

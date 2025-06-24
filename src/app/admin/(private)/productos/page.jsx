import ProductManagement from "@/components/ProductManagement";
import { auth } from "@clerk/nextjs/server";

export default async function AdminProducts() {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();
  return <ProductManagement />;
}

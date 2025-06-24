import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const user = await currentUser();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <UserButton showName />
      <h1>Bienvenido {user?.emailAddresses[0].emailAddress}</h1>
    </div>
  );
}

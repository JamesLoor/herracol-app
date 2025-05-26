import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const { userId, redirectToSignIn } = await auth();
  const user = await currentUser();

  if (!userId) return redirectToSignIn();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <UserButton showName />
      <h1>Bienvenido {user?.emailAddresses[0].emailAddress}</h1>
    </div>
  );
}

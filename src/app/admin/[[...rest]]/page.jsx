import { SignIn } from "@clerk/nextjs";

export default function Admin() {
  return (
    <section className="flex justify-center items-center h-screen">
      <SignIn
        appearance={{
          elements: {
            footerAction: "hidden",
            formButtonPrimary: "bg-primary",
            logoImage: "w-56 h-auto",
          },
          layout: {
            logoImageUrl: "/assets/logoHerracolSA.png",
          },
        }}
      />
    </section>
  );
}

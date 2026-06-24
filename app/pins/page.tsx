import Title from "@/composants/ui/Title";
import { createClient } from "@/prismicio";
import PinsList from "./_components/PinsList";

export const metadata = {
  title: "Page Pins",
  description: "Description Pins",
};

export default async function PinsPage() {
  const client = createClient();
  const websites = await client.getAllByType("website");

  return (
    <main className="px-6 py-12">
      <Title tag="h1" topLine="Vos sites">
        Épinglés
      </Title>
      <PinsList websites={websites} />
    </main>
  );
}

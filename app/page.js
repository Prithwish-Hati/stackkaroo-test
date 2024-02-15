import Card from "@/components/Card";
import { designCard, codeCard, launchCard } from "@/constants";

export default function Home() {
  return (
    <main className="h-[100vh] flex justify-center items-center flex-col bg-violet-900">
      <section className="w-[100vw] flex items-center justify-around">
        <Card
          heading={designCard.name}
          icon={designCard.iconUrl}
          content={designCard.text}
        />

        <Card
          heading={codeCard.name}
          icon={codeCard.iconUrl}
          content={codeCard.text}
        />

        <Card
          heading={launchCard.name}
          icon={launchCard.iconUrl}
          content={launchCard.text}
        />
      </section>
    </main>
  );
}

import data from "@/src/data/pages/spektakle/zapowiedzi.json";
import PageHero from "@/src/components/layout/PageHero";
import ZapowiedziSection from "@/src/components/spektakle/ZapowiedziSection";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blocks = data.blocks as any;

export default function SpektakleZapowiedziPage() {
  return (
    <>
      <PageHero title={data.title} />
      <ZapowiedziSection blocks={blocks} />
    </>
  );
}

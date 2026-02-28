import data from "@/src/data/pages/sapina.json";
import PageHero from "@/src/components/layout/PageHero";
import HistoriaSection from "@/src/components/sapina/HistoriaSection";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blocks = data.blocks as any;

export default function SapinaPage() {
  return (
    <>
      <PageHero title={data.title} />
      <HistoriaSection blocks={blocks} />
    </>
  );
}

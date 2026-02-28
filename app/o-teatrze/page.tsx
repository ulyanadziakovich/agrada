import data from "@/src/data/pages/o-teatrze.json";
import PageHero from "@/src/components/layout/PageHero";
import HistoriaAgradySection from "@/src/components/o-teatrze/HistoriaAgradySection";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blocks = data.blocks as any;

export default function OTeatrzePage() {
  return (
    <>
      <PageHero title={data.title} />
      <HistoriaAgradySection blocks={blocks} />
    </>
  );
}

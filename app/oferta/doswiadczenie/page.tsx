import data from "@/src/data/pages/oferta/doswiadczenie.json";
import PageHero from "@/src/components/layout/PageHero";
import DoswiadczenieSection from "@/src/components/oferta/DoswiadczenieSection";

export default function OfertaDoswiadczeniePage() {
  return (
    <>
      <PageHero title={data.title} />
      <DoswiadczenieSection workshops={data.workshops} />
    </>
  );
}

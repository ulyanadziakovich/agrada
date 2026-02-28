import data from "@/src/data/pages/oferta/ewaluacje.json";
import PageHero from "@/src/components/layout/PageHero";
import EwaluacjeSection from "@/src/components/oferta/EwaluacjeSection";

export default function OfertaEwaluacjePage() {
  return (
    <>
      <PageHero title={data.title} />
      <EwaluacjeSection sections={data.sections} />
    </>
  );
}

import data from "@/src/data/pages/oferta/ewaluacje.json";
import PageHero from "@/src/components/layout/PageHero";
import ContentPage from "@/src/components/layout/ContentPage";

export default function OfertaEwaluacjePage() {
  return (
    <>
      <PageHero title={data.title} />
      <ContentPage paragraphs={data.paragraphs} />
    </>
  );
}

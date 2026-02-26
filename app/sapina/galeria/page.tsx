import data from "@/src/data/pages/sapina/galeria.json";
import PageHero from "@/src/components/layout/PageHero";
import ContentPage from "@/src/components/layout/ContentPage";

export default function SapinaGaleriaPage() {
  return (
    <>
      <PageHero title={data.title} />
      <ContentPage paragraphs={data.paragraphs} showGalleryPlaceholder />
    </>
  );
}

import data from "@/src/data/pages/galeria/inne.json";
import PageHero from "@/src/components/layout/PageHero";
import ContentPage from "@/src/components/layout/ContentPage";

export default function GaleriaInnePage() {
  return (
    <>
      <PageHero title={data.title} />
      <ContentPage paragraphs={data.paragraphs} showGalleryPlaceholder />
    </>
  );
}

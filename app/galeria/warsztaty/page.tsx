import data from "@/src/data/pages/galeria/warsztaty.json";
import PageHero from "@/src/components/layout/PageHero";
import ContentPage from "@/src/components/layout/ContentPage";

export default function GaleriaWarsztatyPage() {
  return (
    <>
      <PageHero title={data.title} />
      <ContentPage paragraphs={data.paragraphs} showGalleryPlaceholder />
    </>
  );
}

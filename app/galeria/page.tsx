import PageHero from "@/src/components/layout/PageHero";
import ContentPage from "@/src/components/layout/ContentPage";

export default function GaleriaPage() {
  return (
    <>
      <PageHero title="Galeria" />
      <ContentPage paragraphs={[]} showGalleryPlaceholder />
    </>
  );
}

import data from "@/src/data/pages/spektakle/zapowiedzi.json";
import PageHero from "@/src/components/layout/PageHero";
import ContentPage from "@/src/components/layout/ContentPage";

export default function SpektakleZapowiedziPage() {
  return (
    <>
      <PageHero title={data.title} />
      <ContentPage paragraphs={data.paragraphs} />
    </>
  );
}

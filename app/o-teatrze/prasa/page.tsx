import data from "@/src/data/pages/o-teatrze/prasa.json";
import PageHero from "@/src/components/layout/PageHero";
import ContentPage from "@/src/components/layout/ContentPage";

export default function OTeatrzePrasaPage() {
  return (
    <>
      <PageHero title={data.title} />
      <ContentPage paragraphs={data.paragraphs} />
    </>
  );
}

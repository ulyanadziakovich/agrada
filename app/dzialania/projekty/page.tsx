import data from "@/src/data/pages/dzialania/projekty.json";
import PageHero from "@/src/components/layout/PageHero";
import ContentPage from "@/src/components/layout/ContentPage";

export default function DzialaniaProjektyPage() {
  return (
    <>
      <PageHero title={data.title} />
      <ContentPage paragraphs={data.paragraphs} />
    </>
  );
}

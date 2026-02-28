import data from "@/src/data/pages/osoby.json";
import PageHero from "@/src/components/layout/PageHero";
import ArtysciSection from "@/src/components/osoby/ArtysciSection";

export default function OsobyPage() {
  return (
    <>
      <PageHero title={data.title} />
      <ArtysciSection artists={data.artists} />
    </>
  );
}

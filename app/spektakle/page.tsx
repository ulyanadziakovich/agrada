import data from "@/src/data/pages/spektakle.json";
import PageHero from "@/src/components/layout/PageHero";
import RepertuarSection from "@/src/components/spektakle/RepertuarSection";

export default function SpektaklePage() {
  return (
    <>
      <PageHero title={data.title} />
      <RepertuarSection shows={data.shows} />
    </>
  );
}

import data from "@/src/data/pages/sapina/spektakle.json";
import PageHero from "@/src/components/layout/PageHero";
import SpektakleSection from "@/src/components/sapina/SpektakleSection";

export default function SapinaSpektaklePage() {
  return (
    <>
      <PageHero title={data.title} />
      <SpektakleSection shows={data.shows} />
    </>
  );
}

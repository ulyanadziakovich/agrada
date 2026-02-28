import data from "@/src/data/pages/osoby/przyjaciele.json";
import PageHero from "@/src/components/layout/PageHero";
import PrzyjacieleSectiont from "@/src/components/osoby/PrzyjacieleSectiont";

export default function OsobyPrzyjacielePage() {
  return (
    <>
      <PageHero title={data.title} />
      <PrzyjacieleSectiont friends={data.friends} />
    </>
  );
}

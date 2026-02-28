import data from "@/src/data/pages/kontakt.json";
import PageHero from "@/src/components/layout/PageHero";
import KontaktSection from "@/src/components/kontakt/KontaktSection";

export default function KontaktPage() {
  return (
    <>
      <PageHero title={data.title} />
      <KontaktSection emails={data.emails} phone={data.phone} />
    </>
  );
}

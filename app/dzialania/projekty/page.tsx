import data from "@/src/data/pages/dzialania/projekty.json";
import PageHero from "@/src/components/layout/PageHero";
import ProjektySection from "@/src/components/dzialania/ProjektySection";

export default function DzialaniaProjektyPage() {
  return (
    <>
      <PageHero title={data.title} />
      <ProjektySection
        subtitle={data.subtitle}
        statusNote={data.statusNote}
        intro={data.intro}
        formatNote={data.formatNote}
        locations={data.locations}
      />
    </>
  );
}

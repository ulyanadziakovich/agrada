import data from "@/src/data/pages/oferta.json";
import PageHero from "@/src/components/layout/PageHero";
import ProgramSection from "@/src/components/oferta/ProgramSection";

export default function OfertaPage() {
  return (
    <>
      <PageHero title={data.title} />
      <ProgramSection
        tagline={data.tagline}
        intro={data.intro}
        format={data.format}
        formatNote={data.formatNote}
        audiences={data.audiences}
        programItems={data.programItems}
        artTherapy={data.artTherapy}
        contact={data.contact}
      />
    </>
  );
}

import data from "@/src/data/pages/spektakle/aktualnie-gramy.json";
import PageHero from "@/src/components/layout/PageHero";
import AktualnieGramySection from "@/src/components/spektakle/AktualnieGramySection";

export default function SpektakleAktualnieGramyPage() {
  return (
    <>
      <PageHero title={data.title} />
      <AktualnieGramySection
        upcomingShows={data.upcomingShows}
        currentRepertoire={data.currentRepertoire}
        message={data.message}
        contact={data.contact}
      />
    </>
  );
}

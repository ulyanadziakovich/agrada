import data from "@/src/data/pages/spektakle/gralismy.json";
import PageHero from "@/src/components/layout/PageHero";
import GralismySection from "@/src/components/spektakle/GralismySection";

export default function SpektakleGralismyPage() {
  return (
    <>
      <PageHero title={data.title} />
      <GralismySection groups={data.groups} />
    </>
  );
}

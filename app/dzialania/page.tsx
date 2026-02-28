import data from "@/src/data/pages/dzialania.json";
import PageHero from "@/src/components/layout/PageHero";
import AkcjeSection from "@/src/components/dzialania/AkcjeSection";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blocks = data.blocks as any;

export default function DzialaniaPage() {
  return (
    <>
      <PageHero title={data.title} />
      <AkcjeSection blocks={blocks} />
    </>
  );
}

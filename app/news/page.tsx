import data from "@/src/data/pages/news.json";
import PageHero from "@/src/components/layout/PageHero";
import NewsSection from "@/src/components/news/NewsSection";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const items = data.items as any;

export default function NewsPage() {
  return (
    <>
      <PageHero title={data.title} />
      <NewsSection items={items} />
    </>
  );
}

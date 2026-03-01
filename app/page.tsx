import MobileNews from "@/src/components/home/MobileNews";
import newsData from "@/src/data/pages/news.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const newsItems = newsData.items as any;

export default function Home() {
  return (
    <main>
      <MobileNews items={newsItems} />
    </main>
  );
}

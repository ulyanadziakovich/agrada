import HeroSlider from "@/src/components/home/HeroSlider";
import MobileNews from "@/src/components/home/MobileNews";
import homeData from "@/src/data/pages/home.json";
import newsData from "@/src/data/pages/news.json";

const slides = homeData.hero.slides.map((s) => ({
  ...s,
  layout: s.layout as "image" | "content",
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const newsItems = newsData.items as any;

export default function Home() {
  return (
    <main>
      <HeroSlider
        slides={slides}
        autoplay={homeData.hero.autoplay}
        interval={homeData.hero.interval}
      />
      <MobileNews items={newsItems} />
    </main>
  );
}

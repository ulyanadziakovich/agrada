import HeroSlider from "@/src/components/home/HeroSlider";
import homeData from "@/src/data/pages/home.json";

const slides = homeData.hero.slides.map((s) => ({
  ...s,
  layout: s.layout as "image" | "content",
}));

export default function Home() {
  return (
    <main>
      <HeroSlider
        slides={slides}
        autoplay={homeData.hero.autoplay}
        interval={homeData.hero.interval}
      />
    </main>
  );
}

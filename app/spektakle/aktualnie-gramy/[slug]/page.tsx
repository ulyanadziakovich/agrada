import shows from "@/src/data/pages/spektakle/shows.json";
import PageHero from "@/src/components/layout/PageHero";
import ContentPage from "@/src/components/layout/ContentPage";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return shows.map((show) => ({ slug: show.slug }));
}

export default function ShowPage({ params }: { params: { slug: string } }) {
  const show = shows.find((s) => s.slug === params.slug);
  if (!show) notFound();

  return (
    <>
      <PageHero title={show.title} subtitle={`Premiera: ${show.premiere}`} />
      <ContentPage paragraphs={show.paragraphs} />
    </>
  );
}

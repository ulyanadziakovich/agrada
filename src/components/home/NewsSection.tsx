import Link from "next/link";

interface NewsPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  paragraphs: string[];
}

interface NewsSectionProps {
  posts: NewsPost[];
}

export default function NewsSection({ posts }: NewsSectionProps) {
  return (
    <section className="bg-gradient-to-b from-background to-surface/40 py-12 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-wide">
              Aktualności
            </h2>
            <div className="mt-2 w-[40px] h-[2px] bg-accent-gold" />
          </div>
          <Link
            href="/news"
            className="text-xs tracking-widest uppercase text-secondary hover:text-foreground transition-colors"
          >
            Wszystkie
          </Link>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group border border-border/50 bg-surface/30 hover:bg-surface/60 transition-colors duration-200"
            >
              <div className="p-5 md:p-6">
                <time className="text-[10px] md:text-xs tracking-widest text-accent-gold uppercase">
                  {post.date}
                </time>
                <h3 className="mt-2 text-base md:text-lg font-bold text-foreground leading-snug line-clamp-2">
                  {post.title}
                </h3>
                {post.paragraphs.length > 0 && (
                  <p className="mt-3 text-xs md:text-sm text-secondary leading-relaxed line-clamp-3">
                    {post.paragraphs[0]}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

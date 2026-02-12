import HomeHero from "@/components/HomeHero";
import ArtworkCategoryCard from "@/components/ArtworkCategoryCard";
import { artworkCategories } from "@/data/artworks";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="section-padding">
        <div className="container-base border-t border-slate-100 pt-16">
          <header className="mb-12 text-center">
            <p className="text-[11px] font-grotesk tracking-[0.28em] uppercase text-slate-500">
              Categorias
            </p>
            <h2 className="mt-2 font-display text-2xl text-slate-900">
              ARTWORKS
            </h2>
          </header>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {artworkCategories.map((category) => (
              <ArtworkCategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}



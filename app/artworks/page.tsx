import ArtworkCategoryCard from "@/components/ArtworkCategoryCard";
import { artworkCategories } from "@/data/artworks";

export default function ArtworksPage() {
  return (
    <section className="section-padding">
      <div className="container-base">
        <header className="mb-10 space-y-3">
          <p className="text-[11px] font-grotesk tracking-[0.28em] uppercase text-slate-500">
            Obras
          </p>
          <h1 className="font-display text-3xl sm:text-4xl text-slate-900">
            ARTWORKS
          </h1>
          <p className="max-w-xl text-sm text-slate-600">
            Séries e categorias de trabalho que atravessam azulejaria contemporânea,
            desenho, pintura, fotografia, objetos e instalações.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artworkCategories.map((category) => (
            <ArtworkCategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}



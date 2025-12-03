import { notFound } from "next/navigation";
import { artworkCategories } from "@/data/artworks";
import ArtworkCategoryDetailClient from "./ArtworkCategoryDetailClient";

export default function ArtworkCategoryDetailPage(props: any) {
  const params = props.params as { slug: string };
  const category = artworkCategories.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  return <ArtworkCategoryDetailClient category={category} />;
}




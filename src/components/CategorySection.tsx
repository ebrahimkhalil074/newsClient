
"use client";
import Link from "next/link";

interface CategorySectionProps {
  title: string;
  items: { id: number; videoUrl: string; title: string }[];
  categorySlug: string;
}
const CategorySection = ({ title, items, categorySlug }: CategorySectionProps) => (
  <div className="mb-8">
    <div className="flex justify-center items-center">
    <h2 className="text-2xl font-bold text-white m-3 bg-red-500 p-4 rounded-md ">{title}</h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item.id} className="aspect-video">
          <iframe
            allowFullScreen
            className="w-full h-full rounded"
            src={item.videoUrl}
            title={item.title}
          />
        </div>
      ))}
    </div>
    <div className="mt-3 text-right">
      <Link
        className="text-red-600 font-medium hover:underline"
        href={`video/${categorySlug}`}
      >
        See All &rarr;
      </Link>
    </div>
  </div>
);

export default CategorySection;

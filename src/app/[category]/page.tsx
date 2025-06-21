import Link from "next/link";
import { getCategorisedArticles, normalizeCategory } from "@/lib/articles";
import { notFound } from "next/navigation";

interface PageProps {
  params: { category: string }; // не має бути Promise
}

const ArticlesCategory = async ({ params }: PageProps) => {
  const { category } = params;

  const articles = await getCategorisedArticles();

  const normalizedCategory = normalizeCategory(category);

  const categoryArticles = articles[normalizedCategory];

  if (!categoryArticles) return notFound();

  return (
    <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
      <header className="font-heading font-light text-6xl text-neutral-900 text-center">
        <h1>minimal blog</h1>
      </header>
      <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
        {categoryArticles.map((article, id) => (
          <Link
            href={`/${article.id}`}
            key={id}
            className="text-neutral-900 hover:text-amber-700 transition duration-150"
          >
            {article.title}
          </Link>
        ))}
      </section>
    </section>
  );
};

export default ArticlesCategory;

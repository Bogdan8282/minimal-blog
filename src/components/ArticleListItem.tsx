import Link from "next/link";
import type { ArticleItem } from "@/types";
import { normalizeCategory } from "@/lib/articles";

type Props = {
  category: string;
  articles: ArticleItem[];
};

const ArticleItemList = ({ category, articles }: Props) => {
  const categoryNormal = normalizeCategory(category);

  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-heading text-4xl">{categoryNormal}</h2>
      <div className="flex flex-col gap-2.5 font-main text-lg">
        {articles.map((article, id) => (
          <Link
            href={`/${category}/${article.id}`}
            key={id}
            className="text-neutral-900 hover:text-amber-700 transition duration-150"
          >
            {article.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleItemList;

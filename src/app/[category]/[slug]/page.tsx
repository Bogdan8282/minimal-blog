import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { getArticleData } from "@/lib/articles";

type PageProps = {
  params: Promise<{ slug: string }>;
}

const Article = async ({ params }: PageProps) => {
  const { slug } = await params;
  const articleData = await getArticleData(slug);

  return (
    <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
      <div className="flex justify-between font-main">
        <Link href={"/"} className="flex flex-row gap-1 place-items-center">
          <ArrowLeftIcon width={20} />
          <p>back to home</p>
        </Link>
        <p>{articleData.date.toString()}</p>
      </div>
      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: articleData.contentHTML }}
      />
    </section>
  );
};

export default Article;

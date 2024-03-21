import { MakrdownComponent } from "@/components/MarkdownComponent";
import { posts } from "@site/content";
import { notFound } from "next/navigation";
import React from "react";

interface PageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function Page({ params }: PageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="container py-6 dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mb-2">{post.title}</h1>
      {post.description ? (
        <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
      ) : null}
      <hr />
      <MakrdownComponent code={post.body} />
    </article>
  );
}

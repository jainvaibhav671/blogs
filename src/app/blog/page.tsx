import React from "react";

import { posts } from "../../../.velite";
import PostItem from "@/components/PostItem";
import { sortPosts } from "@/lib/utils";

export default async function BlogPage() {
  const displayPosts = sortPosts(posts.filter((post) => post.published));

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Blogs
          </h1>
          <p className="text-xl text-muted-foreground">
            My ramblings on all things web dev
          </p>
        </div>
      </div>
      <hr className="mt-8" />
      {displayPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {displayPosts.map((post) => (
            <li key={post.slug}>
              <PostItem {...post} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Nothing to see here yet</p>
      )}
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import {
  getPostsStatus,
  getPostsError,
  selectPostIds,
} from "../features/posts/postsSlice";
import PostsExcerpt from "../components/PostsExcerpt";

function Home() {
  const orderedPostIds = useSelector(selectPostIds);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postsStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postsStatus === "succeeded") {
    content = orderedPostIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <>
      <section className="w-full min-w-screen flex flex-col gap-8 items-center py-16">
        {content}
      </section>
    </>
  );
}

export default Home;

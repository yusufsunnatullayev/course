import React from "react";
import PostAuthor from "../components/PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../features/posts/postsSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SinglePostPage() {
  // retrieve postId
  const { id } = useParams();
  const allPosts = useSelector(selectAllPosts);
  const post = allPosts.find((item) => item.id === Number(id));

  if (!post) {
    return (
      <section>
        <h2>Post not found! </h2>
      </section>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col items-center py-20">
      <article className="flex flex-col gap-3 p-4 rounded-md bg-slate-800 w-1/2">
        <h3 className="text-2xl font-semibold">{post.title}</h3>
        <p>{post.body}</p>
        <div className="flex items-center justify-start gap-2">
          <Link
            className="underline hover:text-slate-400 duration-200"
            to={`/post/edit/${post.id}`}
          >
            Edit Post
          </Link>
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </div>
        <ReactionButtons post={post} />
      </article>
    </div>
  );
}

export default SinglePostPage;

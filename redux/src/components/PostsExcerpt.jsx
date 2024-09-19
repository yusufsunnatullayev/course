import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "../features/posts/postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

const PostsExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));

  if (!post) {
    return null; // Handle case where post is not found
  }

  return (
    <article className="flex flex-col gap-3 p-4 rounded-md bg-slate-800 w-1/2">
      <h3 className="text-2xl font-semibold">{post.title}</h3>
      <p>{post.body.substring(0, 75)}...</p>
      <div className="flex items-center justify-start gap-2">
        <Link
          className="underline hover:text-slate-400 duration-200"
          to={`post/${post.id}`}
        >
          View Post
        </Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </div>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;

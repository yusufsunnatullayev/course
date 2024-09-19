import React from "react";
import { useSelector } from "react-redux";
import { selectedUserById } from "../features/users/usersSlice";
import { selectPostsByUser } from "../features/posts/postsSlice";
import { Link, useParams } from "react-router-dom";

function UserPage() {
  const { userId } = useParams();
  const user = useSelector((state) => selectedUserById(state, Number(userId)));

  const postsForUsers = useSelector((state) =>
    selectPostsByUser(state, Number(userId))
  );

  const postTitles = postsForUsers.map((post) => (
    <li key={post.id} className="p-2 border border-white rounded-md w-full">
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section className="w-full h-screen flex flex-col gap-8 items-center py-20">
      <h2 className="font-semibold text-4xl">{user?.name}</h2>
      <ol className="flex flex-col items-start gap-3">{postTitles}</ol>
    </section>
  );
}

export default UserPage;

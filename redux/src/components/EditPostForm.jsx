import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updatePost,
  selectAllPosts,
  deletePost,
} from "../features/posts/postsSlice";
import { useParams, useNavigate } from "react-router-dom";
import { selectAllUsers } from "../features/users/usersSlice";

function EditPostForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const allPosts = useSelector(selectAllPosts);
  const post = allPosts.find((post) => post.id === Number(id));
  //   const post = useSelector((state) => selectedPostById(state, Number(id)));
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);
  const [requestStatus, setRequestStatus] = useState("idle");

  const dispatch = useDispatch();

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  const canSave =
    [title, content, userId].every(Boolean) && requestStatus === "idle";

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setRequestStatus("pending");
        dispatch(
          updatePost({
            id: post.id,
            title,
            body: content,
            userId,
            reactions: post.reactions,
          })
        ).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
        navigate(`/post/${id}`);
      } catch (error) {
        console.log("Failed to save the post", error);
      } finally {
        setRequestStatus("idle");
      }
    }
  };

  const usersOptions = users.map((user) => (
    <option className="bg-slate-700" key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const onDeletePostClicked = () => {
    try {
      setRequestStatus("pending");
      dispatch(deletePost({ id: post.id })).unwrap();
      setTitle("");
      setContent("");
      setUserId("");
      navigate("/");
    } catch (error) {
      console.error("Failed to delete the post", error);
    } finally {
      setRequestStatus("idle");
    }
  };

  return (
    <section className="flex flex-col w-full items-center py-8">
      <h2 className="text-3xl font-bold mb-5">Edit Post</h2>
      <form className="flex flex-col items-start gap-5 w-1/3 p-6 rounded-md bg-slate-800">
        <div className="flex flex-col gap-1 w-full">
          <label className="text-base font-medium" htmlFor="postTitle">
            Post Title:
          </label>
          <input
            className="py-1 px-2 w-full rounded-md bg-transparent border border-white"
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-base font-medium" htmlFor="postAuthor">
            Author:
          </label>
          <select
            className="py-1 px-2 w-full rounded-md bg-transparent border border-white"
            id="postAuthor"
            defaultValue={userId}
            onChange={(e) => setUserId(Number(e.target.value))}
          >
            <option className="bg-slate-700" value=""></option>
            {usersOptions}
          </select>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-base font-medium" htmlFor="postContent">
            Post Content:
          </label>
          <textarea
            className="py-1 px-2 w-full rounded-md bg-transparent border border-white"
            name="postContent"
            id="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-5 w-full">
          <button
            disabled={!canSave}
            className="py-2 px-4 rounded-md text-base font-semibold w-full bg-slate-900 hover:bg-slate-700 duration-200"
            onClick={onSavePostClicked}
            type="button"
          >
            Save Post
          </button>
          <button
            className="py-2 px-4 rounded-md text-base font-semibold w-full bg-red-800 hover:bg-red-700 duration-200"
            onClick={onDeletePostClicked}
            type="button"
          >
            Delete Post
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditPostForm;

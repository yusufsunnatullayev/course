import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "../features/posts/postsSlice";
import { selectAllUsers } from "../features/users/usersSlice";
import { useNavigate } from "react-router-dom";

function AddPostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestedStatus, setAddRequestedStatus] = useState("idle");

  const users = useSelector(selectAllUsers);

  const navigate = useNavigate();

  const canSave =
    [title, content, userId].every(Boolean) && addRequestedStatus === "idle";

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setAddRequestedStatus("pending");
        dispatch(addNewPost({ title, body: content, userId })).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
        navigate("/");
      } catch (error) {
        console.log("Failed to save the post", error);
      } finally {
        setAddRequestedStatus("idle");
      }
    }
  };

  const usersOptions = users.map((user) => (
    <option className="bg-slate-700" value={user.id} key={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="flex flex-col w-full items-center py-8">
      <h2 className="text-3xl font-bold mb-5">Add a New Post</h2>
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
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
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
        <button
          disabled={!canSave}
          className="py-2 px-4 rounded-md text-base font-semibold w-full bg-slate-900 hover:bg-slate-700 duration-200"
          onClick={onSavePostClicked}
          type="button"
        >
          Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;

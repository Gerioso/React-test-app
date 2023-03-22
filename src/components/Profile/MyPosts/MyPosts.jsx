import React from "react";
import Post from "../Post/Post";
import s from "./MyPosts.module.css";
const MyPosts = () => {
  return (
    <div className={s.myposts}>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message="Hello world!" likes="12"></Post>
      <Post message="Shat up" likes="999"></Post>
    </div>
  );
};

export default MyPosts;

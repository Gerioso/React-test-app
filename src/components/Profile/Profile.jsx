import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={s.content}>
      <img
        className={s.baner}
        src="data:image/jpeg;base64,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"
      ></img>
      <MyPosts></MyPosts>
    </div>
  );
};

export default Profile;

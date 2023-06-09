import React from "react";
import s from "./Nav.module.css";
const Nav = () => {
  return (
    <div className={s.nav}>
      <div className={s.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={s.item}>
        <a href="/dialogs">Message</a>
      </div>
      <div className={s.item}>
        <a href="/news">News</a>
      </div>
      <div className={s.item}>
        <a href="/music">Music</a>
      </div>
      <div className={s.item}>
        <a href="/setting">Settings</a>
      </div>
    </div>
  );
};

export default Nav;

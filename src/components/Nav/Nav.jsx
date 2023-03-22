import React from "react";
import s from "./Nav.module.css";
const Nav = () => {
  return (
    <div className={s.nav}>
      <div className={s.item}>
        <a>Profile</a>
      </div>
      <div className={s.item}>
        <a>Message</a>
      </div>
      <div className={s.item}>
        <a>Settings</a>
      </div>
    </div>
  );
};

export default Nav;

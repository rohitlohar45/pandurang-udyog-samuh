import React from "react";

import { SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    <div className="Sidebar">
      <img src="/assets/img/logo-2.png" alt="" className="Sidebar__logo" />
      <ul className="Sidebar__list">
        {SidebarData.map((val, key) => {
          return (
            <li
              className="Sidebar__row"
              key={key}
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => (window.location.pathname = val.link)}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;

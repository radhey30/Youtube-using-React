import React from "react";
import Main from "./Main";
import Subscriptions from "./Subscriptions";
import Explore from "./Explore";
import Extra from "./Extra";

export default function Sidebar() {
  return (
    <div className="sidebar-outer">
      <div className="sidebar">
        <Main />
        <Subscriptions />
        <Explore />
        <Extra />
      </div>
    </div>
  );
}

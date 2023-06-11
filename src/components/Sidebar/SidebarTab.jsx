import React from "react";

export default function SidebarTab({ Icon, Text, active, imgTab, color }) {
  return (
    <div className={active ? "sidebar-tab active" : "sidebar-tab"} tabIndex={0}>
      {imgTab ? <img src={Icon} alt="profile" /> : <Icon className={color}/>}
      <p className="sidebar-tab-text">{Text}</p>
    </div>
  );
}

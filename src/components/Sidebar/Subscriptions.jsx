import React from "react";
import SidebarTab from "./SidebarTab";
import Line from "../Line";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default function Subscriptions() {
  return (
    <>
      <p className="sidebar-title">Subscriptions</p>
      <SidebarTab
        imgTab={true}
        Icon={require("../../images/profile1.jpg")}
        Text="NASA"
      />
      <SidebarTab
        imgTab={true}
        Icon={require("../../images/profile2.jpg")}
        Text="Auto Focus"
      />
      <SidebarTab
        imgTab={true}
        Icon={require("../../images/profile3.jpg")}
        Text="Dude Perfect"
      />
      <SidebarTab
        imgTab={true}
        Icon={require("../../images/profile4.jpg")}
        Text="HowToBasic"
      />
      <SidebarTab
        imgTab={true}
        Icon={require("../../images/profile5.jpg")}
        Text="LEMMiNO"
      />
      <SidebarTab Icon={ExpandMoreIcon} Text="Show 5 more" />
      <Line />
    </>
  );
}

import React from "react";
import SidebarTab from "./SidebarTab";
import Line from "../Line";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";

export default function Extra() {
  return (
    <>
      <p className="sidebar-title">More from YouTube</p>
      <SidebarTab color="red" Icon={YouTubeIcon} Text="YouTube Premium" />
      <SidebarTab color="red" Icon={YouTubeIcon} Text="YouTube Studio" />
      <SidebarTab color="red" Icon={YouTubeIcon} Text="YouTube Music" />
      <SidebarTab color="red" Icon={YouTubeIcon} Text="YouTube Kids" />
      <Line />
      <SidebarTab Icon={SettingsOutlinedIcon} Text="Settings" />
      <SidebarTab Icon={FlagOutlinedIcon} Text="Report History" />
      <SidebarTab Icon={HelpOutlineOutlinedIcon} Text="Help" />
      <SidebarTab Icon={FeedbackOutlinedIcon} Text="Send feedback" />
      <Line />
      <div className="copyright">
        <div>
          <p>About Press Copyright</p>
          <p>Contact us Creators</p>
          <p>Advertise Developers</p>
        </div>
        <div>
          <p>Terms Privacy Policy & Safety</p>
          <p>How YouTube works</p>
          <p>Test new features</p>
        </div>
        <div>
          <p className="copyright-btm">@ 2023 Google LLC</p>
        </div>
      </div>
    </>
  );
}

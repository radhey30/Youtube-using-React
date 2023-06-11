import React from "react";
import SidebarTab from "./SidebarTab";
import Line from "../Line";
import HomeIcon from "@mui/icons-material/Home";
import GamepadIcon from "@mui/icons-material/Gamepad";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryIcon from "@mui/icons-material/History";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import MovieIcon from "@mui/icons-material/Movie";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Main() {
  return (
    <>
      <SidebarTab active={true} Icon={HomeIcon} Text="Home" />
      <SidebarTab Icon={GamepadIcon} Text="Shorts" />
      <SidebarTab Icon={SubscriptionsOutlinedIcon} Text="Subscriptions" />
      <Line />
      <SidebarTab Icon={VideoLibraryOutlinedIcon} Text="Library" />
      <SidebarTab Icon={HistoryIcon} Text="History" />
      <SidebarTab Icon={SlideshowIcon} Text="Your videos" />
      <SidebarTab Icon={MovieIcon} Text="Your movies" />
      <SidebarTab Icon={ScheduleIcon} Text="Watch later" />
      <SidebarTab Icon={ContentCutIcon} Text="Your clips" />
      <SidebarTab Icon={ExpandMoreIcon} Text="Show more" />
      <Line />
    </>
  );
}

import React from "react";
import SidebarTab from "./SidebarTab";
import Line from "../Line";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import MovieIcon from "@mui/icons-material/Movie";
import StreamOutlinedIcon from "@mui/icons-material/StreamOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";

export default function Explore() {
  return (
    <>
      <p className="sidebar-title">Explore</p>
      <SidebarTab Icon={LocalFireDepartmentOutlinedIcon} Text="Trending" />
      <SidebarTab Icon={ShoppingBagOutlinedIcon} Text="Shopping" />
      <SidebarTab Icon={MusicNoteOutlinedIcon} Text="Music" />
      <SidebarTab Icon={MovieIcon} Text="Movies" />
      <SidebarTab Icon={StreamOutlinedIcon} Text="Live" />
      <SidebarTab Icon={SportsEsportsOutlinedIcon} Text="Gaming" />
      <SidebarTab Icon={NewspaperOutlinedIcon} Text="News" />
      <SidebarTab Icon={EmojiEventsOutlinedIcon} Text="Sports" />
      <SidebarTab Icon={LightbulbOutlinedIcon} Text="Learning" />
      <SidebarTab Icon={CheckroomOutlinedIcon} Text="Fashion & Beauty" />
      <Line />
    </>
  );
}

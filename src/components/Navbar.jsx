import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

export default function Navbar() {
  return (
    <nav>
      <div className="left-nav">
        <MenuIcon  tabIndex={0} />
        <div  tabIndex={0}>
          <YouTubeIcon className="youtube-icon" />
          <h2>YouTube</h2>
        </div>
      </div>
      <div className="middle-nav">
        <div>
          <input type="text" name="search" id="search" placeholder="Search" />
          <SearchIcon className="search-icon" tabIndex={0} />
        </div>
        <MicIcon className="mic-icon" tabIndex={0} />
      </div>
      <div className="right-nav">
        <VideoCallOutlinedIcon className="img-icon" tabIndex={0} />
        <NotificationsNoneOutlinedIcon className="img-icon" tabIndex={0} />
        <img src={require("../images/icon.jpg")} alt="icon" className="icon" tabIndex={0} />
      </div>
    </nav>
  );
}

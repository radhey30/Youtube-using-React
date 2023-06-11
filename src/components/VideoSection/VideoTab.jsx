import React from "react";

export default function VideoTab({ video, profile, title, author, views }) {
  return (
    <div className="video-tab">
      <div className="upper-tab">
        <img src={video} alt="video" />
      </div>
      <div className="lower-tab">
        <div className="video-tab-icon">
          <img src={profile} alt="profile" />
        </div>
        <div className="video-tab-text">
          <div className="title">{title}</div>
          <div className="author">{author}</div>
          <div className="views">{views} views</div>
        </div>
      </div>
    </div>
  );
}

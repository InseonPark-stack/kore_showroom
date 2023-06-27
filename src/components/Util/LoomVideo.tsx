import React from "react";
import "./LoomVideo.css";

interface LoomVideoProps {
  videoUrl: string;
}

function LoomVideo(props: LoomVideoProps) {
  const embedUrl = props.videoUrl.replace(
    "https://www.loom.com/share/",
    "https://www.loom.com/embed/"
  );

  return (
    <div className="loom-container">
      <iframe
        className="loom-player"
        title="title"
        src={embedUrl}
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default LoomVideo;

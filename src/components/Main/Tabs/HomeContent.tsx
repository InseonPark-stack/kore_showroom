import { useEffect, useState } from "react";
import YouTubeVideo from "../../Util/YoutubeVideo";
import "./Tabs.css";

function HomeContent() {
  const videoId = "tu4PkDYEEEU";
  const [toggleChild, setToggleChild] = useState(true);

  useEffect(() => {
    setToggleChild(true);
  }, [toggleChild]);

  return (
    <div className="homecontent">
      <h3>소개 영상</h3>
      <YouTubeVideo videoId={videoId} toggle={toggleChild} />
    </div>
  );
}

export default HomeContent;

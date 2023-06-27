import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import LoomVideo from "../../Util/LoomVideo";
import { getVideoList } from "../../../services/DassApi";

interface VideoData {
  title: string;
  urlLink: string;
  description: string;
}

function DemoVideo() {
  const [videoList, setVideoList] = useState<VideoData[]>([]);

  useEffect(() => {
    async function fetchVideoList() {
      try {
        const response = await getVideoList();
        if (response?.status == 200) {
          setVideoList(response.data);
        } else {
          throw new Error("Loom Video 불러오기 오류");
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchVideoList();
  }, [videoList]);

  return (
    <Card id="cardFlex" style={{ width: "100%" }}>
      {videoList.map((video) => (
        <Card.Body key={video.title}>
          <Card.Title>{video.title}</Card.Title>
          <LoomVideo videoUrl={video.urlLink} />
          {video.description}
        </Card.Body>
      ))}
    </Card>
  );
}

export default DemoVideo;

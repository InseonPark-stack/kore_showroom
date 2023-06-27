import { useEffect, useRef } from "react";
import "./YoutubeVideo.css";
import YouTube, { YouTubeProps } from "react-youtube";

interface youtubeType {
  videoId: string;
  toggle: boolean;
}

function YouTubeVideo(props: youtubeType) {
  const playerRef = useRef<any>(null); // YouTube 플레이어 ref

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    playerRef.current = event.target; // 플레이어 ref 업데이트
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      rel: 0, // 연관 동영상이 현재 채널에서 추천되게
    },
  };

  useEffect(() => {
    // 부모 컴포넌트의 재생 여부에 따라 유튜브 재생 중지
    if (playerRef.current && playerRef.current.getPlayerState() !== 2) {
      playerRef.current.pauseVideo();
    }
  }, [props]);

  return (
    <div className="youtube-container">
      <YouTube
        className="youtube-player"
        videoId={props.videoId}
        opts={opts}
        onReady={onPlayerReady}
      />
    </div>
  );
}

export default YouTubeVideo;

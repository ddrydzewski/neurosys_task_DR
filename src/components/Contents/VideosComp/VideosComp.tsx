import React from "react";
import background from "../../../design/backgrounds/gray-lines.png";
import { VideoContainer, VideosContainer } from "./style";

const VideosComp = () => {
  return (
    <VideosContainer id="videoComp" style={{ backgroundImage: `url(${background})` }}>
      <VideoContainer>
        <iframe
          style={{width: "100%", height: "75vh"}}
          src={`https://www.youtube.com/embed/CC3TxwT6ivs`}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope"
          allowFullScreen
          title="Embedded youtube"
        />
      </VideoContainer>
    </VideosContainer>
  );
};

export default VideosComp;

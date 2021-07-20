import React from "react";
import background from "../../../design/backgrounds/baranovski_background.jpg";
import FacebookIcon from "../../../design/icons/facebook.svg";
import InstagramIcon from "../../../design/icons/instagram.svg";
import SpotifyIcon from "../../../design/icons/spotify.svg";
import YoutubeIcon from "../../../design/icons/youtube.svg";
import {
  HugeText,
  SocialIconsContainer,
  SocialIconsStyled,
  StarterContainer
} from "./style";

const Starter = () => {
  return (
    <StarterContainer
      id="starter"
      style={{ backgroundImage: `url(${background})`}}
    >
      <div>
        <HugeText>
          BARANOVSKI{" "}
          <SocialIconsContainer>
            <a
              href="https://pl-pl.facebook.com/baranovskimusic"
              target="_blank"
              rel="noreferrer"
            >
              <SocialIconsStyled src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/sir_baranovski/?hl=pl"
              target="_blank"
              rel="noreferrer"> 
              <SocialIconsStyled src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/channel/UCqSSQr-UEA_0yCc_3F-mBiQ"
              target="_blank"
              rel="noreferrer">
              <SocialIconsStyled src={YoutubeIcon} alt="Youtube" />
            </a>
            <a href="https://open.spotify.com/artist/0VpXPTuw4wRvor9ZZq1hbB"
              target="_blank"
              rel="noreferrer">
              <SocialIconsStyled src={SpotifyIcon} alt="Spotify" />
            </a>
          </SocialIconsContainer>
        </HugeText>
      </div>
    </StarterContainer>
  );
};

export default Starter;

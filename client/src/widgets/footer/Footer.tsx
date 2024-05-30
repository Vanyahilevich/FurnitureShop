import React from "react";
import Logo from "../header/logo";
import FacebookButton from "../../shared/facebook-button";
import YouTubeButton from "../../shared/youtube-button";
import VKButton from "../../shared/vk-button";
import InstagramButton from "../../shared/Instagram-button";

const Footer = () => {
  return (
    <div
      className="
    sm:flex sm:flex-row sm:justify-between sm:items-center
    flex flex-col items-center justify-center gap-y-2
    pb-5
    font-light text-md text-darkBlueClick
    "
    >
      <div className="max-w-20 flex justify-center">
        <Logo className="w-full" />
      </div>
      <div>All rights reserved © 2024</div>
      <div className="flex gap-4 mr-2">
        <FacebookButton />
        <YouTubeButton />
        <VKButton />
        <InstagramButton />
      </div>
    </div>
  );
};

export default Footer;

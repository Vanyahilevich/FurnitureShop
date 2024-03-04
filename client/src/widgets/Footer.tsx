import React from "react";
import Logo from "./Header/Logo";
import FacebookButton from "../shared/facebook-button";
import YouTubeButton from "../shared/youtube-button";
import VKButton from "../shared/vk-button";
import InstagramButton from "../shared/Instagram-button";
import { Link } from "react-router-dom";
import UIInput from "../ui-kit/ui-Input";
import UIButton from "../ui-kit/ui-button";

const Footer = () => {
  return (
    <div className=" text-md text-darkBlueClick flex justify-between font-light pb-10">
      <div className="text-base font-normal flex flex-col gap-y-6">
        <Logo className="w-20 mb-auto" />
        <div className="w-72">
          Search through our extensive image gallery and product portfolio using
          optimized filters to get a creative workspace!
        </div>
        <div className="flex gap-4">
          <FacebookButton />
          <YouTubeButton />
          <VKButton />
          <InstagramButton />
        </div>
      </div>
      <div className=" flex flex-col gap-y-5">
        <Link to={"###"} className="mb-auto">
          Menu
        </Link>
        <Link to={"###"}>Products</Link>
        <Link to={"###"}>About us</Link>
        <Link to={"###"}>Contact</Link>
      </div>
      <div className=" flex flex-col gap-y-5">
        <Link to={"###"} className="mb-auto">
          Additional menu
        </Link>
        <Link to={"###"}>Blog</Link>
        <Link to={"###"}>Payment and delivery</Link>
        <Link to={"###"}>Privacy policy</Link>
      </div>
      <div className=" flex flex-col max-w-72 gap-y-5">
        <div className="mb-auto">
          Subscribe to notifications about new items
        </div>
        <UIInput variant="subscribe" placeholder="Your e-mail" value={""} />
        <UIButton size={"md"} variant="details">
          Subscribe
        </UIButton>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Logo from "./Header/Logo";
import FacebookButton from "../shared/FacebookButton";
import YouTubeButton from "../shared/YouTubeButton";
import VKButton from "../shared/VKButton";
import InstagramButton from "../shared/InstagramButton";
import { Link } from "react-router-dom";
import UIInput from "../ui-kit/UIInput";
import UIButton from "../ui-kit/UIButton";

const Footer = () => {
  return (
    <div className="text-darkBlueClick flex justify-between font-light">
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
      <div className="text-2xl flex flex-col gap-y-5">
        <Link to={"###"} className="mb-auto">
          Menu
        </Link>
        <Link to={"###"}>products</Link>
        <Link to={"###"}>about us</Link>
        <Link to={"###"}>contact</Link>
      </div>
      <div className="text-2xl flex flex-col gap-y-5">
        <Link to={"###"} className="mb-auto">
          Additional menu
        </Link>
        <Link to={"###"}>blog</Link>
        <Link to={"###"}>payment and delivery</Link>
        <Link to={"###"}>privacy policy</Link>
      </div>
      <div className="text-2xl flex flex-col max-w-72 gap-y-5">
        <div className="mb-auto">
          Subscribe to notifications about new items
        </div>
        <UIInput variant="subscribe" placeholder="Your e-mail" />
        <UIButton size={"md"} variant="details">
          Subscribe
        </UIButton>
      </div>
    </div>
  );
};

export default Footer;

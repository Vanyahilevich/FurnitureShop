import React from "react";
import MainBg from "./mainBg.jpg";

const HomePageLayout: React.FC = () => {
  return (
    <div className="-mb-12 flex flex-auto ">
      {/* <img src={MainBg} alt="" /> */}
      <div
        className="bg-cover bg-top bg-no-repeat w-full
        flex flex-col 
        "
        style={{ backgroundImage: `url(${MainBg})` }}
      >
        <div className="text-center text-5xl font-bold">CHABLE</div>
      </div>
    </div>
  );
};

export default HomePageLayout;

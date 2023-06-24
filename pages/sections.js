import React from "react";
import Navbar from "../components/sections/navbar";
import TopBanner from "../components/sections/topBanner";
import UpperMidBanner from "../components/sections/upperMidBanner";
import MidBanner from "../components/sections/midBanner";
import TopCollections from "../components/sections/topCollections";

const Sections = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center h-screen gradientBackgroundTop arc">
        <div className="max-w-7xl w-full">
          <TopBanner />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-7xl ">
          <UpperMidBanner />
        </div>
      </div>
      <div className="flex justify-center w-full bg-slate-100 mt-20">
        <div className="max-w-7xl">
          <MidBanner />
        </div>
      </div>
      <div className="flex justify-center w-full  mt-20">
        <div className="max-w-7xl pb-20">
          <TopCollections />
        </div>
      </div>
    </div>
  );
};

export default Sections;

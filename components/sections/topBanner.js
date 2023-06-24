import React from "react";
import TopCarousal from "../Carousal/topCarousal";

const Count = [
  { id: 1, number: "98K+", name: "Artwork" },
  { id: 1, number: "12K+", name: "Auction" },
  { id: 1, number: "15K+", name: "Artist" },
];

const TopBanner = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col lg:flex-row items-center justify-center  font-sans  gap-6 ">
        <div className="w-[800px]">
          <TopCarousal />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;

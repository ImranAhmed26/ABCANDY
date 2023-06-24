import Image from "next/image";
import React from "react";

const MainCarousalCard = ({ title, date, category, image, text }) => {
  return (
    <div>
      <div className="bg-white">
        <Image src={image} alt="img" />
        <div className="flex flex-col gap-3 bg-white w-full h-full p-4">
          <div className="flex gap-6 text-lg">
            <div className="font-semibold ">{category}</div>
            <div className="text-gray-500">{date}</div>
          </div>
          <div className="text-4xl font-medium">{title}</div>
          <div className="text-lg">{text}</div>
          <button className="border-brand border text-brand text-lg font-semibold p-1 w-32 text-center">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCarousalCard;

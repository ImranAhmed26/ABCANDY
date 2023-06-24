import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Logo from "../../public/assets/ABCandy.png";
import { NavLinks, NavLinks2 } from "../../constants/navlinks.js";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    "logic for handling search";
  };

  return (
    <div className="flex justify-center bg-white sticky z-30 top-0 px-10">
      <div className="flex items-center flex-col lg:flex-row h-[85px] py-3.5 text-lg  w-full max-w-8xl">
        <div className="flex justify-start items-center lg:w-1/3 pb-2 ">
          <div className="flex gap-3 px-4 lg:gap-5 lg:px-7 xl:px-12 2xl:px-20 text-base text-black lg:text-lg xl:text-lg py-2 ">
            {NavLinks.map((items, i) => {
              return (
                <div key={isNaN}>
                  <Link href="/">
                    <a>{items.name}</a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:w-1/3 pb-2">
          <Image src={Logo} width={130} height={23} alt={"logo"} />
        </div>

        <div className="flex flex-col md:flex-row lg:items-center justify-end lg:w-1/3 gap-6 ">
          <div className="flex text-black gap-6">
            {NavLinks2.map((items, i) => {
              return (
                <div key={isNaN}>
                  <Link href="/">
                    <a>{items.name}</a>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center items-center py-1.5 px-4 text-white bg-brand hover:bg-[#6C00FF] transition-all duration-150 cursor-pointer">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

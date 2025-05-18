import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <div className="w-full bg-gray-700">
        <div className="flex flex-col gap-6 items-center sm:flex sm:flex-row  lg:ml-40 lg:mr-40 justify-between pt-6 pb-6">
          <div className="flex flex-col justify-center gap-2">
            <div className="flex  gap-2 items-center">
              <Image src="/logo.svg" alt="logo" width={30} height={30} />
              <div className="font-bold text-white text-center">
                Madina Courier
              </div>
            </div>
            <div className="text-gray-400 w-[200px] md:w-full ">
              The most trusted compant in your area
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-6">
            <div className="flex flex-col  gap-2 md:gap-6">
              {" "}
              <div className="font-bold text-white">Other Links</div>
              <div className="flex flex-col gap-2 text-gray-400">
                <a href="">Blogs</a>
                <a href="">Movers website</a>
                <a href="">Traffic update</a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {" "}
              <div className="font-bold text-white">Other Links</div>
              <div className="flex flex-col gap-2 text-gray-400">
                <a href="">Blogs</a>
                <a href="">Movers website</a>
                <a href="">Traffic update</a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {" "}
              <div className="font-bold text-white">Other Links</div>
              <div className="flex flex-col  text-gray-400 gap-2">
                <a href="">Blogs</a>
                <a href="">Movers website</a>
                <a href="">Traffic update</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 w-full bg-[#222132] p-4">
        {" "}
        copyright@123
      </div>
    </div>
  );
};

export default Footer;

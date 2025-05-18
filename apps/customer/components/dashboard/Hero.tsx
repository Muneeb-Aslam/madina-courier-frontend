import React from "react";
import Button from "@repo/ui/button";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="flex p-4  ml:8 mr-8 md:ml-20 md:mr-20  ">
      <div className="flex flex-col justify-center ">
        <div className="text-4xl">
          A Trusted Provider of
          <br />
          <span className="text-2xl font-bold"> courier services</span>
        </div>
        <div>
          <p>
            We deliver your products safely to your home in a reasonable time.
          </p>
        </div>
        <div className="relative">
          <Button
            type="submit"
            className="self-center mt-spacing-m bg-primary rounded-[4px] text-white px-2 py-1 "
          >
            Get Started
          </Button>
          <Image
            src="/Ellipse-small.svg"
            alt="logo"
            className="absolute  top-10 z-0"
            height={30}
            width={30}
          />
          <Image
            src="/Ellipse.svg"
            alt="logo"
            className="absolute left-[50px] top-[0px] z-0"
            height={100}
            width={100}
          />
        </div>
      </div>
      <div className="relative w-full h-[200px] md:h-[500px]">
        <Image src="/world.svg" alt="logo" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Hero;

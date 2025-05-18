import React from "react";

import Button from "@repo/ui/button";
import Image from "next/image";
const LocationMap = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div>
        <div className="text-primary font-bold text-2xl text-center">
          FIND US
        </div>
        <div className="text-black font-bold text-2xl">ACCESS US EASILY</div>
      </div>
      <div className="flex flex-col gap-4 md:flex md:flex-row">
        <div>
          <Image src="/map.svg" alt="logo" width={500} height={500} />
        </div>
        <div className="flex flex-col gap-4 justify-center p-6">
          <div>Contact with us</div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              {" "}
              <Image
                src="/location-icon.svg"
                alt="logo"
                width={20}
                height={20}
              />
              <span>2277 Lorem Ave, UK, Bhimber 22553</span>
            </div>
            <div className="flex gap-2">
              {" "}
              <Image src="/clock-icon.svg" alt="logo" width={20} height={20} />
              <span>Monday - Friday: 10 am - 10pm Sunday: 11 am - 9pm</span>
            </div>
            <div className="flex gap-2">
              <Image src="/email-icon.svg" alt="logo" width={20} height={20} />
              <span>info@muneebCS.com</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Image src="/fb-icon.svg" alt="logo" width={20} height={20} />
            <Image src="/insta-icon.svg" alt="logo" width={20} height={20} />
            <Image src="/twitter-icon.svg" alt="logo" width={20} height={20} />
          </div>
        </div>
      </div>
      <div>
        <Button
          type="submit"
          className=" flex gap-2 bg-primary rounded-[4px] text-white px-4 py-2"
        >
          <Image src="/call-icon.svg" alt="logo" width={20} height={20} />
          Call us to delivery <span>123-2569378</span>
        </Button>
      </div>
    </div>
  );
};

export default LocationMap;

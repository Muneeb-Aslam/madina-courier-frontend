import React from "react";
import { stats } from "../../constants";
import Image from "next/image";

const Stats = () => {
  return (
    <div className="flex justify-center items-start gap-6 flex-wrap mt-10">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-between w-[120px] min-h-[140px] text-center"
        >
          <div className="h-[40px] w-[40px] flex items-center justify-center mb-2">
            <Image
              src={stat.imageUrl}
              alt={stat.text}
              height={30}
              width={30}
              className="object-contain"
            />
          </div>

          <div className="font-bold text-primary text-lg min-h-[28px]">
            {stat.statValue}
          </div>

          <div className="text-sm text-gray-700 min-h-[36px]">{stat.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;

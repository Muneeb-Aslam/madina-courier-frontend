import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../packages/ui/src/card";

import Button from "@repo/ui/button";
import Image from "next/image";
import { services } from "../../constants";

const Services = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10">
      {/* Heading */}
      <div className="flex flex-col items-center mb-6 text-center">
        <div className="text-tertiary font-bold">SERVICES</div>
        <div className="text-black font-bold text-xl sm:text-2xl">
          Our Services for you
        </div>
      </div>

      {/* Cards Wrapper */}
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {services.map((service, index) => (
          <Card
            key={index}
            className="flex flex-col justify-between p-6 w-full sm:w-[300px] max-w-[300px] min-w-[250px] flex-1 min-h-[400px] border border-gray-200 rounded-lg shadow-sm bg-white"
          >
            {/* Card Top */}
            <div>
              <CardHeader className="flex flex-col justify-center items-center">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <CardTitle className="font-bold mt-4 text-center text-base sm:text-lg">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardDescription className="text-center text-gray-600 mb-2 text-sm">
                {service.description}
              </CardDescription>

              <CardContent>
                <ul className="list-disc pl-5 marker:text-primary text-gray-700 text-sm">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </div>

            {/* Card Footer */}
            <CardFooter className="flex justify-center mt-4">
              <Button
                type="submit"
                className="bg-primary rounded-[4px] w-full text-white px-4 py-2"
              >
                Learn More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;

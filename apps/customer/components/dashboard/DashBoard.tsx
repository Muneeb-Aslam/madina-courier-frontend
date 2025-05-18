import React from "react";
import Button from "@repo/ui/button";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Services from "./Services";
import Stats from "./Stats";
import VideoBanner from "./VideoBanner";
import Testimonials from "./Testinominals";
import CallbackForm from "./CallBackForm";
import Footer from "./Footer";
import LocationMap from "./LocationMap";

const DashBoard = () => {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <Services />
      <Stats />
      <CallbackForm />
      <LocationMap />
      <VideoBanner />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default DashBoard;

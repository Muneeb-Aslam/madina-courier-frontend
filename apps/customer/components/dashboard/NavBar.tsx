"use client";
import React, { useState } from "react";
import Image from "next/image";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Background image */}
      <div className="absolute right-0 top-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] z-0">
        <Image
          src="/side-vector.svg"
          alt="logo"
          fill
          className="object-contain z-10"
        />
      </div>

      {/* Navbar content */}
      <nav className="relative bg-gradient-to-r from-white to-primary p-6 z-10 flex py-2 px-6 justify-between bg-white border-b border-muted">
        <div className="text-primary flex items-center gap-1 font-bold">
          <Image src="/logo.svg" alt="logo" height={20} width={20} />
          <div>Madina Courier</div>
        </div>

        <div className="relative">
          <button
            className="sm:hidden text-2xl"
            aria-label="Open menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          <div
            className={`
          ${isOpen ? "flex" : "hidden"}
          absolute flex-col p-2 rounded-[6px] top-8 sm:top-auto
          right-2 sm:right-auto sm:flex sm:flex-row gap-2 sm:gap-4 sm:relative
          bg-tertiary sm:bg-transparent
        `}
          >
            <a href="">Home</a>
            <a href="">Tracking</a>
            <a href="" className="whitespace-nowrap">
              About Us
            </a>
            <a href="">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

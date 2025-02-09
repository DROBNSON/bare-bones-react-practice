import React from "react";
import { LandingPage } from "./home/landingPage";
function Navbar() {
  return (
    <>
      <header>
        <nav className="w-[90vw] h-10 flex mx-auto bg-gray-800 text-white text-xs">
          <div
            class="left-navbar"
            className="left-navbar border border-white h-full flex bg-primaryBlue p-4 rounded-md space-x-8 items-center overflow-hidden "
          >
            <a
              href="www.google.com"
              className="h-full flex items-center justify-center"
            >
              Products
            </a>
            <a
              href="www.google.com"
              className="h-full flex items-center justify-center"
            >
              Solutions
            </a>
            <a
              href="www.google.com"
              className="h-full flex items-center justify-center"
            >
              Why Aspire
            </a>
            <a
              href="www.google.com"
              className="h-full flex items-center justify-center"
            >
              Resources
            </a>
          </div>
          <div
            class="centre-left-navbar"
            className="  border border-white h-full flex-1 bg-primaryBlue  flex rounded-md items-center"
          >
            <a
              href="www.google.com"
              className="h-full w-full flex items-center justify-center text-sm"
            >
              &copy; Coinforge
            </a>
          </div>
          <div
            class="centre-right-navbar"
            className=" border border-white h-full  bg-primaryBlue p-4 flex-grow rounded-md flex-row"
          >
            <a
              href="www.google.com"
              className="flex flex-row h-full w-full items-center justify-center"
            >
              <img src="assets/images/s-icon.png" alt="S Icon" />
              Save Up to 30%
            </a>
          </div>
          <div
            class="right-navbar"
            className=" border border-whiteh-full flex-1  bg-primaryBlue p-4 flex-grow rounded-md "
          >
            <a
              href="www.google.com"
              className="flex flex-row h-full w-full items-center justify-center"
            >
              Book A Demo
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export function Viewport() {
  return (
    <div className="w-screen h-screen m-0 p-0 block bg-primaryBlue overflow-y-scroll">
      <Navbar></Navbar>
      <LandingPage></LandingPage>
    </div>
  );
}

import React from "react";
function Navbar(){
    return (
      <>
        <header>
          <nav className="w-[90vw] h-10 flex mx-auto bg-gray-800 text-white">
            <div
              class="left-navbar"
              className="h-full flex-1  bg-primaryBlue p-4 flex-grow rounded-md"
            >
              <a href="www.google.com">Products</a>
              <a href="www.google.com">Solutions</a>
              <a href="www.google.com">Why Aspire</a>
              <a href="www.google.com">Resources</a>
            </div>
            <div
              class="centre-left-navbar"
              className="h-full flex-1 bg-primaryBlue p-4 flex-growb rounded-md"
            ></div>
            <div
              class="centre-right-navbar"
              className="h-full flex-1  bg-primaryBlue p-4 flex-grow rounded-md"
            ></div>
            <div
              class="right-navbar"
              className="h-full flex-1  bg-primaryBlue p-4 flex-grow rounded-md"
            ></div>
          </nav>
        </header>
      </>
    );
}


export function Viewport() {

 return (
   <div className="w-screen h-screen m-0 p-0 block bg-primaryBlue">
    <Navbar></Navbar>
     <p>Hello to the world</p>
   </div>
 );

}

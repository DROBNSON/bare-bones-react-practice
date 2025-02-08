import React from "react";
function Navbar(){
    return(
        <>
        <header>
            <nav className="w-[90vw] h-16 flex mx-auto bg-gray-800 text-white">
                <div class="left-navbar"></div>
                <div class="centre-left-navbar"></div>
                <div class="centre-right-navbar"></div>
                <div class="right-navbar"></div>
            </nav>
        </header>
        </>
    );
}


export function Viewport() {

 return (
   <div className="w-screen h-screen m-0 p-0 flex bg-blue-500">
    <Navbar></Navbar>
     <p>Hello to the world</p>
   </div>
 );

}

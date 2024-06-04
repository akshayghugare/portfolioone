import React from "react";
import "../../src/mystyle.css"
import myPic from "../Assets/myPic.jpg"
const Home = () => {
    return (
        <div className="bgImage h-screen text-white flex justify-center items-center w-full">
            <div className="flex">
                <div className=" flex justify-center items-center w-full">
                    <div className="">
                    <div className="text-3xl font-bold">Akshay Ghugare</div>
                    <div className="text-xl">I am <span className="border border-2 border-t-0 border-l-0 border-r-0">web developer</span></div>
                    </div>
                </div>
                <div ><img className="rounded-full myPicImage" width={900} height={900} src={myPic}/></div>
            </div>
            
        </div>
    )
}

export default Home;
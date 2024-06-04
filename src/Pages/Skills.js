import React from "react";
import "../../src/mystyle.css"
import myPic from "../Assets/myPic.jpg"
const Skills = () => {
    return (
        <div className="bgImage h-screen text-white  w-full">
        <div className=" p-8 w-full">
          <div className="flex flex-col">
          <div className=" text-2xl">Skills</div>
          <div className="border border-blue-500 border-2 border-t-0 border-l-0 border-r-0 w-10 mt-2"></div>
          </div>
          <div className="my-6">
            <div>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</div>
          </div>
          
          <div className="flex space-x-10">
            <div className="w-full">
               <div className="flex justify-between">
                <div>HTML</div>
                <div>100%</div>
               </div>
               <div className="flex w-full">
               <div className="border p-1 bg-blue-500 w-30 w-full"></div>
               {/* <div className="border p-1 w-0"></div> */}
               </div>
            </div>
            <div className="w-full">
               <div className="flex justify-between">
                <div>CSS</div>
                <div>90%</div>
               </div>
               <div className="flex w-full">
               <div className="border p-1 bg-blue-500 w-30 w-full"></div>
               <div className="border p-1 w-10"></div>
               </div>
            </div>
          </div>
          <div className="flex space-x-10  mt-4">
            <div className="w-full">
               <div className="flex justify-between">
                <div>Javascript</div>
                <div>80%</div>
               </div>
               <div className="flex w-full">
               <div className="border p-1 bg-blue-500 w-30 w-full"></div>
               <div className="border p-1 w-20"></div>
               </div>
            </div>
            <div className="w-full">
               <div className="flex justify-between">
                <div>React js</div>
                <div>75%</div>
               </div>
               <div className="flex w-full">
               <div className="border p-1 bg-blue-500 w-30 w-full"></div>
               <div className="border p-1 w-32"></div>
               </div>
            </div>
          </div>
          <div className="flex space-x-10 mt-4">
            <div className="w-full">
               <div className="flex justify-between">
                <div>Angular</div>
                <div>70%</div>
               </div>
               <div className="flex w-full">
               <div className="border p-1 bg-blue-500 w-30 w-full"></div>
               <div className="border p-1 w-32"></div>
               </div>
            </div>
            <div className="w-full">
               <div className="flex justify-between">
                <div>Node js</div>
                <div>85%</div>
               </div>
               <div className="flex w-full">
               <div className="border p-1 bg-blue-500 w-30 w-full"></div>
               <div className="border p-1 w-20"></div>
               </div>
            </div>
          </div>

          <div className="flex space-x-10 mt-4">
            <div className="w-full">
               <div className="flex justify-between">
                <div>Mongo DB</div>
                <div>75%</div>
               </div>
               <div className="flex w-full">
               <div className="border p-1 bg-blue-500 w-30 w-full"></div>
               <div className="border p-1 w-24"></div>
               </div>
            </div>
            <div className="w-full">
               <div className="flex justify-between">
                <div>Mysql</div>
                <div>70%</div>
               </div>
               <div className="flex w-full">
               <div className="border p-1 bg-blue-500 w-30 w-full"></div>
               <div className="border p-1 w-28"></div>
               </div>
            </div>
          </div>

          <div className="mt-2 text-2xl">Additional</div>
          <div className="border border-black border-2 border-t-0 border-l-0 border-r-0 w-10 mt-2"></div>

          <div className="flex space-x-10 ">
            <div className="w-full">
               <div className="flex justify-between">
                <div>Ai integration</div>
                <div>50%</div>
               </div>
               <div className="flex w-full">
               <div className="border p-1 bg-blue-500 w-30 w-full"></div>
               <div className="border p-1 w-80"></div>
               </div>
            </div>
            <div className="w-full">
               <div className="flex justify-between">
                <div>Payment integration</div>
                <div>60%</div>
               </div>
               <div className="flex w-full">
               <div className="border p-1 bg-blue-500 w-30 w-full"></div>
               <div className="border p-1 w-52"></div>
               </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Skills;
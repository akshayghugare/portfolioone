import React from "react";
import "../../src/mystyle.css"
import myPic from "../Assets/myPic.jpg"
const About = () => {
    return (
        <div className="bgImage h-screen text-white flex justify-center items-center w-full">
        <div className=" p-8 w-full">
          <div className="flex flex-col">
          <div className=" text-2xl">About</div>
          <div className="border border-blue-500 border-2 border-t-0 border-l-0 border-r-0 w-10 mt-2"></div>
          </div>
          <div className="my-6">
            <div>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</div>
          </div>

            <div className="flex gap-4">
            <div ><img className="rounded-md myPicImage" width={400}  src={myPic}/></div>
            <div className="w-full">
                    <div className="text-2xl">Web Developer.</div>
                    <div className="italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div className="mt-4 flex space-x-10">
                    <div className="">
                        <div className="flex ">
                            <div className="flex item-center">
                                <div className=" text-blue-500">{">"}</div>
                                <div>Birthday:</div>
                                <div>19-Feb-1998</div>
                            </div>
                        </div>
                        <div className="flex mt-4 ">
                            <div className="flex item-center">
                                <div className=" text-blue-500">{">"}</div>
                                <div>Website:</div>
                                <div>www.example.com</div>
                            </div>
                           
                        </div>
                        <div className="flex mt-4 ">
                            <div className="flex item-center">
                                <div className=" text-blue-500">{">"}</div>
                                <div>Phone:</div>
                                <div>+91 8668822445</div>
                            </div>
                          
                        </div>
                        <div className="flex mt-4">
                            <div className="flex item-center">
                                <div className=" text-blue-500">{">"}</div>
                                <div>City:</div>
                                <div>Chatrapati Sambhaji-Nagar </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="">
                        <div className="flex ">
                            <div className="flex item-center">
                                <div className=" text-blue-500">{">"}</div>
                                <div>Age:</div>
                                <div>24</div>
                            </div>
                        </div>
                        <div className="flex mt-4 ">
                            <div className="flex item-center">
                                <div className=" text-blue-500">{">"}</div>
                                <div>Degree:</div>
                                <div>MCA</div>
                            </div>
                        </div>
                        <div className="flex  mt-4">
                            <div className="flex item-center">
                                <div className=" text-blue-500">{">"}</div>
                                <div>Email:</div>
                                <div>akshayghugare0@gmail.com</div>
                            </div>
                        </div>
                        <div className="flex  mt-4">
                            <div className="flex item-center">
                                <div className=" text-blue-500">{">"}</div>
                                <div>Web developer:</div>
                                <div>Available</div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="mt-4">
                    Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                    </div>
                    
            </div>
            </div>
            
        </div>
        </div>
    )
}

export default About;
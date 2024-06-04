import React from 'react';
import { motion } from 'framer-motion';
import myPic from '../Assets/myPic.jpg';

const About = () => {
  return (
    <div className="h-screen flex justify-center items-center w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="p-8 w-full max-w-5xl">
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-2xl">About</div>
          <div className="border border-blue-500 border-2 border-t-0 border-l-0 border-r-0 w-10 mt-2"></div>
        </motion.div>
        
        <motion.div
          className="my-6"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div>
          <p>
              Hello! I'm Akshay Ghugare, a passionate web developer with experience in creating dynamic and responsive websites and applications. I specialize in HTML, CSS, JavaScript, React, and Node.js.
            </p>    
              
             </div>
             
        </motion.div>
        
        <div className="flex gap-4">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img alt="loading" className="rounded-lg myPicImage w-72" src={myPic} />
          </motion.div>
          
          <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="text-2xl">Web Developer</div>
            <div className="italic mb-4">
            <p className="">
              I love to build web applications that are not only functional but also provide a great user experience. When I'm not coding, you can find me exploring new technologies, reading tech blogs, or contributing to open-source projects.
            </p>               </div>
            <div className="flex flex-wrap gap-10">
              <div>
                <div className="flex items-center space-x-2">
                  <div className="text-blue-500">{">"}</div>
                  <div>Birthday:</div>
                  <div>19-Feb-1998</div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <div className="text-blue-500">{">"}</div>
                  <div>Phone:</div>
                  <div>+91 9860465502</div>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <div className="text-blue-500">{">"}</div>
                  <div>Degree:</div>
                  <div>Bachelor</div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <div className="text-blue-500">{">"}</div>
                  <div>Email:</div>
                  <div>akshayghugare94@gmail.com</div>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <div className="text-blue-500">{">"}</div>
                  <div>City:</div>
                  <div>Pune, Maharashtra</div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <div className="text-blue-500">{">"}</div>
                  <div>Freelance:</div>
                  <div>Available</div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-gray-700 dark:text-gray-200">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem. Soluta et harum voluptatem optio quae.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

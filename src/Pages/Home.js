import React from 'react';
import { motion } from 'framer-motion';
import myPic from '../Assets/myPic.jpg';

const Home = () => {
  return (
    <div className=" h-screen  flex justify-center items-center w-full">
      <div className="flex">
        <motion.div
          className="flex justify-center items-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div>
            <div className="text-3xl font-bold">Akshay Ghugare</div>
            <div className="text-xl">
              I am <span className="border border-2 border-t-0 border-l-0 border-r-0">web developer</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img alt="loading" className="rounded-full myPicImage" width={900} height={900} src={myPic} />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

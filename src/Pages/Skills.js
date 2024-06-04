import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'HTML', value: 100 },
  { name: 'CSS', value: 100 },
  { name: 'JavaScript', value: 75 },
  { name: 'React', value: 80 },
  { name: 'Node.js', value: 70 },
];

const Skills = () => {
  return (
    <div className=" h-screen  flex justify-center items-center w-full">
      <div className="p-8 w-full">
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-2xl">Skills</div>
          <div className="border border-blue-500 border-2 border-t-0 border-l-0 border-r-0 w-10 mt-2"></div>
        </motion.div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="p-4 bg-gray-200  rounded-md"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="text-xl">{skill.name}</div>
              <div className="bg-gray-300  rounded-full h-2 mt-2">
                <motion.div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${skill.value}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.value}%` }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from 'react';
import { motion } from 'framer-motion';

const projectData = [
  { title: 'Project 1', description: 'Description of project 1.' },
  { title: 'Project 2', description: 'Description of project 2.' },
  { title: 'Project 3', description: 'Description of project 3.' },
];

const Projects = () => {
  return (
    <div className=" h-screen  flex justify-center items-center w-full">
      <div className="p-8 w-full">
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-2xl">Projects</div>
          <div className="border border-blue-500 border-2 border-t-0 border-l-0 border-r-0 w-10 mt-2"></div>
        </motion.div>
        <div className="mt-6 grid grid-cols-1 gap-4">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="p-4 bg-gray-200  rounded-md"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="text-xl">{project.title}</div>
              <div className="mt-2">{project.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

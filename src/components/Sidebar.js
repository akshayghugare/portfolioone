import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import myPic from '../Assets/myPic.jpg';

const Sidebar = () => {
  const [isActive, setIsActive] = useState('home');

  const handleSetActive = (item) => {
    setIsActive(item);
  };

  return (
    <motion.div
      className="h-screen w-72 bg-gray-100  flex flex-col justify-between"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 75 }}
    >
      <nav className="px-4 py-6">
        <div className="flex justify-center items-center mt-2">
          <motion.div
            className="border p-2 rounded-full bg-[#2c2f3f]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={myPic} alt="loading" className="border border-black rounded-full w-24 h-24" />
          </motion.div>
        </div>
        <div className="flex justify-center items-center my-3">
          <div className="text-xl">Akshay Ghugare</div>
        </div>
        <ul className="flex flex-col gap-2">
          {['home', 'about', 'skills', 'resume', 'projects'].map((item) => (
            <li key={item}>
              <Link to={`/${item}`} onClick={() => handleSetActive(item)}>
                <motion.div
                  className={`rounded-md p-3 cursor-pointer ${
                    isActive === item ? 'bg-[#2c2f3f] ' : 'bg-gray-200 hover:bg-[#2c2f3f] hover:'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t-2 py-4 flex justify-center items-center">
        <div className="flex gap-3">
          {[
            { icon: <FaTwitter size={20} />, name: 'Twitter' },
            { icon: <FaFacebook size={20} />, name: 'Facebook' },
            { icon: <FaInstagram size={20} />, name: 'Instagram' },
            { icon: <FaLinkedin size={20} />, name: 'LinkedIn' },
          ].map((social) => (
            <motion.div
              key={social.name}
              className="border rounded-full p-2 cursor-pointer hover:bg-blue-400"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;

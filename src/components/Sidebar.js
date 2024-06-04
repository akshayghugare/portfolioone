import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {FaTwitter,FaFacebook,FaLinkedin,FaInstagram } from 'react-icons/fa';
import myPic from '../Assets/myPic.jpg'
const Sidebar = () => {
  const location =useLocation()
  const [isActive, setIsActive] = useState('home');

  const handleSetActive = (item) => {
    setIsActive(item);
  };
    return (
      <div className={`h-screen w-[30%] bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-l-0 border-t-0 border-b-0 flex flex-col justify-between`}>
      <nav className='px-2'>
        <div className='flex justify-center items-center mt-2'>
          <div className='border p-2 rounded-full bg-[#2c2f3f]'>
            <img src={myPic} alt='loading' className='border border-black rounded-full w-24 h-24'/>
          </div>
        </div>
        <div className='flex justify-center items-center mb-3'>
          <div className='text-xl'>Akshay Ghugare</div>
        </div>
        <ul className='flex flex-col gap-1'>
          <li>
            <Link to="/home" onClick={() => handleSetActive('home')}>
              <div 
                className={`rounded-md p-2 cursor-pointer ${isActive === 'home' ? 'bg-[#2c2f3f] text-white' : 'bg-gray-200 hover:bg-[#2c2f3f] hover:text-white'}`}
              >
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => handleSetActive('about')}>
              <div 
                className={`rounded-md p-2 cursor-pointer ${isActive === 'about' ? 'bg-[#2c2f3f] text-white' : 'bg-gray-200 hover:bg-[#2c2f3f] hover:text-white'}`}
              >
                About
              </div>
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={() => handleSetActive('skills')}>
              <div 
                className={`rounded-md p-2 cursor-pointer ${isActive === 'skills' ? 'bg-[#2c2f3f] text-white' : 'bg-gray-200 hover:bg-[#2c2f3f] hover:text-white'}`}
              >
                Skills
              </div>
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={() => handleSetActive('resume')}>
              <div 
                className={`rounded-md p-2 cursor-pointer ${isActive === 'resume' ? 'bg-[#2c2f3f] text-white' : 'bg-gray-200 hover:bg-[#2c2f3f] hover:text-white'}`}
              >
                Resume
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => handleSetActive('projects')}>
              <div 
                className={`rounded-md p-2 cursor-pointer ${isActive === 'projects' ? 'bg-[#2c2f3f] text-white' : 'bg-gray-200 hover:bg-[#2c2f3f] hover:text-white'}`}
              >
                Projects
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <div className='border border-r-0 border-l-0 border-b-0 border-shadow flex justify-center items-center'>
        <div className='flex gap-1 my-4'>
          <div className='border rounded-full p-2 cursor-pointer hover:bg-blue-400'><FaTwitter size={20}/></div>
          <div className='border rounded-full p-2 cursor-pointer hover:bg-blue-400'><FaFacebook size={20}/></div>
          <div className='border rounded-full p-2 cursor-pointer hover:bg-blue-400'><FaInstagram size={20}/></div>
          <div className='border rounded-full p-2 cursor-pointer hover:bg-blue-400'><FaLinkedin size={20}/></div>
        </div>
      </div>
    </div>  );
};

export default Sidebar;














// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import myPic from '../Assets/myPic.jpg'
// const Sidebar = () => {
//   const [openMenu, setOpenMenu] = useState(null);

//   const handleMenuClick = (menu) => {
//     setOpenMenu(openMenu === menu ? null : menu);
//   };

//   return (
//     <div className="h-screen w-[20%] pl-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-l-0 border-t-0 border-b-0">
//       <nav>
//         <div className='flex justify-center item-center  mt-2'>
//           <div className='border p-2 rounded-full bg-[#2c2f3f]'>
//           <img src={myPic} alt='loading' className='border border-black rounded-full w-24 h-24'/>
//           </div>
//         </div>
//         <div className='flex justify-center item-center  mt-1'>
//         <div className='text-xl'>Akshay Ghugare</div>
//         </div>

//         <ul>
//           <li>
//             <div onClick={() => handleMenuClick('menu1')} className="w-full text-left cursor-pointer">
//               Menu 1
//             </div>
//             {openMenu === 'menu1' && (
//               <ul className="pl-4">
//                 <li><Link to="/submenu1-1">Submenu 1-1</Link></li>
//                 <li><Link to="/submenu1-2">Submenu 1-2</Link></li>
//               </ul>
//             )}
//           </li>
//           <li>
//             <div onClick={() => handleMenuClick('menu2')} className="w-full text-left cursor-pointer">
//               Menu 2
//             </div>
//             {openMenu === 'menu2' && (
//               <ul className="pl-4">
//                 <li><Link to="/submenu2-1">Submenu 2-1</Link></li>
//                 <li><Link to="/submenu2-2">Submenu 2-2</Link></li>
//               </ul>
//             )}
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

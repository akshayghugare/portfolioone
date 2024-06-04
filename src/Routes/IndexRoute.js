import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Skills from '../Pages/Skills';

const IndexRoute = () => {
  return (
    <div className='w-full'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
      </Routes>
    </div>
  );
};

export default IndexRoute;

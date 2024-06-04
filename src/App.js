import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';

const App = () => {
  

  return (
    <div className="">
      <Router>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-grow bg-gray-100  overflow-y-auto">
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;

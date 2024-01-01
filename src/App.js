import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project4 from './Project4';
import Project4Home from './Project4Home';
import Project4About from './Project4About';
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Project4 />} />
            <Route path='/home' element={<Project4Home/>}></Route>
            <Route path='/about' element={<Project4About/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
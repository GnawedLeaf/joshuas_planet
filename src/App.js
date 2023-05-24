import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/HomePage/HomePageIndex';
import TestPage from './pages/TestPage/TestPageIndex';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const onInstallClick = () => {
    console.log("clicked")

  }
  return (
    <>
      <BrowserRouter>
        {/* <Suspense fallback={<LoadingScreen />}> */}
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/*' element={<Homepage />} />
          <Route path='/tests' element={<TestPage />} />
        </Routes>
        {/* </Suspense> */}
      </BrowserRouter >

    </>
  );
}

export default App;

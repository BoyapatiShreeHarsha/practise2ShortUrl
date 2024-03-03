import { useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
  } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
     </Routes>
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App

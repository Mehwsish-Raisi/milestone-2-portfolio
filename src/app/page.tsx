"use client";

import React, { useEffect } from 'react'
import Hero from "./components/Hero"
import Contact from './components/Contact'
import Projects from './components/Projects'
import About from './components/About'
import AOS from "aos"
import "aos/dist/aos.css"


const Home = () => {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);
  
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
      
    </div>
  )
}

export default Home

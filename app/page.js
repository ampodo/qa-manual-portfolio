'use client';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";

export default function Home() {
  return (
    <>
     <Navbar />
     <Hero/>
    <About/>
    <Expertise/>
    </>  
    
  );
}

'use client';
import { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import HomePage from "../components/Home";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  const [lightOn, setLightOn] = useState(false);

  useEffect(() => {
    // Turn on the light automatically after a delay
    const timer = setTimeout(() => {
      setLightOn(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Disable scroll when light is off, enable when on
    document.body.style.overflow = lightOn ? 'auto' : 'hidden';
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [lightOn]);

  return (
    <div>
      <NavBar visible={lightOn} />
      <HomePage lightOn={lightOn} setLightOn={setLightOn} />
      <Skills />
      <Contact />
    </div>
  );
}

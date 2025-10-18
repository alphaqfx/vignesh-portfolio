'use client'
import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Particles from "@/components/Particles";
import LogoLoop from "@/components/LogoLoop";
import { assets } from "@/assets/assets";


export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const normalize = v => (v && typeof v === 'object' && 'src' in v) ? v.src : v;

  const imageLogos = [
    { src: normalize(isDarkMode?assets.aqx_light:assets.aqx), alt: "Alpha QFX", href: "" },
    { src: normalize(isDarkMode?assets.qs_light:assets.qs), alt: "Quantum Studios", href: "" },
    { src: normalize(isDarkMode?assets.lm_light:assets.lm), alt: "Logo Market", href: "" },
    { src: normalize(isDarkMode?assets.pcs_light:assets.pcs), alt: "Profit Capital Solutions", href: "" },
    { src: normalize(isDarkMode?assets.ferro_light:assets.ferro), alt: "Ferro Modelling", href: "" },
    { src: normalize(isDarkMode?assets.pplus_light:assets.pplus), alt: "Power Plus", href: "" },
    { src: normalize(isDarkMode?assets.lc_light:assets.lc), alt: "Le Ciel", href: "" }
  ];

  useEffect(() => {
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else{
      setIsDarkMode(false);
    }

  }, []);

  useEffect(() => {
    if(isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);

  return (
    <>
    <Particles
    isDarkMode={isDarkMode}
    particleCount={600}
    particleSpread={20}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={false}
    alphaParticles={false}
    disableRotation={false}
    />
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    <Header isDarkMode={isDarkMode} />
    <About isDarkMode={isDarkMode} />
    <Services isDarkMode={isDarkMode} />
    <Portfolio isDarkMode={isDarkMode} />
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={imageLogos}
        speed={75}
        direction="left"
        logoHeight={125}
        gap={50}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor={isDarkMode?"#11001F":"#ffffff"}
        ariaLabel="Technology partners"
      />
    </div>
    <Contact isDarkMode={isDarkMode} />
    <Footer isDarkMode={isDarkMode} />
    </>
  );
}

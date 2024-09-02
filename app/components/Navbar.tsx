"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShopify,faYoutube, faInstagram, faTiktok, faFacebookF } from '@fortawesome/free-brands-svg-icons';


type SectionProps = {
  sections: SectionProp[];
};

export type SectionProp = {
  name: string;
  id: string;
  icon?: any;
  element: any;
};

const Navbar = ({ sections }: SectionProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    localStorage.theme = newIsDarkMode ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newIsDarkMode);
  };


  return (
    <div className="fixed z-10 flex items-center justify-between w-screen h-16 text-white bg-black dark:bg-neutral-800 px-4 md:px-12 navbar">
      {/* Hide the non-social elements on small screens */}
      <div className="navbar-logo hidden sm:flex ml-12 text-xl md:text-3xl grow">
        <a href="#landing">
          <span>Wayne March</span>
        </a>
      </div>

      {/* Social icons container - always visible, but with responsive adjustments */}
      <div className="social-icons flex justify-center items-center grow sm:justify-center md:justify-center lg:justify-center">
        {/* Social icons */}
        {/* <a href="https://jamaicancoder.myshopify.com/" className="mx-2">
          <FontAwesomeIcon icon={faShopify} size="lg" />
        </a> */}
        {/* <a href="https://www.instagram.com/way_ein?igsh=anFoZHNjenNjeDZo" className="mx-2">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href="https://www.tiktok.com/@juniormarch" className="mx-2">
          <FontAwesomeIcon icon={faTiktok} size="lg" />
        </a> */}
        <a href="https://youtube.com/@jamaicancoder6278?si=BkN8poPlOYqcvifQ" className="mx-2">
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </a>
      </div>
      <div className="navbar-sections hidden sm:flex text-lg grow flex-nowrap md:text-2xl justify-evenly">
        {sections.map((sectionProp: SectionProp) => (
          <NavbarBtn key={sectionProp.id} {...sectionProp} />
        ))}
      </div>
      <div className="md:hidden lg:hidden"> {/* Hide on medium and larger screens */}
        <button onClick={toggleTheme} className="p-2">
          {isDarkMode ? '🌙' : '☀️'}
        </button>
      </div>
      {isDarkMode ? (
          <SunBtn setIsDarkMode={setIsDarkMode} />
        ) : (
          <MoonBtn setIsDarkMode={setIsDarkMode} />
        )}
    </div>
  );
};

const NavbarBtn = ({ name, id, icon }: SectionProp) => {
  return (
    <a href={`#${id}`} className="transition duration-300 group">
      <span>{name}</span>
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
    </a>
  );
};

const SunBtn = ({ setIsDarkMode }: any) => {
  function handleLightMode() {
    setIsDarkMode(false);
    localStorage.theme = "light";
  }

  return (
    <button onClick={handleLightMode}>
      <span>☀️</span>
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
    </button>
  );
};

const MoonBtn = ({ setIsDarkMode }: any) => {
  function handleDarkMode() {
    setIsDarkMode(true);
    localStorage.theme = "dark";
  }

  return (
    <button onClick={handleDarkMode}>
      <span>🌙</span>
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
    </button>
  );
};

export default Navbar;

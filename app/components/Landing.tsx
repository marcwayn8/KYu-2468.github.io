"use client";

import React, { useState, lazy, Suspense,useEffect } from "react";
import ContactButton from "./Button/ContactButton";
import "./Landing.css";
import { TypeAnimation } from "react-type-animation";
import Calendly from "./Calendly";
import LoadingTriangle from "./Loading/LoadingTriangle";
import ButtonWrapper from "./Button/ButtonWrapper";
const profileImg = "./img/profile-img.jpg";
const KevinAvatar = lazy(() => import("./KevinAvatar"));
import { infos,quotes } from "../data/about";
const image5 = "./img/5.jpg";
import RecipeModal from './Modal';
import ackeeAndSaltfishPdf from '../data/recipes/ackee_saltfish.pdf';
import ovenfriedChickenpdf from '../data/recipes/over_fried.pdf';



const Landing = () => {
  const [is3DModelActivated, setIs3DModelActivated] = useState(false);

  function handle3DModelActivation() {
    setIs3DModelActivated(!is3DModelActivated);
  }

  const [currentPdf, setCurrentPdf] = useState<string | null>(null);

  const openPdf = (pdfName: string) => {
    const pdfMap: { [key: string]: any } = {
      'ackeeAndSaltfish': ackeeAndSaltfishPdf,
      'ovenFriedChicken': ovenfriedChickenpdf,
    
    };
   
  setCurrentPdf(pdfMap[pdfName]);
};
  
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);

  const toggleRecipeModal = () => {
    setIsRecipeModalOpen(!isRecipeModalOpen);
  };
  const sequence = [
    ...infos.map((info) => [`${info.key}: ${info.value} 🧠`, 2000]),
    ...quotes.map((quote) => [quote + "🧐", 2000] )
  ];
  return (
    <>
      <div className="flex flex-col items-center h-full pt-24 md:flex-row">
        <div className="flex items-center justify-center flex-grow w-1/2 h-full">
          {is3DModelActivated ? (
            <Suspense fallback={<LoadingTriangle />}>
              <KevinAvatar />
            </Suspense>
          ) : (
            <Image />
          )}
        </div>
        <div className="flex flex-col items-center w-1/2 h-full px-2 pt-12 text-2xl">
          <div className="h-9">
            <TypeAnimation
              className="text-xl md:text-3xl"
              sequence={[
                "👋 Hey there!",
                2000,
                "👈 I'm Wayne",
                2000,
                "I'm driven and enthusiastic 🧠",
                1000,
                "I'm a full stack engineer 📱",
                2000,
                "I'm fueled by curiosity and passion 🧐",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-col items-center w-1/2 mt-12">
            <button onClick={handle3DModelActivation}>
              <ButtonWrapper>
                {is3DModelActivated ? "My Photo" : "My 3D Model"}
              </ButtonWrapper>
            </button>
            <ContactButton
              text="Linkedin"
              textColor="text-white"
              buttonColor="bg-sky-600"
              linkURL="https://www.linkedin.com/in/waynemarch/"
            />

            <ContactButton
              text="GitHub"
              textColor="text-white"
              buttonColor="bg-black dark:bg-neutral-800"
              linkURL="https://github.com/marcwayn8"
            />
    <ContactButton
              text="Spotify"
              textColor="text-blue"
              buttonColor="bg-black dark:bg-neutral-800"
              linkURL="https://open.spotify.com/show/2SGKYo1m3F74IDzeFb7sh3?si=112d2be093c34efb"
            />
            <ContactButton
              text="Medium"
              textColor="text-blue"
              buttonColor="bg-black dark:bg-neutral-800"
              linkURL="https://medium.com/@juniormarch48"
            />
    
            <Calendly />
           <ButtonWrapper> <button onClick={toggleRecipeModal} className="recipe-button" >
                Favorite Recipes
               </button></ButtonWrapper> 
          
          </div>
          <div className="flex flex-col items-center w-1/2 h-full px-2 pt-12 text-2xl">
           <div className="h-9">
       <TypeAnimation
         className="text-xl md:text-3xl"
         sequence={[
          ...infos.map((info) => `${info.key}: ${info.value} 🧠`, 2000), ...quotes.map((quote) => quote + "🧐", 2000)
        ]}
         wrapper="span"
         cursor={true}
         repeat={Infinity}
       />
 </div>
          </div>
        </div>
      </div>
      <br>
      </br>
      <br>
      </br>
     
      {isRecipeModalOpen && (
  <RecipeModal title="Jamaicancoder's Favorite Recipes" closeModal={() => { setIsRecipeModalOpen(false); setCurrentPdf(null); }}>
    <div>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {dropdownOpen ? '▲' : '▼'} Recipes
      </button>
      {dropdownOpen && (
        <div className="dropdown-content">
        <button onClick={() => {setCurrentPdf(ackeeAndSaltfishPdf)}} className="recipe-item">Ackee and Saltfish</button>
          <button onClick={() => {setCurrentPdf(ovenfriedChickenpdf)}} className="recipe-item">Oven Fried Chicken</button>
        </div>
      )}
      {currentPdf && (
  <div className="pdf-viewer">
    <iframe src={currentPdf} width="100%" height="500px" style={{ border: "none" }} title="PDF Viewer"></iframe>
    <button onClick={() => setCurrentPdf(null)} className="pdf-close-button">Close PDF</button>
  </div>
)}
    </div>
  </RecipeModal>
)}
    </>
  );
};

const Image = () => {
  const images = [profileImg,image5]; // Define your image sources
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the current image index to display the next image
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds (adjust this value as needed)

    return () => {
      // Clear the interval when the component unmounts to avoid memory leaks
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-40 md:h-60 xl:h-3/4 md:ml-8">
      <img
        className="h-40 rounded-full shadow-2xl shadow-black xl:h-96 md:h-72 dark:shadow-white"
        src={images[currentImageIndex]}
        alt="profile"
      />
    </div>
  );
};

export default Landing;

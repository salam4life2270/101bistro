// import React from 'react'
// import Image from 'next/image'

// const Slider = () => {
//   return (
//     <div id='gallery'>
//         <h1>Gallery</h1>
//         <div>
//             <Image src='/fish.jpeg' alt='/' width='1440' height='600' objectFit='cover' />
//             <Image src='/pizza.jpeg' alt='/' width='1440' height='600' objectFit='cover'/>
//         </div>

//     </div>
//   )
// }

// export default Slider
'use client'
import React, { useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    './morgan1.jpeg',
    './morgan2.jpeg',
    './bistro.jpeg',
    '/bazilika.jpeg',
    '/pizza.jpeg',
    '/fishsign.jpeg',
    '/kebab.jpeg',
    './bistro.jpeg',
    '/kebab1.jpeg',
    './bistro.jpg',
    './ovenfire.jpeg',
    './woodfire.jpeg'
    // Add more image URLs here
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const goToNext = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };
  

  const onFirstSlide = currentSlide === 0;
  const onLastSlide = currentSlide >= images.length - 1;
  console.log(onLastSlide)
  return (
    <div id='gallery' className="relative p-8 ">
      <h1 className="text-center text-3xl mb-4">Gallery</h1>
      <div className="relative w-full h-64 md:h-96 lg:h-120 xl:h-140 overflow-hidden">
        <div
          className="w-full h-full flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              width="400"
              height="700"
             /* className={`w-400 h-700 object-cover`}*/
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center justify-center">
        <button
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
          onClick={goBack} disabled={onFirstSlide}
        >
          &lt;
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center justify-center">
        <button
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
          onClick={goToNext} disabled={onLastSlide}
          >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;

import React from 'react'
import Image from 'next/image'

const Imagee = () => {
  return (
    <div className="relative">
  <Image
    src="/woltbg.jpeg" // Replace with your image URL
    alt="Restaurant Image"
    width="1940"
    height="300"
    objectFit="cover"
    className="object-cover h-70 md:h-80 lg:h-96 xl:h-120 2xl:h-140"
  />

  {/* Overlay with a semi-transparent background */}
  <div className="absolute inset-0 bg-black opacity-30"></div>

  {/* Content */}
  <div className="absolute inset-y-0 left-0 w-full flex flex-col items-start justify-center text-white px-1 md:px-8">
    <div className="flex flex-row justify-start ">
      <h1 className="text-2xl mx-1">Eat.</h1>
      <h1 className="text-2xl mx-1">Drink.</h1>
      <h1 className="text-2xl mx-1">Relax.</h1>
    </div>
    <p className="text-2xl font-cursive italic mx-1">Treat yourself</p>
  </div>
</div>

    
  )
}

export default Imagee
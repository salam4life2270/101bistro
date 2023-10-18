import React from 'react'
import Image from 'next/image'

const Jobs = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-2 pt-48">
       <div className=" z-10">
      <h1 className="text-center text-4xl mb-4" >Job Openings</h1>
    <p className="text-xl text-center font-cursive italic mx-4">Join Our Team</p>
      <p className="text-lg mb-4 text-center p-4 ">
        Kindly send your CV to 101b@101bistro.is
      </p>
      </div>

      <Image
    src="/bistrobg.jpeg" // Replace with your image URL
    alt="Dish Images"
    width="1940"
    height="300"
    objectFit="cover"
    className="object-cover w-full h-80 md:h-80 lg:h-96 xl:h-120 2xl:h-140 pb-20"
  />
    </div>
  );
};

export default Jobs
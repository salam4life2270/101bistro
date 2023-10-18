import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="flex min-h-screen flex-col items-center text-center pt-48 p-2 z-10">
      <h1 className="text-center text-3xl mb-4" >About Us</h1>
      <p className="text-lg mb-4">
        Welcome to our restaurant! We are passionate about serving delicious food and creating a
        warm, welcoming atmosphere for our guests.
      </p>
      <p className="text-lg mb-4">
        Our team of talented chefs use only the finest ingredients to craft mouthwatering dishes
        that will leave you coming back for more. From succulent fish to delectable desserts,
        we have something to satisfy every palate.
      </p>
      <p className="text-lg mb-4">
        We take pride in providing exceptional service and ensuring that every guest has a memorable
        dining experience. Whether you're here for a casual meal with friends or a special occasion,
        we look forward to serving you.
      </p>
      <p className="text-lg">
        Thank you for choosing us, and we can't wait to have you dine with us!
      </p>
      <Image
    src="/bistrobg.jpeg" // Replace with your image URL
    alt="Dish Images"
    width="1940"
    height="300"
    objectFit="cover"
    className="object-cover w-full h-70 md:h-80 lg:h-96 xl:h-120 2xl:h-140 mt-4"
  />
    </div>
  );
};

export default AboutUs;

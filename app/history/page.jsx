import React from 'react';
import Image from 'next/image';

const History = () => {
  return (
    <div className="flex min-h-screen flex-col items-center text-center pt-4 p-2 z-10">
      <h1 className="text-center text-3xl mb-4" >Our brief history</h1>
      <p className="text-lg mb-4">
      The roots of 101 Bistro trace back to 1999. A small kebab shop named "Kebabhúsid," meaning
       "kebab house" in Icelandic, was opened on the corner of Lækjatorg, introducing kebabs to 
       Iceland for the first time.
      </p>
      <p className="text-lg mb-4">
      After a significant fire in the adjacent house in 2007, Kebabhúsid relocated to its current
       location on Austurstræti, where 101 Bistro is situated today.
      </p>
      <p className="text-lg mb-4">
      In 2018, the restaurant underwent a name change to "Bazilika." Kebabs were no longer offered,
       but new varieties of Middle Eastern dishes were introduced, complemented by our signature
        fish & chips and wood-fired brick oven pizzas.
      </p>
      <p className="text-lg mb-4">
      In 2021, the restaurant underwent renovations and was rebranded as 101 Bistro. The updated menu
       included new Mediterranean delicacies, making them available for the first time in Iceland.
      </p>
      <p className="text-lg">
      Today, we take pride in serving what is likely the finest fish & chips in Iceland, in addition
       to our traditional thin-crust pizzas baked in the wood fire, and a selection of Mediterranean
        specialties.
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

export default History;

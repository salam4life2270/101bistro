import React from 'react'

const About = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center h-screen mb-12 relative bg-fixed bg-center bg-cover custom-img">
  {/* Background Image */}
  {/* You can use an <img> tag here if needed */}

  <div className="absolute inset-0 bg-black opacity-60"></div>
  {/* Overlay with a semi-transparent background */}
  
  <div className="relative z-10 text-white text-center">
    <h1 className="text-5xl font-bold mb-6">Eat.</h1>
    <h1 className="text-4xl font-bold mb-6">Drink.</h1>
    <h1 className="text-2xl font-bold mb-6">Relax.</h1>
    <p className="text-lg italic">Treat yourself</p>
  </div>
</div>

        <div>
            <h1>Introducing new meals to Iceland since 1999...</h1>
            <p>Roots of 101 bistro goes back to 1999. Small kebab shop was opened on the corner of Lækjatorg by the name of Kebabhúsid, which means kebab house in Icelandic, and kebabs were introduced to Iceland for the first time.

After a big fire in the adjacent house in 2007 Kebabhúsid was moved to it's new location on Austurstræti, where 101 bistro stands today.

In 2018 restaurant was re-named as Bazilika where kebabs were no longer available but new types of middle eastern dishes were served along with our signature fish & chips and wood fired brick oven pizzas.

In 2021 the restaurant is renovated and re-named as 101 bistro. New Mediterranean delicacies were added to the new menu and made available for the first time in Iceland.

Today we are proud to serve probably the best fish&chips in Iceland along with our traditional thin crust pizzas baked in the wood fire and specials from Mediterranean cuisine.  </p>
        </div>
    </div>
  )
}

export default About
import React from 'react';
import './menus.css';

const Menus = () => {
  return (
    <div className="flex min-h-screen flex-col items-center text-center pt-48 p-2 z-20 w-full h-full  ">
      <div>
        <h1 className="text-center text-4xl mb-4">Our Menu</h1>
        <h1 className="text-center italic text-2xl mb-4">For allergy/intolerance information please call us: +354 588-0015</h1>
      </div>

      <div className="starters">
        <h2>STARTERS AND SIDES</h2> 
      </div>

  
      <div className='container'>
        <div className='week'>
          <div className='row'>



        <div className="starter">
          <img src="./newcaprese.jpg" alt="" className="w-25 h-26 " />
          <div className="description">
            <h3 className='text-2xl'>Caprese Salad</h3>
            <p>Fresh mozzarella, tomatoes, basil, olive oil and balsamic vinegar</p>
            <p className='text-2xl'>2.450 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt="" class="w-25 h-25" />
          <div class="description">
            <h3 className='text-2xl mb-2'>Calamari</h3>
            <p className='mb-5'>Battered squid rings served with homemade tartar sauce</p>
            <p className='text-2xl'>1.950 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./garlicb.jpeg" alt="" class="w-25 h-25" />
          <div class="description">
            <h3 className='text-2xl mb-2'>Garlic Bread</h3>
            <p className='mb-5'>Freshly baked in the brick oven with mozzarella cheese, served with marinara sauce</p>
            <p className='text-2xl'>1.550 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./garlicb.jpeg" alt="" class="w-25 h-25" />
          <div class="description">
            <h3 className='text-2xl mb-2'>Mozzarella Sticks</h3>
            <p className='mb-5'>Deep fried mozzarella sticks, served with fries and marinara sauce</p>
            <p className='text-2xl'>2.250 kr.</p>
          </div>
        </div>

          </div>
          
       

        </div>
      </div>

    </div>




  )
}

export default Menus
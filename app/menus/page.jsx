import React from 'react';
import './menus.css';

const Menus = () => {
  return (
    <div className="flex min-h-screen flex-col items-center text-center pt-48 p-2 z-20 w-full h-full  text-white ">
      <div>
        <h1 className="text-center text-4xl mb-2">Our Menu</h1>
        <h1 className="text-center italic text-2xl mb-4">For allergy/intolerance information please call us: +354 588-0015</h1>
      </div>

      <div className="text-center text-3xl">
        <h2>STARTERS AND SIDES</h2> 
      </div>

  
      <div className='container'>
        

          <div className='row'>
        <div className="starter ">
          <img src="./newcaprese.jpg" alt="" className=" w-88 h-48 " />
          <div className="description">
            <h3 className='text-2xl'>Caprese Salad</h3>
            <p>Fresh mozzarella, tomatoes, basil, olive oil and balsamic vinegar</p>
            <p className='text-2xl'>2.450 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt=""  className=" w-88 h-48 "/>
          <div class="description">
            <h3 className='text-2xl mb-2'>Calamari</h3>
            <p className='mb-5'>Battered squid rings served with homemade tartar sauce</p>
            <p className='text-2xl'>1.950 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./garlicb.jpeg" alt="" className=" w-88 h-48 "   />
          <div class="description">
            <h3 className='text-2xl mb-2'>Garlic Bread</h3>
            <p className='mb-5'>Freshly baked in the brick oven with mozzarella cheese, served with marinara sauce</p>
            <p className='text-2xl'>1.550 kr.</p>
          </div>
        </div>


          </div>

          <div className='row'>

        <div class="starter">
          <img src="./garlicb.jpeg" alt=""  className=" w-88 h-48 "  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Mozzarella Sticks</h3>
            <p className='mb-5'>Deep fried mozzarella sticks, served with fries and marinara sauce</p>
            <p className='text-2xl'>2.250 kr.</p>
          </div>
        </div>

        <div className="starter">
          <img src="./onion.jpeg" alt=""  className=" w-88 h-48 "  />
          <div className="description">
            <h3 className='text-2xl'>Baba Ganoush</h3>
            <p>Charred eggplants, yogurt, walnuts, garlic and olive oil</p>
            <p className='text-2xl'>1.650 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt=""  className=" w-88 h-48 "  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Hummus</h3>
            <p className='mb-5'>Mashed chickpeas, tahini, olive oil</p>
            <p className='text-2xl'>1.650 kr.</p>
          </div>
        </div>


          </div>

          <div className='row'>


        <div class="starter">
          <img src="./onion.jpeg" alt=""  className="w-25 h-25"  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Onion Rings</h3>
            <p className='mb-5'>Battered onion rings served with homemade marinara sauce</p>
            <p className='text-2xl'>1.550 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./fries.jpeg" alt=""  className="w-25 h-25"  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Fries</h3>
            <p className='mb-2'>Large</p>
            <p className='text-2xl'>1.350 kr.</p>
            <p className='mb-2'>Small</p>
            <p className='text-2xl'>850 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./onion.jpeg" alt=""  className="w-25 h-25"  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Sauces</h3>
            <p className='mb-5'>Icelandic cocktail, mayonnaise, homemade tartar</p>
            <p className='text-2xl'>450 kr.</p>
          </div>
        </div>
          
          </div>
          
       

       
      </div>

      <div className="text-center text-3xl">
        <h2>SALADS</h2> 
      </div>

      <div className='container'>
        

          <div className='row'>
        <div className="starter ">
          <img src="./newcaprese.jpg" alt="" className=" w-88 h-48 " />
          <div className="description">
            <h3 className='text-2xl'>Caprese Salad</h3>
            <p>Fresh mozzarella, tomatoes, basil, olive oil and balsamic vinegar</p>
            <p className='text-2xl'>2.450 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt=""  className=" w-88 h-48 "/>
          <div class="description">
            <h3 className='text-2xl mb-2'>Calamari</h3>
            <p className='mb-5'>Battered squid rings served with homemade tartar sauce</p>
            <p className='text-2xl'>1.950 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./garlicb.jpeg" alt="" className=" w-88 h-48 "   />
          <div class="description">
            <h3 className='text-2xl mb-2'>Garlic Bread</h3>
            <p className='mb-5'>Freshly baked in the brick oven with mozzarella cheese, served with marinara sauce</p>
            <p className='text-2xl'>1.550 kr.</p>
          </div>
        </div>


          </div>

          <div className='row'>

        <div class="starter">
          <img src="./garlicb.jpeg" alt=""  className=" w-88 h-48 "  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Mozzarella Sticks</h3>
            <p className='mb-5'>Deep fried mozzarella sticks, served with fries and marinara sauce</p>
            <p className='text-2xl'>2.250 kr.</p>
          </div>
        </div>

        <div className="starter">
          <img src="./onion.jpeg" alt=""  className=" w-88 h-48 "  />
          <div className="description">
            <h3 className='text-2xl'>Baba Ganoush</h3>
            <p>Charred eggplants, yogurt, walnuts, garlic and olive oil</p>
            <p className='text-2xl'>1.650 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt=""  className=" w-88 h-48 "  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Hummus</h3>
            <p className='mb-5'>Mashed chickpeas, tahini, olive oil</p>
            <p className='text-2xl'>1.650 kr.</p>
          </div>
        </div>


          </div>

          <div className='row'>


        <div class="starter">
          <img src="./onion.jpeg" alt=""  className="w-25 h-25"  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Onion Rings</h3>
            <p className='mb-5'>Battered onion rings served with homemade marinara sauce</p>
            <p className='text-2xl'>1.550 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./fries.jpeg" alt=""  className="w-25 h-25"  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Fries</h3>
            <p className='mb-2'>Large</p>
            <p className='text-2xl'>1.350 kr.</p>
            <p className='mb-2'>Small</p>
            <p className='text-2xl'>850 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./onion.jpeg" alt=""  className="w-25 h-25"  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Sauces</h3>
            <p className='mb-5'>Icelandic cocktail, mayonnaise, homemade tartar</p>
            <p className='text-2xl'>450 kr.</p>
          </div>
        </div>
          
          </div>
          
       

       
      </div>

      <div className="text-center text-3xl">
        <h2>MAIN DISHES</h2> 
      </div>

      <div className='container'>
        

          <div className='row'>
        <div className="starter ">
          <img src="./newcaprese.jpg" alt="" className=" w-88 h-48 " />
          <div className="description">
            <h3 className='text-2xl'>Caprese Salad</h3>
            <p>Fresh mozzarella, tomatoes, basil, olive oil and balsamic vinegar</p>
            <p className='text-2xl'>2.450 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt=""  className=" w-88 h-48 "/>
          <div class="description">
            <h3 className='text-2xl mb-2'>Calamari</h3>
            <p className='mb-5'>Battered squid rings served with homemade tartar sauce</p>
            <p className='text-2xl'>1.950 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./garlicb.jpeg" alt="" className=" w-88 h-48 "   />
          <div class="description">
            <h3 className='text-2xl mb-2'>Garlic Bread</h3>
            <p className='mb-5'>Freshly baked in the brick oven with mozzarella cheese, served with marinara sauce</p>
            <p className='text-2xl'>1.550 kr.</p>
          </div>
        </div>


          </div>

          <div className='row'>

        <div class="starter">
          <img src="./garlicb.jpeg" alt=""  className=" w-88 h-48 "  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Mozzarella Sticks</h3>
            <p className='mb-5'>Deep fried mozzarella sticks, served with fries and marinara sauce</p>
            <p className='text-2xl'>2.250 kr.</p>
          </div>
        </div>

        <div className="starter">
          <img src="./onion.jpeg" alt=""  className=" w-88 h-48 "  />
          <div className="description">
            <h3 className='text-2xl'>Baba Ganoush</h3>
            <p>Charred eggplants, yogurt, walnuts, garlic and olive oil</p>
            <p className='text-2xl'>1.650 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt=""  className=" w-88 h-48 "  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Hummus</h3>
            <p className='mb-5'>Mashed chickpeas, tahini, olive oil</p>
            <p className='text-2xl'>1.650 kr.</p>
          </div>
        </div>


          </div>

          <div className='row'>


        <div class="starter">
          <img src="./onion.jpeg" alt=""  className="w-25 h-25"  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Onion Rings</h3>
            <p className='mb-5'>Battered onion rings served with homemade marinara sauce</p>
            <p className='text-2xl'>1.550 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./fries.jpeg" alt=""  className="w-25 h-25"  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Fries</h3>
            <p className='mb-2'>Large</p>
            <p className='text-2xl'>1.350 kr.</p>
            <p className='mb-2'>Small</p>
            <p className='text-2xl'>850 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./onion.jpeg" alt=""  className="w-25 h-25"  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Sauces</h3>
            <p className='mb-5'>Icelandic cocktail, mayonnaise, homemade tartar</p>
            <p className='text-2xl'>450 kr.</p>
          </div>
        </div>
          
          </div>
          
       

       
      </div>

      <div className="text-center text-3xl">
        <h2>BURGERS</h2> 
      </div>

      <div className='container'>
        

          <div className='row'>
        <div className="starter ">
          <img src="./newcaprese.jpg" alt="" className=" w-88 h-48 " />
          <div className="description">
            <h3 className='text-2xl'>Caprese Salad</h3>
            <p>Fresh mozzarella, tomatoes, basil, olive oil and balsamic vinegar</p>
            <p className='text-2xl'>2.450 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt=""  className=" w-88 h-48 "/>
          <div class="description">
            <h3 className='text-2xl mb-2'>Calamari</h3>
            <p className='mb-5'>Battered squid rings served with homemade tartar sauce</p>
            <p className='text-2xl'>1.950 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./garlicb.jpeg" alt="" className=" w-88 h-48 "   />
          <div class="description">
            <h3 className='text-2xl mb-2'>Garlic Bread</h3>
            <p className='mb-5'>Freshly baked in the brick oven with mozzarella cheese, served with marinara sauce</p>
            <p className='text-2xl'>1.550 kr.</p>
          </div>
        </div>


          </div>

          <div className='row'>

        <div class="starter">
          <img src="./garlicb.jpeg" alt=""  className=" w-88 h-48 "  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Mozzarella Sticks</h3>
            <p className='mb-5'>Deep fried mozzarella sticks, served with fries and marinara sauce</p>
            <p className='text-2xl'>2.250 kr.</p>
          </div>
        </div>

        <div className="starter">
          <img src="./onion.jpeg" alt=""  className=" w-88 h-48 "  />
          <div className="description">
            <h3 className='text-2xl'>Baba Ganoush</h3>
            <p>Charred eggplants, yogurt, walnuts, garlic and olive oil</p>
            <p className='text-2xl'>1.650 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt=""  className=" w-88 h-48 "  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Hummus</h3>
            <p className='mb-5'>Mashed chickpeas, tahini, olive oil</p>
            <p className='text-2xl'>1.650 kr.</p>
          </div>
        </div>


          </div>

          <div className='row'>


        <div class="starter">
          <img src="./onion.jpeg" alt=""  className="w-25 h-25"  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Onion Rings</h3>
            <p className='mb-5'>Battered onion rings served with homemade marinara sauce</p>
            <p className='text-2xl'>1.550 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./fries.jpeg" alt=""  className="w-25 h-25"  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Fries</h3>
            <p className='mb-2'>Large</p>
            <p className='text-2xl'>1.350 kr.</p>
            <p className='mb-2'>Small</p>
            <p className='text-2xl'>850 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./onion.jpeg" alt=""  className="w-25 h-25"  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Sauces</h3>
            <p className='mb-5'>Icelandic cocktail, mayonnaise, homemade tartar</p>
            <p className='text-2xl'>450 kr.</p>
          </div>
        </div>
          
          </div>
          
       

       
      </div>

      <div className="text-center text-3xl">
        <h2>PIZZAS</h2> 
      </div>

      <div className='container'>
        

          <div className='row'>
        <div className="starter ">
          <img src="./newcaprese.jpg" alt="" className=" w-88 h-48 " />
          <div className="description">
            <h3 className='text-2xl'>Caprese Salad</h3>
            <p>Fresh mozzarella, tomatoes, basil, olive oil and balsamic vinegar</p>
            <p className='text-2xl'>2.450 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt=""  className=" w-88 h-48 "/>
          <div class="description">
            <h3 className='text-2xl mb-2'>Calamari</h3>
            <p className='mb-5'>Battered squid rings served with homemade tartar sauce</p>
            <p className='text-2xl'>1.950 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./garlicb.jpeg" alt="" className=" w-88 h-48 "   />
          <div class="description">
            <h3 className='text-2xl mb-2'>Garlic Bread</h3>
            <p className='mb-5'>Freshly baked in the brick oven with mozzarella cheese, served with marinara sauce</p>
            <p className='text-2xl'>1.550 kr.</p>
          </div>
        </div>


          </div>

          <div className='row'>

        <div class="starter">
          <img src="./garlicb.jpeg" alt=""  className=" w-88 h-48 "  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Mozzarella Sticks</h3>
            <p className='mb-5'>Deep fried mozzarella sticks, served with fries and marinara sauce</p>
            <p className='text-2xl'>2.250 kr.</p>
          </div>
        </div>

        <div className="starter">
          <img src="./onion.jpeg" alt=""  className=" w-88 h-48 "  />
          <div className="description">
            <h3 className='text-2xl'>Baba Ganoush</h3>
            <p>Charred eggplants, yogurt, walnuts, garlic and olive oil</p>
            <p className='text-2xl'>1.650 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt=""  className=" w-88 h-48 "  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Hummus</h3>
            <p className='mb-5'>Mashed chickpeas, tahini, olive oil</p>
            <p className='text-2xl'>1.650 kr.</p>
          </div>
        </div>


          </div>

          <div className='row'>


        <div class="starter">
          <img src="./onion.jpeg" alt=""  className="w-25 h-25"  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Onion Rings</h3>
            <p className='mb-5'>Battered onion rings served with homemade marinara sauce</p>
            <p className='text-2xl'>1.550 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./fries.jpeg" alt=""  className="w-25 h-25"  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Fries</h3>
            <p className='mb-2'>Large</p>
            <p className='text-2xl'>1.350 kr.</p>
            <p className='mb-2'>Small</p>
            <p className='text-2xl'>850 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./onion.jpeg" alt=""  className="w-25 h-25"  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Sauces</h3>
            <p className='mb-5'>Icelandic cocktail, mayonnaise, homemade tartar</p>
            <p className='text-2xl'>450 kr.</p>
          </div>
        </div>
          
          </div>
          
       

       
      </div>

      <div className="text-center text-3xl">
        <h2>DESSERTS</h2> 
      </div>

      <div className='container'>
        

          <div className='row'>
        <div className="starter ">
          <img src="./newcaprese.jpg" alt="" className=" w-88 h-48 " />
          <div className="description">
            <h3 className='text-2xl'>Caprese Salad</h3>
            <p>Fresh mozzarella, tomatoes, basil, olive oil and balsamic vinegar</p>
            <p className='text-2xl'>2.450 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt=""  className=" w-88 h-48 "/>
          <div class="description">
            <h3 className='text-2xl mb-2'>Calamari</h3>
            <p className='mb-5'>Battered squid rings served with homemade tartar sauce</p>
            <p className='text-2xl'>1.950 kr.</p>
          </div>
        </div>

      
          </div>
      </div>

      <div className="text-center text-3xl">
        <h2>KIDS MENU</h2> 
      </div>

      <div className='container'>
        

          <div className='row'>
        <div className="starter ">
          <img src="./newcaprese.jpg" alt="" className=" w-88 h-48 " />
          <div className="description">
            <h3 className='text-2xl'>Caprese Salad</h3>
            <p>Fresh mozzarella, tomatoes, basil, olive oil and balsamic vinegar</p>
            <p className='text-2xl'>2.450 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt=""  className=" w-88 h-48 "/>
          <div class="description">
            <h3 className='text-2xl mb-2'>Calamari</h3>
            <p className='mb-5'>Battered squid rings served with homemade tartar sauce</p>
            <p className='text-2xl'>1.950 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt=""  className=" w-88 h-48 "/>
          <div class="description">
            <h3 className='text-2xl mb-2'>Calamari</h3>
            <p className='mb-5'>Battered squid rings served with homemade tartar sauce</p>
            <p className='text-2xl'>1.950 kr.</p>
          </div>
        </div>


      
          </div>
      </div>

      <div className="text-center text-3xl">
        <h2>ALCOHOLIC DRINKS</h2> 
      </div>

      <div className='container'>
        

          <div className='row'>
        <div className="starter ">
          <img src="./newcaprese.jpg" alt="" className=" w-88 h-48 " />
          <div className="description">
            <h3 className='text-2xl'>Caprese Salad</h3>
            <p>Fresh mozzarella, tomatoes, basil, olive oil and balsamic vinegar</p>
            <p className='text-2xl'>2.450 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt=""  className=" w-88 h-48 "/>
          <div class="description">
            <h3 className='text-2xl mb-2'>Calamari</h3>
            <p className='mb-5'>Battered squid rings served with homemade tartar sauce</p>
            <p className='text-2xl'>1.950 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt=""  className=" w-88 h-48 "/>
          <div class="description">
            <h3 className='text-2xl mb-2'>Calamari</h3>
            <p className='mb-5'>Battered squid rings served with homemade tartar sauce</p>
            <p className='text-2xl'>1.950 kr.</p>
          </div>
        </div>


      
          </div>
      </div>

      <div className="text-center text-3xl">
        <h2>SOFT DRINKS</h2> 
      </div>

      <div className='container'>
        

          <div className='row'>
        <div className="starter ">
          <img src="./newcaprese.jpg" alt="" className=" w-88 h-48 " />
          <div className="description">
            <h3 className='text-2xl'>Caprese Salad</h3>
            <p>Fresh mozzarella, tomatoes, basil, olive oil and balsamic vinegar</p>
            <p className='text-2xl'>2.450 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt=""  className=" w-88 h-48 "/>
          <div class="description">
            <h3 className='text-2xl mb-2'>Calamari</h3>
            <p className='mb-5'>Battered squid rings served with homemade tartar sauce</p>
            <p className='text-2xl'>1.950 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt=""  className=" w-88 h-48 "/>
          <div class="description">
            <h3 className='text-2xl mb-2'>Calamari</h3>
            <p className='mb-5'>Battered squid rings served with homemade tartar sauce</p>
            <p className='text-2xl'>1.950 kr.</p>
          </div>
        </div>


      
          </div>
      </div>


      <div className="text-center text-3xl">
        <h2>HOT DRINKS</h2> 
      </div>

      <div className='container'>
        

          <div className='row'>
        <div className="starter ">
          <img src="./newcaprese.jpg" alt="" className=" w-88 h-48 " />
          <div className="description">
            <h3 className='text-2xl'>Caprese Salad</h3>
            <p>Fresh mozzarella, tomatoes, basil, olive oil and balsamic vinegar</p>
            <p className='text-2xl'>2.450 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt=""  className=" w-88 h-48 "/>
          <div class="description">
            <h3 className='text-2xl mb-2'>Calamari</h3>
            <p className='mb-5'>Battered squid rings served with homemade tartar sauce</p>
            <p className='text-2xl'>1.950 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt=""  className=" w-88 h-48 "/>
          <div class="description">
            <h3 className='text-2xl mb-2'>Calamari</h3>
            <p className='mb-5'>Battered squid rings served with homemade tartar sauce</p>
            <p className='text-2xl'>1.950 kr.</p>
          </div>
        </div>


      
          </div>
      </div>

    </div>




  )
}

export default Menus
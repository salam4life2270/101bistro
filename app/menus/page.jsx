import React from 'react';
import './menus.css';

const Menus = () => {
  return (
    <div className="flex min-h-screen flex-col items-center text-center pt-48 p-2 z-20 w-full h-full  text-white ">
      <div>
        <h1 className="text-center text-4xl mb-2">Our Menu</h1>
        <h1 className="text-center italic mb-4">For allergy/intolerance information please call us: +354 588-0015</h1>
      </div>

      <div className="text-center text-2xl">
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

      <div className="text-center text-2xl">
        <h2>SALADS</h2> 
      </div>

      <div className='container'>
        
<div>

          <div className='row'>
        <div className="starter ">
          <img src="./newcaprese.jpg" alt="" className=" w-88 h-48 " />
          <div className="description">
            <h3 className='text-2xl'>House Salad</h3>
            <p>Mixed greens, tomatoes, red onions, olive oil and lemon dressing</p>
            <p className='text-2xl'>2.350 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./greeks.jpeg" alt=""  className=" w-88 h-48 "/>
          <div class="description">
            <h3 className='text-2xl'>Greek Salad</h3>
            <p>Mixed greens, tomatoes, red onions, feta cheese, green olives, olive oil and lemon dressing</p>
            <p className='text-2xl'>2.750 kr.</p>
          </div>
        </div>
</div>
<div>
  <p>add falafel balls: 950 kr.</p>
  <p>add chicken and bacon: 1050 kr.</p>
  <p>add lamb: 1550 kr.</p>
</div>
      

        


          </div>

         
          
       

       
      </div>

      <div className="text-center text-3xl">
        <h2>MAIN DISHES</h2> 
      </div>

      <div className='container'>
        

          <div className='row'>
        <div className="starter ">
          <img src="./fish.jpeg" alt="" className=" w-88 h-48 " />
          <div className="description">
            <h3 className='text-2xl'>Fish and Chips</h3>
            <p>200 grams daily caught Icelandic fish served with fries, side salad and homemade tartar sauce</p>
            <p className='text-2xl'>3.650 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./lambp.jpeg" alt=""  className=" w-88 h-48 "/>
          <div class="description">
            <h3 className='text-2xl mb-2'>Lamb Plate</h3>
            <p>Free range Icelandic lamb served with rice, side salad, homemade flat bread, garlic yogurt and chili sauce</p>
            <p className='text-2xl'>4.450 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./chickenp.jpeg" alt="" className=" w-88 h-48 "   />
          <div class="description">
            <h3 className='text-2xl mb-2'>Chicken Plate</h3>
            <p className='mb-5'>Grilled chicken served with rice, side salad, homemade flat bread, garlic yogurt and chili sauce</p>
            <p className='text-2xl'>3.850 kr.</p>
          </div>
        </div>


          </div>

          <div className='row'>

        <div class="starter">
          <img src="./falafelp.jpeg" alt=""  className=" w-88 h-48 "  />
          <div class="description">
            <h3 className='text-2xl mb-2'>Falafel Plate</h3>
            <p className='mb-5'>Falafel balls served with rice, side salad, feta cheese, homemade flat bread, garlic yogurt and chili sauce</p>
            <p className='text-2xl'>3.250 kr.</p>
          </div>
        </div>

        <div className="starter">
          <img src="./onion.jpeg" alt=""  className=" w-88 h-48 "  />
          <div className="description">
            <h3 className='text-2xl'>Mediterranean Platter</h3>
            <p>Spicy chicken-vegetable casserole served with rice, eggplant yogurt dip, onion salad and homemade flat bread</p>
            <p className='text-2xl'>4.150 kr.</p>
          </div>
        </div>

        

          </div>

          
          
       

       
      </div>

      <div className="text-center text-2xl">
        <h2>BURGERS</h2> 
      </div>

      <div className='container'>
        <h2>Please note that all burgers are served with fries</h2>

          <div className='row'>
        <div className="starter ">
          <img src="./bigk.jpeg" alt="" className=" w-88 h-48 " />
          <div className="description">
            <h3 className='text-2xl'>Big Kahuna</h3>
            <p>Classic cheeseburger with beef patty, cheese, tomato, lettuce and sauce</p>
            <p className='text-2xl'>2.750 kr.</p>
          </div>
          <div>
            <p>Double your burger: 950 kr.</p>
            <p>Add bacon: 450 kr.</p>
            <p>Add egg: 450 kr.</p>
            <p>Add jalapenos: 450 kr.</p>
            <p>Add pineapple: 450 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./calamari.jpeg" alt=""  className=" w-88 h-48 "/>
          <div class="description">
            <h3 className='text-2xl mb-2'>Oh My Cod!</h3>
            <p className='mb-5'>Our famous deep fried battered fish, tomato, lettuce and homemade tartar sauce</p>
            <p className='text-2xl'>2.850 kr.</p>
          </div>
        </div>
        

          </div>

         

         
          
       

       
      </div>

      <div className="text-center text-3xl">
        <h2>PIZZAS</h2> 
      </div>

      <div className='container'>
      <h2>Please note that all our 15" pizzas are TAKE AWAY only</h2>

          <div className='row'>
        <div className="starter ">
          <img src="./cheese.jpeg" alt="" className=" w-88 h-48 " />
          <div className="description">
            <h3 className='text-2xl'>Cheese</h3>
            <p>Marinara, mozzarella</p>
            <p className='text-2xl'>11" 2.750 kr.</p>
            <p className='text-2xl'>15" 3.150 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./pepperoni.jpeg" alt=""  className=" w-88 h-48 "/>
          <div class="description">
            <h3 className='text-2xl mb-2'>Pepperoni</h3>
            <p className='mb-5'>Marinara, mozzarella, pepperoni</p>
            <p className='text-2xl'>11" 3.250 kr.</p>
            <p className='text-2xl'>15" 4.150 kr.</p>
          </div>
        </div>

        <div class="starter">
          <img src="./hawaii.jpeg" alt="" className=" w-88 h-48 "   />
          <div class="description">
            <h3 className='text-2xl mb-2'>Hawaiian</h3>
            <p className='mb-5'>Marinara, mozzarella, ham, pineapples</p>
            <p className='text-2xl'>11" 2.950 kr.</p>
            <p className='text-2xl'>15" 3.750 kr.</p>
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
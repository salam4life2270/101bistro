
import Imagee from './image/page'
import Slider from './slider/slider'
import History from './history/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 mb-10 w-full relative text-white ">
     <Imagee />
     <Slider />
     <History />
      <h1 className="text-center text-2xl mb-4 z-10 p-8" >101 Bistro</h1>
      <p className="text-center text-lg mb-4 z-10">101b@101bistro.is</p>
      <div>
  <h2 className="text-center mt-4 mb-2 text-2xl z-10">Check Out Our Reviews</h2>
  <div className='flex justify-between pt-0 pr-14 pl-14'>
  <a href="https://tripadvisor.com/Restaurant_Review-g189970-d14005802-Reviews-101_bistro-Reykjavik_Capital_Region.html" target="_blank" rel="noopener noreferrer" className="pr-4">
  <img src="/tripadvisor-icon.png" alt="TripAdvisor" className="w-10 h-10 rounded-full" />
</a>
<a href="https://www.instagram.com/101bistro.reykjavik/" target="_blank" rel="noopener noreferrer" className="pr-4">
  <img src="/instagram-icon.jpeg" alt="Instagram" className="w-10 h-10 rounded-full"/>
</a>
<a href="https://www.facebook.com/101bistro.reykjavik" target="_blank" rel="noopener noreferrer">
  <img src="/facebook-icon.png" alt="Facebook" className="w-10 h-10 rounded-full" />
</a>

  </div>
</div>
    </main>
  )
}

import Image from "next/image";



const Order = () => {
  return (
    <div className="flex min-h-screen flex-col pt-48 items-center text-center p-2 z-20 text-white ">
      <h1 className="text-center text-4xl mb-4" >Online order(s)</h1>
      <p className="text-lg mb-4">
      We're not accepting online orders. To order online, Please contact Wolt to complete the order by clicking here{' '}
  <a
    href="https://wolt.com/en/isl/reykjavik/restaurant/101-bistro"
    target="_blank" // Opens in a new browser tab
    rel="noopener noreferrer" // Recommended for security
    className="text-blue-500 hover:underline hover:text-blue-700 cursor-pointer"
  >
    Wolt
  </a>{' '}.
      </p>
      <Image
    src="/bistrobg.jpeg"
    alt="Dish Images"
    width="1940"
    height="300"
    objectFit="cover"
    className="object-cover w-full h-70 md:h-80 lg:h-96 xl:h-120 2xl:h-140 mt-40"
  />
    </div>
  );
};

export default Order;

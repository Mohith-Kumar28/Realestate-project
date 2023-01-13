import Chat from "./Chat"

 
const Hero = () => {
    return (
        <>

<div id="hero" className="text-gray-400 bg-gray-900 body-font">
  <div className=" mx-auto flex px-5 sm:px-20 py-28 lg:py-12 lg:flex-row flex-col items-center">
    <div className="lg:flex-grow lg:w-1/2 lg:pr-24  flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center">
      <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white font-heading"><span className="text-yellow-400">Fast Communication</span> Leads To More
        <br className="hidden lg:inline-block"/> Customers
      </h1>
      <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white font-bold bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
      </div>
    </div>
    <div className="lg:max-w-lg  lg:w-1/2 w-5/6 relative">
      {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/> */}
      <div className="bg-yellow-500/30 w-full h-full absolute rounded-lg  top-3 -left-3 "></div>
      <div className="bg-yellow-500/20 w-full h-full absolute rounded-lg  top-6 -left-6 "></div>
      <div className="bg-yellow-500/5 w-full h-full absolute rounded-lg  top-9 -left-9 "></div>
      <div className="relative z-10">
      <Chat/>
      </div>
    </div>
  </div>
</div>

            
        </>
    )
}

export default Hero

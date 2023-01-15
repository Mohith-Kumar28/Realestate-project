
import Image from "next/image"
import { motion } from "framer-motion"

const AfterGrid = () => {
    return (
        <div className="bg-gray-900 py-24">
          {/* <motion.div
   initial={{  opacity: 0}}
   whileInView={{ opacity: 1 }}
   viewport={{ once: true }}
   transition={{ duration: 0.8 }}>
        <section className="text-gray-900 rounded-t-[100px] md:rounded-t-[200px] bg-gray-800 body-font pt-6 md:pt-32 pb-0 mb-52 lg:pt-44  ">
  <div className="container mx-auto flex px-5 pt-24 items-center justify-center flex-col">
  <motion.div
   initial={{  y: 70 }}
   whileInView={{ y: 0 }}
   viewport={{ once: true }}
   transition={{ duration: 0.8 }}
  className="text-center lg:w-2/3 w-full relative z-10 drop-shadow-2xl">
      <motion.h1
   initial={{  y: 20 }}
   whileInView={{ y: 0 }}
   viewport={{ once: true }}
   transition={{ duration: 0.8 }} className="title-font md:text-7xl text-3xl md:mb-4 font-medium text-yellow-400 font-heading">1000+ companies</motion.h1>
      <p className="font-bold md:text-xl text-md text-white">are already using Apartment Ocean!</p>
    
    </motion.div>
    <img className="w-full mx-10 opacity-5  -mt-28 md:-mt-60 lg:-mt-80 object-cover object-center rounded" alt="hero" src="/assets/companies.svg"/>
    
  </div>
</section>
  </motion.div> */}





<section className="text-gray-400  bg-gray-900 body-font">
<div className="flex justify-center">
            <h1 className="title-font sm:text-4xl text-center text-3xl mb-10 font-medium font-heading text-white max-w-lg  ">Get Started In
        <br className="lg:hidden inline-block "/><span className
        ="text-yellow-400"> 3 Simple Steps</span>
      </h1>
      </div>
  <div className="container px-5 pb-24 mx-auto flex flex-wrap">
    
    <div className="flex relative pt-5 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-[80%] sm:h-[70%] md:h-3/5 mt-auto w-1 bg-gray-800 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <motion.div
   initial={{  scale: 0.6 }}
   whileInView={{ scale:1 }}
   viewport={{ once: true }}
   transition={{ type: "spring", stiffness: 400, damping: 10,delay:0.2 }} className="flex-shrink-0 w-24 h-24 bg-gray-800 text-yellow-400 rounded-full inline-flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.9} stroke="currentColor" className="w-11">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>

        </motion.div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-white mb-1 text-xl">Email Us</h2>
          <p className="leading-relaxed">Just let us know your interest and get a hassle-free experience answering your customer’s queries.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <motion.div
   initial={{  scale: 0.6 }}
   whileInView={{ scale:1 }}
   viewport={{ once: true }}
   transition={{ type: "spring", stiffness: 400, damping: 10,delay:0.2 }} className="flex-shrink-0 w-24 h-24 bg-gray-800 text-yellow-400 rounded-full inline-flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.9} stroke="currentColor" className="w-11">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg>

        </motion.div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-white mb-1 text-xl">Pick a Chatbot</h2>
          <p className="leading-relaxed">Tailored chatbot specifically for your business plan, customise the replies, and deliver the special client experience you desire.</p>
        </div>
      </div>
    </div>
  <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-[25%] md:h-2/5  mb-auto w-1 bg-gray-800 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <motion.div
   initial={{  scale: 0.6 }}
   whileInView={{ scale:1 }}
   viewport={{ once: true }}
   transition={{ type: "spring", stiffness: 400, damping: 10,delay:0.2,delay:0.2 }} className="flex-shrink-0 w-24 h-24 bg-gray-800 text-yellow-400 rounded-full inline-flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.9} stroke="currentColor" className="w-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>

        </motion.div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-white mb-1 text-xl">Expand Business  </h2>
          <p className="leading-relaxed">Your website is now accessible 24/7! When your users need it, Oakley will always be there to interact with them and provide assistance.
</p>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="text-gray-100 relative pt-5   body-font">
  {/* <div className="bg-gray-500 absolute rounded-t-full z-0 w-full h-full top-0 left-0"></div> */}
  <div className="bg-[url('/assets/messagePattern.svg')] h-full  rounded-t-full z-10 relative">
  <div className="container relative z-20 max-w-4xl mx-auto flex px-10 py-4 pt-44 md:flex-row-reverse  w-full  flex-col items-center">
   
    <motion.div
   initial={{  opacity: 0 }}
   whileInView={{ opacity:1 }}
   viewport={{ once: true }}
   transition={{ duration:0.8 }} className="lg:flex-grow md:w-1/2  lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-heading">The new customer <br className=""/> behavioural pattern 

        <br className=""/><span className="text-yellow-400">is messaging. </span>
      </h1>
      <p className="mb-8 leading-relaxed">Messaging is quickly becoming the preferred way for customers to reach out and get their questions answered. Every day, millions of customers reach out through messaging to connect with businesses. Get a leg up on your competition by tapping into this new trend in customer behaviour with Oakley. With Oakley, you can quickly respond to customer inquiries and stay ahead of the competition.
</p>
    
    </motion.div>
    <motion.div
   initial={{  y: 80,opacity:0 }}
   whileInView={{ y: 0,opacity:1 }}
   viewport={{ once: true }}
   transition={{ duration: 0.8 }} className=" lg:w-2/3  md:w-2/5 w-5/6 md:mb-0">
      {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/> */}
      <Image
      // loader={myLoader}
      src="/assets/chatting.svg"
      alt="Picture of the author"
      width={400}
      height={400}
    />
    </motion.div>
  </div>
  </div>
</section>
    </div>)
}

export default AfterGrid

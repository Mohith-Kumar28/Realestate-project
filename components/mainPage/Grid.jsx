import { motion } from "framer-motion"

const Grid = () => {
    return (
        <section className="text-gray-400 px-4 bg-gray-900 body-font">
  <motion.div
   initial={{  opacity: 0 }}
   whileInView={{ opacity: 1.5 }}
   viewport={{ once: true }}
   transition={{ duration: 1 }}
  className="container px-5 py-24 mx-auto">
    {/* <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Master Cleanse Reliac Heirloom</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div> */}
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2  p-4 cursor-pointer ">
        <motion.div 
        whileHover={{
          scale: 1.1,
          transition:{ type: "spring", stiffness: 800, damping: 10 }
        }}
        className="flex relative h-full bg-gray-800 rounded-lg hover:shadow-lg hover:shadow-white/10">
          {/* <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/> */}
          <h2 className="absolute flex justify-center  w-full text-lg title-font font-medium text-yellow-400 mt-6 px-6 ">24/7 availability</h2>
          <div className="justify-center self-center flex absolute inset-0 w-full h-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-16 w-16 -mb-11 justify-center self-center flex">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

</div>

          <div className="px-8 py-6 rounded-xl relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            {/* <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">THE SUBTITLE</h2> */}
            <h1 className="title-font text-lg font-medium text-white mb-3">24/7 availability</h1>
            <p className="leading-relaxed">Users receive assistance anytime they need it along their journey.</p>
          </div>
        </motion.div>
      </div>
    
      <div className="lg:w-1/3 sm:w-1/2  p-4 cursor-pointer ">
        <motion.div 
        whileHover={{
          scale: 1.1,
          transition:{ type: "spring", stiffness: 800, damping: 10 }
        }} className="flex relative h-full bg-gray-800 rounded-lg hover:shadow-lg hover:shadow-white/10">
          {/* <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/> */}
          <h2 className="absolute flex justify-center  w-full text-lg title-font font-medium text-yellow-400 mt-6 px-6 ">Generating leads quickly</h2>
          <div className="justify-center self-center flex absolute inset-0 w-full h-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-16 w-16 -mb-11 justify-center self-center flex">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
</svg>


</div>

          <div className="px-8 py-6 rounded-xl relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 ">
            {/* <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">THE SUBTITLE</h2> */}
            <h1 className="title-font text-lg font-medium text-white mb-3">Generating leads quickly</h1>
            <p className="leading-relaxed">After every conversation with a user, a new lead is immediately produced.</p>
          </div>
        </motion.div>
      </div>
    
      <div className="lg:w-1/3 sm:w-1/2  p-4 cursor-pointer">
        <motion.div 
        whileHover={{
          scale: 1.1,
          transition:{ type: "spring", stiffness: 800, damping: 10 }
        }} className="flex relative h-full bg-gray-800 rounded-lg hover:shadow-lg hover:shadow-white/10">
          {/* <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/> */}
          <h2 className="absolute flex justify-center  w-full text-lg title-font font-medium text-yellow-400 mt-6 px-6 ">Easy setup</h2>
          <div className="justify-center self-center flex absolute inset-0 w-full h-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-16 w-16 -mb-11 justify-center self-center flex">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
</svg>


</div>

          <div className="px-8 py-6 rounded-xl relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            {/* <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">THE SUBTITLE</h2> */}
            <h1 className="title-font text-lg font-medium text-white mb-3">Easy setup</h1>
            <p className="leading-relaxed"> No prior experience with tech applications is necessary.
</p>
          </div>
        </motion.div>
      </div>
    
      <div className="lg:w-1/3 sm:w-1/2  p-4 cursor-pointer">
        <motion.div 
        whileHover={{
          scale: 1.1,
          transition:{ type: "spring", stiffness: 800, damping: 10 }
        }} className="flex relative h-full bg-gray-800 rounded-lg hover:shadow-lg hover:shadow-white/10">
          {/* <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/> */}
          <h2 className="absolute flex justify-center  w-full text-lg title-font font-medium text-yellow-400 mt-6 px-6 ">Smooth Interaction</h2>
          <div className="justify-center self-center flex absolute inset-0 w-full h-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-16 w-16 -mb-11 justify-center self-center flex">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
</svg>


</div>

          <div className="px-8 py-6 rounded-xl relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            {/* <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">THE SUBTITLE</h2> */}
            <h1 className="title-font text-lg font-medium text-white mb-3">Smooth Interaction</h1>
            <p className="leading-relaxed">Perfect for any website experience and phone-compatible.</p>
          </div>
        </motion.div>
      </div>
    
      <div className="lg:w-1/3 sm:w-1/2  p-4 cursor-pointer">
        <motion.div 
        whileHover={{
          scale: 1.1,
          transition:{ type: "spring", stiffness: 800, damping: 10 }
        }} className="flex relative h-full text-gray-800 bg-yellow-400 rounded-lg ">
          {/* <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/> */}
          <h2 className="absolute flex justify-center text-center w-full text-lg title-font font-bold  mt-5 px-10 ">Increase conversion by automating customer care! </h2>
          <div className="justify-center self-center flex absolute inset-0 w-full h-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-16 w-16 -mb-14 justify-center self-center flex">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 004.875-4.875V12m6.375 5.25a4.875 4.875 0 01-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v13.5a1.5 1.5 0 001.5 1.5zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 013.182 3.182zM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 113.182-3.182z" />
</svg>


</div>


     
        </motion.div>
      </div>
    
      <div className="lg:w-1/3 sm:w-1/2  p-4 cursor-pointer">
        <motion.div 
        whileHover={{
          scale: 1.1,
          transition:{ type: "spring", stiffness: 800, damping: 10 }
        }} className="flex relative h-full bg-gray-800 rounded-lg hover:shadow-lg hover:shadow-white/10">
         
          <h2 className="absolute flex justify-center  w-full text-lg title-font font-medium text-yellow-400 mt-6 px-6 ">Tailored knowledge base </h2>
          <div className="justify-center self-center flex absolute inset-0 w-full h-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-16 w-16 -mb-11 justify-center self-center flex">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
</svg>


</div>

          <div className="px-8 py-6 rounded-xl relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
           
            <h1 className="title-font text-lg font-medium text-white mb-3">Tailored knowledge base </h1>
            <p className="leading-relaxed"> Give users precise information in the manner that you would like them to see it.</p>
          </div>
        </motion.div>
      </div>
    
   
     </div>
  </motion.div>
</section>
    )
}

export default Grid

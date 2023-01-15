import Image from "next/image"
import { motion } from "framer-motion"
const AfterHero = () => {
    return (<div className="bg-gray-900 py-16">
        <section className="text-gray-400 relative  body-font  py-20 px-16">
          <div className="bg-repeat absolute w-full h-full top-0 left-0  bg-[url('/assets/messagePattern.svg')] "></div>
          <div className="relative z-10">
            <div className="flex justify-center">
            <h1 className="title-font sm:text-4xl text-center text-3xl mb-10 font-medium font-heading text-white max-w-lg flex flex-col ">Turn Visitors Into Customers
        <br className="hidden lg:inline-block"/><span> With <span className="text-yellow-400 inline-block"> Less Effort</span></span>
      </h1>
      </div>
  <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
       
    <motion.div
     initial={{  x: -100 }}
     whileInView={{ x: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8 }}
    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/> */}
      <Image src="/assets/Laptop.png" width={600} height={600} />

    </motion.div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Before they sold out
        <br className="hidden lg:inline-block"/>readymade gluten
      </h1> */}
      <motion.p
   initial={{  y: 30,opacity:0 }}
   whileInView={{ y: 0 ,opacity:1}}
   viewport={{ once: true }}
   transition={{ duration: 0.8 }} className="mb-8 leading-relaxed">Oakley is a revolutionary virtual customer representative powered by artificial intelligence (AI). It helps Property Management Companies (PMCs) and property owners increase customer conversion rates and reduce customer service costs. Oakley uses natural language processing and understanding to understand customer’s questions and provide accurate, personalized answers. This AI-powered customer service solution also helps PMCs and property owners save time by automating repetitive tasks like answering frequently asked questions. Oakley can be used for a variety of use cases, from providing 24/7 support to helping customers find the best apartment for their needs. With Oakley, PMCs and property owners can ensure that their customers get the best possible service, no matter the time or location.</motion.p>
      {/* <div className="flex justify-center">
     
        <button className=" inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
      </div> */}
    </div>
  </div>

  </div></section>
</div> )
}

export default AfterHero

import Chat from "./Chat"
import { motion} from "framer-motion"
import Link from "next/link"
 
const Hero = () => {
    return (
        <>

<div id="hero" className="text-gray-400 bg-gray-900 body-font">
  <div className=" mx-auto flex px-5 sm:px-20 py-28 lg:py-12 lg:flex-row flex-col items-center">
    <motion.div
    initial={{  x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}

    className="lg:flex-grow lg:w-1/2 lg:pr-24  flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center">
      <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white font-heading"><span className="text-yellow-400">Speedy communication</span> engages more 
        <br className="hidden lg:inline-block"/> clients.
      </h1>
      <p className="mb-8 leading-relaxed">Make sure your potential customers have access to the information they need at the right time</p>
      <div className="flex justify-center">
        <motion.button
           whileHover={{ scale: 1.2 }}
           whileTap={{ scale: 0.9 }}
           transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="inline-flex  font-bold bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-white text-gray-900 rounded text-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.6} stroke="currentColor" className="w-5 mr-2 mt-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
      </svg>
      
         <Link href="mailto:joancampeny5@gmail.com">  Mail Us</Link> </motion.button>
        {/* <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button> */}
      </div>
    </motion.div>
    <motion.div
     initial={{  y: 100 }}
     whileInView={{ y: 0.2 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8 }}
    className="lg:max-w-lg  lg:w-2/5 w-5/6 relative">
      {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/> */}
      <div className="bg-yellow-500/30 w-full h-full absolute rounded-lg  top-3 -left-3 "></div>
      <div className="bg-yellow-500/20 w-full h-full absolute rounded-lg  top-6 -left-6 "></div>
      <div className="bg-yellow-500/5 w-full h-full absolute rounded-lg  top-9 -left-9 "></div>
      <div className="relative z-10">
      <Chat/>
      </div>
    </motion.div>
  </div>
</div>

            
        </>
    )
}

export default Hero

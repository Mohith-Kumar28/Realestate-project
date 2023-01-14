import { motion } from "framer-motion"
import Image from "next/image"
const Projects = () => {
    return (
        <div className="bg-gray-900 ">
            <div className=" flex justify-center pt-20 pb-6">
            <h1 className="title-font sm:text-5xl text-center text-3xl mb-10 font-bold font-heading text-white max-w-lg flex flex-col ">Best-In-Class 
        <br className="hidden lg:inline-block"/><span className="text-yellow-400 inline-block"> Chatbots</span>
      </h1>
      </div>
<div className="divide-y-2 divide-gray-800 mx-16">
            <section className="text-gray-400 body-font">
  <div className=" flex px-16  pb-24 md:flex-row flex-col items-center">
    <motion.div
   initial={{  y: 70 }}
   whileInView={{ y: 0 }}
   viewport={{ once: true }}
   transition={{ duration: 0.8 }} className="border-4 border-gray-600 relative rounded-2xl lg:max-w-sm lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/> */}
      <Image className="rounded-xl z-10 relative" src="/assets/chatScreenShots/chat1.jpg" width="700" height="700"/>
      <div className="absolute w-full h-full bg-yellow-400/50 top-4 -right-3 rounded-xl"></div>
    </motion.div>

    <motion.div
   initial={{  x: 60,opacity:0 }}
   whileInView={{ x: 0 ,opacity:1}}
   viewport={{ once: true }}
   transition={{ duration: 0.8 }} className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">AO Long-Term 
        <br className="hidden lg:inline-block"/>Deluxe
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
     
    </motion.div>
  </div>
</section>
     
     
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center">
    <motion.div
   initial={{  x: 0,opacity:0 }}
   whileInView={{ x: 60 ,opacity:1}}
   viewport={{ once: true }}
   transition={{ duration: 0.8 }} class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">AO Short-Term <br className="hidden lg:inline-block"/>Deluxe</h1>
      <p class="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
  </motion.div>
    <motion.div
   initial={{  y: 70 }}
   whileInView={{ y: 0 }}
   viewport={{ once: true }}
   transition={{ duration: 0.8 }} class="border-4 border-gray-600 relative rounded-2xl lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
    <Image className="rounded-xl z-10 relative" src="/assets/chatScreenShots/chat2.jpg" width="700" height="700"/>
      <div className="absolute w-full h-full bg-yellow-400/50 top-4 right-3 rounded-xl"></div>
  </motion.div>
    </div>
</section>


            <section className="text-gray-400 body-font">
  <div className="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center">
    <motion.div
   initial={{  y: 70 }}
   whileInView={{ y: 0 }}
   viewport={{ once: true }}
   transition={{ duration: 0.8 }} className="border-4 border-gray-600 relative rounded-2xl lg:max-w-sm lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
    <Image className="rounded-xl z-10 relative" src="/assets/chatScreenShots/chat3.jpg" width="700" height="700"/>
      <div className="absolute w-full h-full bg-yellow-400/50 top-4 -right-3 rounded-xl"></div>
    </motion.div>
    <motion.div
   initial={{  x: 60,opacity:0 }}
   whileInView={{ x: 0 ,opacity:1}}
   viewport={{ once: true }}
   transition={{ duration: 0.8 }} className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">AO Single Property
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
     
    </motion.div>
  </div>
</section>
</div>
        </div>
    )
}

export default Projects

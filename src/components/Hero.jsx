import image from "/public/image.jpg"
import { motion } from "framer-motion";

const Hero = () => {

  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">

        <motion.div
        initial={{y: -50,opacity: 0}}
        animate={{y: 0, opacity:1}}
        transition={{duration:0.8, delay:0.2}}
        >
          
        </motion.div>

        <motion.div 
        initial={{y: 50,opacity: 0}}
        animate={{y: 0, opacity:1}}
        transition={{duration:0.8, delay:0.2}}

        className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
        <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">Harshad Kadam</h1>
        <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl">Web | Android Developer</h3>

        <p className="md:text-base text-pretty_text-sm text-gray-400">
        Currently pursuing my Master’s in Computer Science from Department of Computer Science(PUCSD), Savitribai Phule Pune University.<br></br>
        I have a strong interest in Web and Android development, which I improved through various academic and personal projects.<br></br>
        During my studies, I worked on several projects such as a Drawing Application, Mess Attendance System, and Banking System.<br></br>
        Apart from academics, I am a Kabaddi player and a graphic designer.
        <br></br><br></br>
        Thank you!

        </p>

        </motion.div>
      </div>
    </div>
  )
}

export default Hero
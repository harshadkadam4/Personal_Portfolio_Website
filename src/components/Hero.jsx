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
        Currently pursuing my Master's in Computer Science from Savitribai Phule Pune University. I have a strong interest in Web and Android Development,which I have improved through various academic and personal projects.

During my Bachelor's and Master's studies, I worked on several projects, such as an Image Editor App, a Mess Attendance App, and a Text Editor. For instance, the Mess Attendance App is an Android-based solution I developed to simplify the attendance process for my mess, making it more efficient.

        </p>

        </motion.div>
      </div>
    </div>
  )
}

export default Hero
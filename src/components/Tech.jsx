import { BiLogoAndroid, BiLogoCss3, BiLogoFirebase, BiLogoGit, BiLogoGithub, BiLogoHtml5, BiLogoJava, BiLogoJavascript, BiLogoReact, BiLogoSpringBoot } from "react-icons/bi"
import {color, motion} from "framer-motion";
import { SiMysql } from "react-icons/si";

const Tech = () => {

  const variants = {
    hidden:{opacity:0, y:50},
    visible:{opacity:1, y:0}
  }



  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      <motion.h1 
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}

      className="text-4xl font-light text-white md:text-6xl">Technologies</motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}
      className="flex flex-col items-center">
          <BiLogoHtml5 className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/> 
          <h1 className="text-white text-center ">HTML</h1>
        </motion.div>

        <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}
      className="flex flex-col items-center">
          <BiLogoCss3 className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
          <h1 className="text-white text-center ">CSS</h1>
        </motion.div>

        <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}
      className="flex flex-col items-center">
          <BiLogoReact className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
          <h1 className="text-white text-center ">ReactJS</h1>
        </motion.div>

        <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}
      className="flex flex-col items-center">
          <BiLogoSpringBoot className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
          <h1 className="text-white text-center ">SpringBoot</h1>
        </motion.div>


        <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}
      className="flex flex-col items-center">
          <BiLogoJava className="cursor-pointer text-[80px] text-red-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
          <h1 className="text-white text-center ">Java</h1>
        </motion.div>

        <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}
      className="flex flex-col items-center">
          <BiLogoAndroid className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
          <h1 className="text-white text-center ">Android</h1>
        </motion.div>

        

        <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}
      className="flex flex-col items-center">
          <BiLogoGit className="cursor-pointer text-[80px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
          <h1 className="text-white text-center ">Git</h1>
        </motion.div>

        <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}
      className="flex flex-col items-center">
          <BiLogoGithub className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
          <h1 className="text-white text-center ">Github</h1>
        </motion.div>

        

        <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}
      className="flex flex-col items-center">
          <BiLogoFirebase className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
          <h1 className="text-white text-center ">Firebase</h1>
        </motion.div>

        <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}
      className="flex flex-col items-center">
          <SiMysql className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
          <h1 className="text-white text-center ">MySQL</h1>
        </motion.div>
      
        
      </div>
    </div>
  )
}

export default Tech
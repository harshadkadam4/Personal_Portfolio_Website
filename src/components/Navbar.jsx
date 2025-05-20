import { useState } from "react"
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs"
import { BiMenu, BiX } from "react-icons/bi";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  }


  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
        
        <a href="#home" className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"></a>
    

    <ul className="hidden md:flex gap-10">
      <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Home</li>
      </a>

      <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Tech</li>
      </a>

      <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Projects</li>
      </a>

      <a href="#education" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Education</li>
      </a>

      <a target="_blank" href="https://drive.google.com/file/d/1lSbkOCeR3S9KYpS2JCxXMxdoo1ogKJ6h/view?usp=sharing" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Resume</li>
      </a>

      <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Contact</li>
      </a>

    </ul>

    <ul className="hidden md:flex gap-5">
      
      <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
       <a href="https://www.linkedin.com/in/harshad-kadam-462349241/"><BsLinkedin/></a> 
      </li>

      <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
       <a href="https://github.com/harshadkadam4"><BsGithub/></a>
      </li>

    </ul>

    {isOpen ? (
      <BiX className="block md:hidden text-4xl" onClick={menuOpen}/>
    ) : (
      <BiMenu className="block md:hidden text-4xl" onClick={menuOpen}/>
    )}

    {isOpen && (
      <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 ${isOpen ? "block" : "hidden"}`}>

        <ul className="flex flex-col gap-8">
        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Home</li>
      </a>

      <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Tech</li>
      </a>

      <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Projects</li>
      </a>

      <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Contact</li>
      </a>
        </ul>

      <ul className="flex flex-wrap gap-5">
      <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
        <BsYoutube/>
      </li>

      <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
        <BsLinkedin/>
      </li>

      <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
        <BsGithub/>
      </li>

      <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
        <BsTwitter/>
      </li>

    </ul>

      </div>
    )}


    </nav>
  ) 
}

export default Navbar
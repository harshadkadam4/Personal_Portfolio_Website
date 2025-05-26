import { useState, useEffect } from "react"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu
  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  // Automatically close menu when screen size is larger than md (768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-6 md:px-16 py-6 text-white backdrop-blur-md">
      {/* Logo */}
      <a href="#home" className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100">
        {/* Add logo text here if needed */}
      </a>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-10">
        {["home", "tech", "projects", "education", "contact"].map((section) => (
          <a key={section} href={`#${section}`} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li className="capitalize">{section}</li>
          </a>
        ))}
        <a target="_blank" href="https://drive.google.com/file/d/1lSbkOCeR3S9KYpS2JCxXMxdoo1ogKJ6h/view?usp=sharing" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Resume</li>
        </a>
      </ul>

      {/* Desktop Social Links */}
      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <a href="https://www.linkedin.com/in/harshad-kadam-462349241/" target="_blank"><BsLinkedin /></a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
          <a href="https://github.com/harshadkadam4" target="_blank"><BsGithub /></a>
        </li>
      </ul>

      {/* Hamburger / Close icon */}
      {isOpen ? (
        <BiX className="block md:hidden text-4xl cursor-pointer" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl cursor-pointer" onClick={menuOpen} />
      )}

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 md:hidden">
          <ul className="flex flex-col gap-8">
            {["home", "tech", "projects", "resume", "contact"].map((section) =>
              section === "resume" ? (
                <a key={section} target="_blank" href="https://drive.google.com/file/d/1lSbkOCeR3S9KYpS2JCxXMxdoo1ogKJ6h/view?usp=sharing" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                  <li className="capitalize">Resume</li>
                </a>
              ) : (
                <a key={section} href={`#${section}`} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                  <li className="capitalize">{section}</li>
                </a>
              )
            )}
          </ul>

          <ul className="flex gap-5">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
              <a href="https://www.linkedin.com/in/harshad-kadam-462349241/" target="_blank"><BsLinkedin /></a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
              <a href="https://github.com/harshadkadam4" target="_blank"><BsGithub /></a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

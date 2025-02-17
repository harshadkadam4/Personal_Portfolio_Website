import image1 from "/public/1.png"
import image2 from "/public/2.png"
import image3 from "/public/3.png"
import image4 from "/public/4.png"
import image5 from "/public/5.png"

import { motion } from "framer-motion"

const projectsData = [
  {
    image: image1,
    title: "Image Editor",
    description: "The Android-Based Image Editor App is a versatile tool for creating and editing images on mobile devices. This feature-rich application includes a pen tool for drawing with adjustable stroke size and color customization, an eraser for precise corrections, and options to add images seamlessly. Users can also insert editable and movable textboxes, clear all contents with a single action, and save their drawings or edited images.",
    technologies: ["Android", "Java", "XML"]
  },
  {
    image: image2,
    title: "Mess Attendance App",
    description: "The Mess Attendance App simplifies attendance tracking for mess services. Built with Java, Firebase Realtime Database, and XML, the app enables users to record attendance efficiently. Students can mark their attendance status (e.g., ”Present” or ”Absent”) directly through the app. The platform stores attendance records securely in the cloud and provides an organized list view of attendees for administrators. The use of a real-time database ensures instant updates and seamless data synchronization, making the attendance process more efficient.",
    technologies: ["Android", "Java", "Firebase Realtime Database","XML"]
  },
  {
    image: image3,
    title: "JSON Data Extractor Tool",
    description: "Developed a program to automate the importing of cricket match data from JSON files into an SQLite database. The program efficiently fetches files from a specified folder, processes the data, and integrates it into the database, handling both file operations and data insertion.",
    technologies: ["Python", "SQLite", "JSON"]
  },
  {
    image: image3,
    title: "Personal Portfolio",
    description: "Developed a program to automate the importing of cricket match data from JSON files into an SQLite database. The program efficiently fetches files from a specified folder, processes the data, and integrates it into the database, handling both file operations and data insertion.",
    technologies: ["Python", "SQLite", "JSON"]
  },
  {
    image: image4,
    title: "Text Editor",
    description: "Developed a command-line text editor that allows users to add and delete lines of text, display file contents, and perform search and replace operations. The editor also includes a feature to save changes, ensuring that all modifications are stored efficiently.",
    technologies: ["C"]
  }
]

const ProjectsCard = ({project}) => {
  return (
    <ScrolledReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img src={project.image} className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"/>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">

          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {
              project.technologies.map((tech, index) => (
                <span key={index} className="rounded-1g bg-black p-3">
                  {tech}
                </span>
              ))
            }
          </div>

      </div>
      
    </div>
    </ScrolledReveal>
  )
}

const ScrolledReveal = ({children}) => {
  return (
    <motion.div
    initial={{opacity:0, y:100}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    transition={{duration:0.8}}
    >
      {children}

    </motion.div>
  )
}




const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <ScrolledReveal>
      <h1 className="text-4xl font-light text-white md:text-6xl ">
      My Projects</h1>
      </ScrolledReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">

     { 
      projectsData.map((project, index) => (
          <ProjectsCard key={index} project={project}/>
        ))
      }

      </div>
    </div>
  )
}

export default Projects
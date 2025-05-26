import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

// Your project data
const projectsData = [
  {
    github: "https://github.com/harshadkadam4/Draw_Android_App",
    title: "QuickDraw",
    description: "The Android-Based Drawing App is a versatile tool for creating and editing drawings on mobile devices. This feature-rich application includes a pen tool for drawing, with adjustable stroke size and color customization, an eraser for precise corrections, and options to add images seamlessly. Users can insert editable and movable textboxes, delete textboxes, clear all contents with a single action, and save their drawings or edited images.",
    technologies: ["Android", "Java", "XML"]
  },
  {
    github: "https://github.com/harshadkadam4/Swami_Mess_Android_App",
    title: "Mess Attendance App",
    description: "The Mess Attendance App simplifies attendance tracking for mess services. Built with Java, Firebase Realtime Database, and XML, the app enables users to record attendance efficiently. Students can mark their attendance status (e.g., ”Present” or ”Absent”) directly through the app. The platform stores attendance records securely in the cloud and provides an organized list view of attendees for administrators. The use of a real-time database ensures instant updates and seamless data synchronization, making the attendance process more efficient.",
    technologies: ["Android", "Java", "Firebase Realtime Database","XML"]
  },
  {
    github: "https://github.com/harshadkadam4/Banking_System",
    title: "Banking System",
    description: " Developed a Simple Banking System implementing basic CRUD operations. The application provides essential banking functionalities, including creating a bank account, fetching account details, making deposits and withdrawals, deleting account, and retrieving all account details.",
    technologies: ["Spring Boot", "Spring Data JPA (Hibernate)", "MySQL", "REST API"]
  },
  {
    github: "https://github.com/harshadkadam4/OJT_WORK",
    title: "JSON Data Extractor Tool",
    description: "Developed a program to automate the importing of cricket match data from JSON files into an SQLite database. The program efficiently fetches files from a specified folder, processes the data, and integrates it into the database, handling both file operations and data insertion.",
    technologies: ["Python", "SQLite", "JSON"]
  },
  {
    github: "https://github.com/harshadkadam4/portfolio",
    title: "Personal Portfolio",
    description: "I developed a personal portfolio website using HTML, CSS, ReactJS, TailwindCSS, and Framer Motion. It includes sections like Home, Tech, Projects, Education, and Contact to showcase my skills, work, and background. The site features smooth animations and a resume download option. It is fully responsive and designed for a clean and modern look.",
    technologies: ["HTML", "CSS", "ReactJS", "TailwindCSS"]
  }
];

// Animation wrapper
const ScrolledReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

// Project Card Component
const ProjectsCard = ({ project }) => {
  return (
    <ScrolledReveal>
      <div className="rounded-2xl border border-gray-700 bg-[#111827] p-6 transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg">
        <div className="flex flex-col gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-2xl font-semibold text-white hover:text-blue-400"
          >
            <FaGithub className="text-xl text-gray-400 hover:text-white" />
            {project.title}
          </a>
          <p className="text-gray-400 text-sm md:text-base">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-full bg-gray-800 px-4 py-1 text-sm text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrolledReveal>
  );
};

// Main Projects Component
const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 px-4 py-16 md:px-10 lg:px-20"
    >
      <ScrolledReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl text-center">
          My Projects
        </h1>
      </ScrolledReveal>

      <div className="grid w-full max-w-5xl gap-10 md:grid-cols-1">
        {projectsData.map((project, index) => (
          <ProjectsCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

import { useState } from "react"; // 1. Added useState
import { motion, AnimatePresence } from "framer-motion"; // 2. Added AnimatePresence
import { ExternalLink, Code2, X } from "lucide-react"; // 3. Added X icon
import TazakkurImg from "../../assets/Screenshot from 2026-02-12 16-19-09.png";

const projects = [
  {
    title: "Tazakkur",
    description: "A comprehensive dashboard for managing products, orders, and customers.",
    tags: ["React Native", "TypeScript", "Tailwind", "React Query"],
    image: TazakkurImg,
    liveLink: "https://play.google.com/store/apps/details?id=com.testingone&pcampaignid=web_share",
    githubLink: "https://github.com",
  },
  {
    title: "Guftaar (Dictionary Ecosystem)",
    description: "A full-stack language learning system featuring a mobile app and a dedicated web-based CMS.",
    tags: ["Expo", "React", "Supabase", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1544650039-22880f08467b?auto=format&fit=crop&w=800&q=80",
    liveLink: null, // This will trigger the modal
    githubLink: "https://github.com/yourusername/dictionary-app",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleLinkClick = (e, project) => {
    if (!project.liveLink) {
      e.preventDefault();
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... Header Section ... */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 group relative"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 z-20 flex gap-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                  <a
                    href={project.liveLink || "#"}
                    onClick={(e) => handleLinkClick(e, project)}
                    target={project.liveLink ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                {/* ... Tags ... */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- MODAL SECTION --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-lg w-full shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center">
                <div className="mb-6 rounded-xl overflow-hidden shadow-inner">
                   <img src={selectedProject.image} alt="Preview" className="w-full h-48 object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedProject.title}
                </h3>
                <div className="inline-block px-4 py-1.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full text-sm font-semibold mb-4">
                   🚧 Coming Soon
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  This project is currently in active development. I'm polishing the final features and will be live very soon!
                </p>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors"
                >
                  Got it, thanks!
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
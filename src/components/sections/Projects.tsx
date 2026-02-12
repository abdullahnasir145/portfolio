import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import TazakkurImg from "../../assets/Screenshot from 2026-02-12 16-19-09.png"

const projects = [
    {
        title: 'Tazakkur',
        description: 'A comprehensive dashboard for managing products, orders, and customers. Built with React, Tailwind CSS, and Recharts for data visualization.',
        tags: ['React Native', 'TypeScript', 'Tailwind', 'React Query'],
        image: TazakkurImg,
        liveLink: 'https://play.google.com/store/apps/details?id=com.testingone&pcampaignid=web_share',
        githubLink: 'https://github.com',
    },
    {
        title: 'Social Media App',
        description: 'A real-time social platform featuring posts, comments, likes, and user profiles. Powered by React, Supabase, and Framer Motion.',
        tags: ['React', 'Supabase', 'Framer Motion', 'Zustand'],
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        liveLink: 'https://example.com',
        githubLink: 'https://github.com',
    },
    {
        title: 'Travel Booking UI',
        description: 'A modern and clean user interface for a travel booking application. Focuses on user experience and responsive design.',
        tags: ['React Native', 'Expo', 'TypeScript', 'Styled Components'],
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        liveLink: 'https://example.com',
        githubLink: 'https://github.com',
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider text-sm"
                    >
                        Portfolio
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
                    >
                        Featured Projects
                    </motion.h2>
                    <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        A selection of my recent work, showcasing my technical skills and problem-solving abilities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute bottom-4 right-4 z-20 flex gap-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">

                                    {/* Link for github */}
                                    {/* <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white dark:bg-gray-800 rounded-full text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-lg"
                                        title="View Code"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a> */}
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                                        title="View Live Site"
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
                                <p className="text-gray-500 dark:text-gray-400 mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

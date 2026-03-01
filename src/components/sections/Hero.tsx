
import { motion } from 'framer-motion';
import { ArrowRight, Code, Sparkles } from 'lucide-react';
import { Link } from 'react-scroll';
import MainImg from "../../assets/Me.svg"

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-950 pt-20">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[100px]" />
                <div className="absolute top-[30%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Available for Freelance Projects</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Abdullah</span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            A passionate <span className="font-semibold text-gray-900 dark:text-white">Frontend Developer</span> crafting beautiful, high-performance web experiences with React, Tailwind, and Modern Tech Stack.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 cursor-pointer"
                            >
                                Start a Project
                                <ArrowRight className="w-5 h-5" />
                            </Link>

                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-lg font-medium hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <Code className="w-5 h-5" />
                                View Work
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative"
                    >
                        <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto lg:mx-0">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl rotate-6 opacity-20 blur-lg animate-pulse" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl -rotate-6 opacity-20" />
                            <div className="relative w-full h-full bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden border-2 border-gray-100 dark:border-gray-700 flex items-center justify-center">
                                {/* Placeholder for user image */}
                                {/* <div className="text-center p-6">
                                    <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-3xl">👨‍💻</span>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                                        Add your photo here
                                    </p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                                        (In future updates)
                                    </p>
                                </div> */}
                                {/* <MainImg/> */}
                                <img src={MainImg} alt="Main" className="w-full h-full object-cover" />
                            </div>

                            {/* Floating Tech Stack badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700"
                            >
                                <span className="text-2xl">⚛️</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700"
                            >
                                <span className="text-2xl">🚀</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

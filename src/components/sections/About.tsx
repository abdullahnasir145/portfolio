
import { motion } from 'framer-motion';
import { Award, Layers, Users, Zap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-600/10 rounded-2xl -z-10" />
                            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-purple-600/10 rounded-2xl -z-10" />
                            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center border-2 border-gray-100 dark:border-gray-800 shadow-xl">
                                <span className="text-6xl">👋</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <span className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider text-sm">
                            About Me
                        </span>
                        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            I code your dreams into reality
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                            I am <span className="font-semibold text-gray-900 dark:text-white">Abdullah</span>, a Front-End Developer with a strong focus on building high-quality web and mobile applications.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            My expertise lies in the React ecosystem, including React Native for mobile development. I integrate backend services like Supabase seamlessly and style with precision using Tailwind CSS. I prioritize performance, responsiveness, and SEO to ensure every project is not just a website, but a powerful digital asset.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">Fast</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">load times and lag free interaction</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">Responsive</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">layouts will work on any device</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">Intuitive</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Strong preference for easy to use UX</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">Dynamic</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Websites don't have to be static</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

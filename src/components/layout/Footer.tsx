
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                            Abdullah
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Building beautiful digital experiences.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 text-center">
                    <p className="flex items-center justify-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Abdullah © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

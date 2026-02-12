
import { motion } from 'framer-motion';
import {
    Monitor,
    Smartphone,
    Zap,
    Layout,
    Search,
    Database
} from 'lucide-react';

const services = [
    {
        icon: <Monitor className="w-8 h-8" />,
        title: 'Frontend Development',
        description: 'Building responsive, pixel-perfect web applications using React, TypeScript, and modern CSS frameworks.',
        color: 'text-blue-600',
        bg: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: 'Mobile App Development',
        description: 'Creating cross-platform mobile applications with React Native that provide native-like performance.',
        color: 'text-purple-600',
        bg: 'bg-purple-100 dark:bg-purple-900/20'
    },
    {
        icon: <Database className="w-8 h-8" />,
        title: 'BaaS Integration',
        description: 'Leveraging Supabase and other Backend-as-a-Service platforms for robust data management and auth.',
        color: 'text-green-600',
        bg: 'bg-green-100 dark:bg-green-900/20'
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: 'Performance Optimization',
        description: 'Improving website speed and performance scores to ensure a smooth and fast user experience.',
        color: 'text-yellow-600',
        bg: 'bg-yellow-100 dark:bg-yellow-900/20'
    },
    {
        icon: <Layout className="w-8 h-8" />,
        title: 'UI/UX Implementation',
        description: 'Translating designs into interactive, accessible, and user-friendly interfaces.',
        color: 'text-pink-600',
        bg: 'bg-pink-100 dark:bg-pink-900/20'
    },
    {
        icon: <Search className="w-8 h-8" />,
        title: 'SEO Best Practices',
        description: 'Implementing technical SEO to improve visibility and ranking on search engines.',
        color: 'text-orange-600',
        bg: 'bg-orange-100 dark:bg-orange-900/20'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider text-sm"
                    >
                        What I Do
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
                    >
                        My Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        I provide a wide range of services to help you build your digital presence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.bg} ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

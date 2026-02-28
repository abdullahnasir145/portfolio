// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Quote, Star } from "lucide-react";

// const testimonials = [
//   {
//     id: 1,
//     name: "John Doe",
//     role: "CEO at TechStart",
//     content:
//       "Abdullah is an exceptional developer. He transformed our outdated website into a modern, high-performance web app. His attention to detail is unmatched.",
//     rating: 5,
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     role: "Marketing Director",
//     content:
//       "Working with Abdullah was a pleasure. He understood our vision perfectly and delivered a site that exceeded our expectations. The animations are so smooth!",
//     rating: 5,
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
//   {
//     id: 3,
//     name: "Mike Johnson",
//     role: "Product Manager",
//     content:
//       "Abdullah is not just a coder, he is a problem solver. He suggested improvements to our UI/UX that significantly increased our user engagement.",
//     rating: 4.5,
//     image:
//       "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
// ];

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   // Auto-play effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextTestimonial();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <motion.span
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider text-sm"
//           >
//             Testimonials
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
//           >
//             What Clients Say
//           </motion.h2>
//         </div>

//         {/* Testimonial Card */}
//         <div className="max-w-4xl mx-auto relative">
//           {/* Decorative Quote Icon */}
//           <div className="absolute top-0 left-0 -translate-x-4 -translate-y-4 text-blue-200 dark:text-blue-900/40">
//             <Quote className="w-24 h-24 rotate-180" />
//           </div>

//           <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-800">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentIndex}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.3 }}
//                 className="flex flex-col items-center text-center"
//               >
//                 {/* Profile Image */}
//                 <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-blue-100 dark:border-blue-900/30">
//                   <img
//                     src={testimonials[currentIndex].image}
//                     alt={testimonials[currentIndex].name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Rating Stars - FIXED: Math.floor prevents crash on 4.5 rating */}
//                 <div className="flex gap-1 mb-6">
//                   {[...Array(Math.floor(testimonials[currentIndex].rating))].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-5 h-5 text-yellow-400 fill-current"
//                     />
//                   ))}
//                 </div>

//                 {/* Content */}
//                 <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 italic mb-8 relative z-10">
//                   "{testimonials[currentIndex].content}"
//                 </p>

//                 {/* Author Info */}
//                 <div>
//                   <h4 className="font-bold text-gray-900 dark:text-white text-lg">
//                     {testimonials[currentIndex].name}
//                   </h4>
//                   <p className="text-blue-600 dark:text-blue-400 text-sm">
//                     {testimonials[currentIndex].role}
//                   </p>
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             {/* Pagination Dots - Replaces Chevron Buttons */}
//             <div className="flex justify-center gap-2 mt-8">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     currentIndex === index
//                       ? "bg-blue-600 w-6" // Active: Blue and Wide
//                       : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
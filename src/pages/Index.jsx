import { useState } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Feather, Globe } from 'lucide-react';

const Index = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    { title: 'Investigative', icon: Newspaper, description: 'Uncovering truth through meticulous research and reporting' },
    { title: 'Storyteller', icon: Feather, description: 'Crafting compelling narratives that resonate with readers' },
    { title: 'Global Perspective', icon: Globe, description: 'Bringing international insights to local stories' },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-8">
      <motion.h1 
        className="text-6xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        João Medeiros
      </motion.h1>
      <motion.p 
        className="text-2xl mb-12 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Journalist | Writer | Storyteller
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredSection(index)}
            onHoverEnd={() => setHoveredSection(null)}
          >
            <section.icon className="w-12 h-12 mb-4 text-blue-400" />
            <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-400">{section.description}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <p className="text-xl mb-4">Discover the stories that shape our world</p>
        <div className="inline-block relative overflow-hidden">
          <span className="relative z-10 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300">
            Explore My Work
          </span>
          <motion.div
            className="absolute inset-0 bg-blue-300 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: hoveredSection !== null ? 1.5 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Index;

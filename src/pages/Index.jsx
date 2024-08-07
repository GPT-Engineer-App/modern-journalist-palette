import { useState } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Feather, Globe, Award, BookOpen } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    { title: 'Investigative', icon: Newspaper, description: 'Uncovering truth through meticulous research and reporting' },
    { title: 'Storyteller', icon: Feather, description: 'Crafting compelling narratives that resonate with readers' },
    { title: 'Global Perspective', icon: Globe, description: 'Bringing international insights to local stories' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-center items-center p-8">
      <motion.h1 
        className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        João Medeiros
      </motion.h1>
      <motion.p 
        className="text-2xl mb-8 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Journalist | Writer | Storyteller
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-12">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-700 hover:border-blue-500"
            whileHover={{ scale: 1.05, y: -5 }}
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
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <p className="text-xl mb-6">Discover the stories that shape our world</p>
        <Button variant="outline" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-none">
          Explore My Work
        </Button>
      </motion.div>

      <motion.div 
        className="mt-16 flex justify-center items-center space-x-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex flex-col items-center">
          <Award className="w-8 h-8 text-yellow-400 mb-2" />
          <p className="text-sm text-gray-400">Award-winning Journalist</p>
        </div>
        <div className="flex flex-col items-center">
          <BookOpen className="w-8 h-8 text-green-400 mb-2" />
          <p className="text-sm text-gray-400">Published Author</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;

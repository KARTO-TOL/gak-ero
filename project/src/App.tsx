import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, User, Code, Briefcase, GraduationCap } from 'lucide-react';

function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking with beautiful visualizations",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.header 
        className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            KARTOツ
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            PELYER EPEP
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#" className="p-2 hover:text-blue-200 transition-colors"><Github size={24} /></a>
            <a href="#" className="p-2 hover:text-blue-200 transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="p-2 hover:text-blue-200 transition-colors"><Mail size={24} /></a>
          </motion.div>
        </div>
      </motion.header>

      {/* About Section */}
      <motion.section 
        className="py-20 px-4 md:px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <User className="mr-4 text-blue-600" />
            <h2 className="text-3xl font-bold">pengalaman</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
          Saya pernah GM di epep dan saya pro player epep
          </p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="py-20 px-4 md:px-8 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Code className="mr-4 text-blue-600" />
            <h2 className="text-3xl font-bold">Skills Game</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['EPEP', 'BLOOD STRIKE', 'BLUE ARCHIVE', 'MINECRAFT', 'HOK', 'ML'].map((skill) => (
              <motion.div 
                key={skill}
                className="p-4 bg-gray-50 rounded-lg text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="py-20 px-4 md:px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Briefcase className="mr-4 text-blue-600" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href="#" className="text-blue-600 flex items-center hover:text-blue-800">
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        className="py-20 px-4 md:px-8 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <GraduationCap className="mr-4 text-blue-600" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <motion.div 
            className="bg-gray-50 p-6 rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold mb-2">SMPN 5 MOJOKERTO</h3>
            <p className="text-gray-600">KELAS 8B</p>
            <p className="text-gray-500">GAK ERO</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>© 2024 KARTOツ. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/KARTO-TOL" className="hover:text-blue-400 transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
            <a href="akunservertahilan32@gmail.com" className="hover:text-blue-400 transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
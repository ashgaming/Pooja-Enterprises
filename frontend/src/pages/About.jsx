import React from 'react';
import { motion } from 'framer-motion';
import { History, Target, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Pooja Enterprises</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2008, we've been at the forefront of construction excellence, delivering innovative solutions and exceptional quality in every project we undertake.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
  

      {/* Company Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl text-black font-bold mb-6">Company Overview</h2>
              <p className="text-gray-600 mb-4">
                Pooja Enterprises has established itself as a leading construction company, specializing in both residential and commercial projects. Our commitment to quality and innovation has earned us the trust of countless clients.
              </p>
              <p className="text-gray-600 mb-4">
                We take pride in our team of skilled professionals who bring expertise and dedication to every project. Our focus on sustainable practices and cutting-edge technology sets us apart in the industry.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Quality-driven approach</li>
                <li>✓ Innovative construction methods</li>
                <li>✓ Sustainable practices</li>
                <li>✓ Expert team of professionals</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
                alt="Construction site"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
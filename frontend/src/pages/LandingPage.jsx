import React, { useState } from 'react';
import Hero from '../components/Hero';
import Pooja from '../components/Pooja';
import AboutUs from '../components/AboutUs';
import ConractUs from '../components/ConractUs';
import { motion } from 'framer-motion';
import { History, Target, Lightbulb } from 'lucide-react';
import PageLoader from '../components/PageLoader';

const LandingPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Project data
  const projects = [
    { id: '01', title: 'Square Project', src: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743831955/WhatsApp_Image_2025-04-05_at_11.06.58_oih9ly.jpg' },
    { id: '02', title: 'Square Project', src: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743835692/bg_g3yezj.jpg' },
    { id: '03', title: 'Square Project', src: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743835945/works_g9yrzi.jpg' },
    { id: '04', title: 'Square Project', src: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743831955/work_vwywkf.jpg' }
  ];

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <Hero />

      <AboutUs />

      <Pooja />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <History className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our History</h3>
              <p className="text-gray-600">
                Founded with a vision to transform the construction landscape, we've grown from a small team to an industry leader.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional construction solutions while maintaining the highest standards of quality and innovation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <Lightbulb className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted name in construction, known for excellence, innovation, and sustainable practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      <section className="py-16 bg-black w-screen flex flex-col items-center rounded-3xl">

        <h2 className="text-xl lg:text-9xl font-bold mb-12 text-white">PROJECTS</h2>

        <div className="grid grid-cols-4 w-full">
          {projects.map((project, index) => (
            <div key={project.id} className="relative overflow-hidden group cursor-pointer mb-6">
              <img
                src={project.src}
                alt={project.title}
                className="object-cover transition-transform duration-500 aspect-[5/20] md:aspect-[9/20]  group-hover:scale-110"
                data-aos="fade-up"
                loading='lazy'
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
              <div className="absolute bottom-8 left-6 text-white">
                <h3 className="text-lg font-bold mb-2">{project.id}</h3>
                <p>{project.title}</p>
              </div>
            </div>
          ))}
        </div>

      </section>


      {/* Contact Section */}
          <ConractUs />


    </div>
  );

};


export default LandingPage;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Building, CheckCircle, Star, Clock, Shield, ArrowUpRight, Briefcase, PenTool as Tool, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section - Unchanged */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Building Tomorrow's World Today
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl mb-8 max-w-2xl"
            >
              With over 15 years of excellence in construction and development, we bring your vision to life with precision and innovation.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex space-x-4"
            >
              <Link
                to="/projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition-colors"
              >
                <span>View Our Projects</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Achievement Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Trophy, stat: '15+', text: 'Years of Excellence' },
              { icon: Building, stat: '200+', text: 'Projects Delivered' },
              { icon: Users, stat: '50+', text: 'Expert Team Members' },
              { icon: Star, stat: '98%', text: 'Client Satisfaction' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-blue-600 transform -rotate-3 rounded-xl transition-transform group-hover:rotate-0" />
                <div className="relative bg-white p-8 rounded-xl transform transition-transform group-hover:-translate-y-2">
                  <item.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">{item.stat}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600">Comprehensive construction solutions tailored to your needs</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "Commercial Construction",
                description: "State-of-the-art office buildings and retail spaces designed for modern businesses.",
                features: ["Modern Design", "Energy Efficient", "Smart Integration"]
              },
              {
                icon: Tool,
                title: "Industrial Projects",
                description: "Advanced manufacturing facilities and warehouses built for optimal efficiency.",
                features: ["Automated Systems", "Safety Standards", "Scalable Design"]
              },
              {
                icon: Briefcase,
                title: "Corporate Interiors",
                description: "Premium office spaces that enhance productivity and well-being.",
                features: ["Ergonomic Design", "Modern Amenities", "Collaborative Spaces"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-blue-600 opacity-10 group-hover:opacity-20 transition-opacity" />
                <service.icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Learn More <ArrowUpRight className="h-4 w-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Showcasing our finest work across different sectors</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tech Hub Campus",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
                category: "Commercial",
                description: "A modern tech campus with sustainable features and smart technology integration"
              },
              {
                title: "Luxury Residences",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
                category: "Residential",
                description: "Premium residential complex with world-class amenities and stunning views"
              },
              {
                title: "Shopping Complex",
                image: "https://images.unsplash.com/photo-1519420573924-65fcd45245f8?auto=format&fit=crop&q=80",
                category: "Retail",
                description: "Contemporary shopping destination with entertainment facilities"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Our commitment to excellence sets us apart</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Timely Delivery",
                description: "We strictly adhere to project timelines and ensure on-time completion"
              },
              {
                icon: Shield,
                title: "Quality Assured",
                description: "Highest standards in construction with premium materials"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Skilled professionals with years of industry experience"
              },
              {
                icon: Award,
                title: "Award Winning",
                description: "Recognized for excellence in construction and design"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-600 opacity-10 rounded-full group-hover:opacity-20 transition-opacity" />
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
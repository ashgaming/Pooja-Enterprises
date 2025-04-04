import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Modern Office Complex',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    description: 'A state-of-the-art office complex featuring sustainable design and modern amenities.',
    completion: '2023',
    location: 'Mumbai, Maharashtra',
    area: '50,000 sq ft',
    client: 'Tech Solutions Ltd',
    services: ['Architecture Design', 'Construction', 'Interior Design'],
    features: [
      'LEED Gold Certified',
      'Smart Building Technology',
      'Rooftop Garden',
      'Underground Parking'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 2,
    title: 'Luxury Residential Tower',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80',
    description: 'High-end residential development with premium finishes and spectacular views.',
    completion: '2022',
    location: 'Pune, Maharashtra',
    area: '75,000 sq ft',
    client: 'Premium Homes Developers',
    services: ['Architecture', 'Construction', 'Landscape Design'],
    features: [
      'Smart Home Integration',
      'Infinity Pool',
      'Private Terraces',
      'Concierge Service'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 3,
    title: 'Shopping Mall Complex',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1519420573924-65fcd45245f8?auto=format&fit=crop&q=80',
    description: 'Modern shopping center with entertainment facilities and dining options.',
    completion: '2023',
    location: 'Bangalore, Karnataka',
    area: '100,000 sq ft',
    client: 'Retail Ventures Inc',
    services: ['Construction', 'Interior Design', 'Project Management'],
    features: [
      'Multiplex Cinema',
      'Food Court',
      'Underground Parking',
      'Kids Play Area'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1519420573924-65fcd45245f8?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1567449303078-57ad995bd353?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 4,
    title: 'Educational Campus',
    category: 'Institutional',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
    description: 'Contemporary educational facility with state-of-the-art learning spaces.',
    completion: '2022',
    location: 'Chennai, Tamil Nadu',
    area: '80,000 sq ft',
    client: 'Education Board',
    services: ['Architecture', 'Construction', 'Landscape Design'],
    features: [
      'Smart Classrooms',
      'Sports Complex',
      'Research Labs',
      'Auditorium'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 5,
    title: 'Healthcare Center',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80',
    description: 'Modern medical facility designed for optimal patient care and comfort.',
    completion: '2023',
    location: 'Hyderabad, Telangana',
    area: '60,000 sq ft',
    client: 'Healthcare Solutions',
    services: ['Construction', 'MEP', 'Interior Design'],
    features: [
      'Advanced Operation Theaters',
      'Emergency Department',
      'Diagnostic Center',
      'Healing Garden'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 6,
    title: 'Industrial Complex',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1581093458791-9d42cc605487?auto=format&fit=crop&q=80',
    description: 'State-of-the-art industrial facility with advanced manufacturing capabilities.',
    completion: '2022',
    location: 'Ahmedabad, Gujarat',
    area: '120,000 sq ft',
    client: 'Manufacturing Corp',
    services: ['Construction', 'Project Management', 'MEP'],
    features: [
      'Automated Systems',
      'Warehouse Facility',
      'R&D Center',
      'Solar Power Plant'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1581093458791-9d42cc605487?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1565793298629-8c1f1c0c0c1f?auto=format&fit=crop&q=80'
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);

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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful projects across various sectors, showcasing our commitment to excellence and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Completed: {project.completion}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Project Images Carousel */}
              <div className="relative h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                  <p className="text-gray-200">{selectedProject.category}</p>
                </div>
              </div>

              <div className="p-6">
                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Project Details</h3>
                    <div className="space-y-2">
                      <p><span className="font-semibold">Location:</span> {selectedProject.location}</p>
                      <p><span className="font-semibold">Area:</span> {selectedProject.area}</p>
                      <p><span className="font-semibold">Completion:</span> {selectedProject.completion}</p>
                      <p><span className="font-semibold">Client:</span> {selectedProject.client}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Services Provided</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedProject.services.map((service, index) => (
                        <li key={index} className="text-gray-600">{service}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Project Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Gallery */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedProject.gallery.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;
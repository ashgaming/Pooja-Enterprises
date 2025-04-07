import React, { useEffect } from 'react';

const Projects = () => {


  const projects = [
    {
      id: 1,
      title: 'Code Screenshot',
      categories: ['Development', 'Design'],
      year: '2024',
      bgColor: 'bg-pink-200',
      image: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743849434/image_rbwh7a.jpg',
    },
    {
      id: 2,
      title: 'iPhone 15 Pro',
      categories: ['Development', 'Design'],
      year: '2023',
      bgColor: 'bg-gray-100',
      image: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743849434/image_rbwh7a.jpg',
    },
    {
      id: 3,
      title: 'Oslo Design',
      categories: ['Development', 'Design'],
      year: '2024',
      bgColor: 'bg-green-100',
      image: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743849434/image_rbwh7a.jpg',
    },
    {
      id: 4,
      title: 'Snaplayer',
      categories: ['Development', 'Design'],
      year: '2024',
      bgColor: 'bg-blue-100',
      image: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743849434/image_rbwh7a.jpg',
    },
    {
      id: 5,
      title: 'Digital Experiences',
      categories: ['Development', 'Design'],
      year: '2024',
      bgColor: 'bg-purple-200',
      image: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743849434/image_rbwh7a.jpg',
    },
    {
      id: 6,
      title: 'CrossKnot Hacks',
      categories: ['Development', 'Design'],
      year: '2023',
      bgColor: 'bg-teal-100',
      image: 'https://res.cloudinary.com/dyka5knvr/image/upload/v1743849434/image_rbwh7a.jpg',
    },
  ];

  return (
    <div className="bg-white min-h-screen text-black">
      <div className="max-w-6xl mx-auto px-4 py-12 pt-56">

        {/* Hero section */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="h-1 w-6 bg-green-500 mr-2"></div>
            <span className="text-green-500 text-sm">Our Projects</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-10">Creating next level Mordern<br />Pune</h2>

          {/* Filter tabs */}
          <div className="flex space-x-6">
        <span className="bg-white text-black px-3 py-1 rounded-full text-sm">All</span>
        <span className="px-3 py-1 text-sm">Development</span>
        <span className="px-3 py-1 text-sm">Design</span>
      </div>

        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" key={project.id} >
              <div className={`${project.bgColor} rounded-3xl p-10 overflow-hidden mb-6`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover rounded-3xl mb-4 transition-transform transform hover:scale-105"
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold text-black">{project.title}</h3>
                  <p className="text-xs text-gray-700">{project.categories.join(' & ')}</p>
                </div>
                <div className="text-xs text-gray-700">{project.year}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
      
    </div>
  );
};

export default Projects;
import React, { useState } from 'react';

const LandingPage = () => {
       const [activeSlide, setActiveSlide] = useState(0);
    
      // Project data
      const projects = [
        { id: '01', title: 'Square Project' },
        { id: '02', title: 'Square Project' },
        { id: '03', title: 'Square Project' },
        { id: '04', title: 'Square Project' }
      ];
    
      return (
        <div className="bg-black text-white">    
          {/* Hero Section */}
          <section className="relative h-screen flex items-center">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80" 
                alt="Modern building" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            
            <div className="container mx-auto px-4 z-10">
              <div className="max-w-lg">
                <h1 className="text-4xl lg:text-6xl font-bold mb-2">WITH YOU, ALWAYS</h1>
                <button className="mt-6 bg-amber-700 hover:bg-amber-800 text-white px-8 py-2 rounded-full">
                  Book now
                </button>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <div className="absolute bottom-10 right-10 flex space-x-4">
              <button className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Contact info */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center lg:justify-between items-center px-4 lg:px-10">
              <div className="hidden lg:flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Dreamland, Abc State</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">000 - XXXX0XXX / XXXX 11 12000</span>
              </div>
              <div className="hidden lg:flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">info@mymail.com</span>
              </div>
            </div>
          </section>
    
          {/* About Us Section */}
          <section className="py-16 bg-black">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-amber-700">ABOUT US</h2>
              
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <p className="mb-6 text-gray-300">
                    A Union of Agressov Group & Abbott Hotels. Both have been pioneers from almost 3 decades in Real Estate & Hospitality respectively. They have left a benchmark in their own fields & now have joined hands to make an alliance.
                  </p>
                  <p className="mb-6 text-gray-300">
                    United Emperors is a perfect consolidation of Real Estate & Hospitality industry.
                  </p>
                  <div className="flex items-center mt-4">
                    <span className="mr-2">Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <img 
                    src="https://res.cloudinary.com/dyka5knvr/image/upload/v1743835692/bg_g3yezj.jpg" 
                    alt="City aerial view" 
                    className="w-full h-64 lg:h-80 object-cover rounded" 
                  />
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 border-t border-gray-800">
                <div className="flex items-center py-8 border-b md:border-b-0 md:border-r border-gray-800">
                  <div className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">1000</h3>
                    <p className="text-gray-400">Room alloted</p>
                  </div>
                </div>
                
                <div className="flex items-center py-8 border-b md:border-b-0 md:border-r border-gray-800">
                  <div className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">12</h3>
                    <p className="text-gray-400">Buildings</p>
                  </div>
                </div>
                
                <div className="flex items-center py-8">
                  <div>
                    <h3 className="text-xl font-bold text-amber-700">And your happiness.</h3>
                    <p className="text-amber-700">Priceless...</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Projects Section */}
          <section className="py-16 bg-black">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-amber-700">PROJECTS</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {projects.map((project, index) => (
                  <div key={project.id} className="relative overflow-hidden group cursor-pointer h-96">
                    <img 
                      src={`https://res.cloudinary.com/dyka5knvr/image/upload/v1743835692/bg_g3yezj.jpg`} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                    <div className="absolute bottom-8 left-6">
                      <h3 className="text-lg font-bold mb-2">{project.id}</h3>
                      <p>{project.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section className="py-16 bg-black">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-amber-700">CONTACTS</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded" 
                    />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded" 
                    />
                    <input 
                      type="tel" 
                      placeholder="Telephone" 
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded" 
                    />
                    <textarea 
                      placeholder="Message" 
                      rows="4" 
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded"
                    ></textarea>
                    <button 
                      type="submit" 
                      className="w-full p-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded"
                    >
                      SEND
                    </button>
                  </form>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>000-XXXX4120 / 000 - XXXX4144</span>
                    </div>
                    
                    <div className="flex space-x-4 mb-6">
                      {['facebook', 'twitter', 'telegram', 'instagram', 'reddit'].map((social) => (
                        <a key={social} href="#" className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                          <span className="sr-only">{social}</span>
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                          </svg>
                        </a>
                      ))}
                    </div>
                    
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>8th floor, The Affairs, XYZ Beach road, Dreamland, Fantasy Land, Unknown - 000 000.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Footer */}
          <footer className="py-8 bg-black border-t border-gray-800">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">Agressov<br />Group</h3>
                  <p className="text-sm text-gray-400 mt-1">All Rights Reserved 2023</p>
                </div>
                
                <div className="flex space-x-4 text-sm text-gray-400">
                  <a href="#" className="hover:text-white">Site Map</a>
                  <a href="#" className="hover:text-white">Terms of Service</a>
                  <a href="#" className="hover:text-white">Privacy Policy</a>
                </div>
              </div>
              
              <div className="mt-8 text-center text-sm text-gray-500">
                <div className="flex justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <p>Designed & Developed by: Neo Themes</p>
              </div>
            </div>
          </footer>
        </div>
      );

    };
    

export default LandingPage;
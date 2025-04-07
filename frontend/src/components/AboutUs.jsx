import React from 'react'

const AboutUs = () => {

      return (
        <div className="min-h-screen flex items-center w-full bg-white font-sans">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          {/* Hero Section */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-gray-700 leading-tight mb-12">
              The pooja enterprises team for founders obsessed with building fast.{" "}
              <span className="text-gray-300">
                Our clients raised over $6M+ in 2024 alone.
              </span>
            </h1>
            
            <div className="flex flex-col md:flex-row gap-12 md:gap-24">
              <div className="max-w-md">
                <p className="text-lg font-medium text-gray-800 mb-4">
                Over 18 years working alongside founders with bold visions and projects that demand precision.                </p>
                <p className="text-lg text-gray-600 mb-8">
                Pooja Enterprises is the construction partner teams trust when timelines and quality can’t be compromised. Our approach is swift and adaptable - built for startup speed and scale.
                  </p>
                
                <div className="flex items-center gap-8 mt-8">
                  <div>
                    <p className="text-gray-400 text-sm">Founded in 1992</p>
                    <p className="text-2xl md:text-3xl text-gray-400 font-medium">200+ Projects</p>
                  </div>
                  
                  <button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition flex items-center">
                    View Projects <span className="ml-2">&rarr;</span>
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col gap-8 mt-12 md:mt-0">
                <div className="flex items-center gap-4">
                  <span className="text-lg">&rarr;</span>
                  <p className="text-lg font-medium">Custom builds that stand out</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-lg">&rarr;</span>
                  <p className="text-lg font-medium">Rapid project delivery that meets deadlines</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-lg">&rarr;</span>
                  <p className="text-lg font-medium">Construction plans for multi-million dollar ventures</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-lg">&rarr;</span>
                  <p className="text-lg font-medium">Dedicated project managers</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-lg">&rarr;</span>
                  <p className="text-lg font-medium">Efficiency-driven construction sprints</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    };
    

export default AboutUs
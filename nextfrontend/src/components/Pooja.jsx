import React from 'react'

const Pooja = () => {
  return (
    <section
      className="w-[98%] min-h-screen text-center text-9xl text relative bg-black rounded-3xl mx-1 md:mx-4"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      id='about'
      >
      <div
  className="min-h-[15rem]  
  sm:min-h-[20rem] 
  md:min-h-[20rem] 
  lg:min-h-[36rem] 
  2xl:min-h-[50rem]  
  text-center text-9xl bg-w-screen relative bg-[url('https://res.cloudinary.com/dyka5knvr/image/upload/v1744023058/PoojaBg_o7zacg.jpg')] bg-no-repeat md:bg-full bg-top rounded-3xl mb-2 -z-50 bg-[length:100%_auto]"
       data-aos="fade-up"
       data-aos-anchor-placement="top-bottom"
      > </div>


      <div className="py-16 ">
        <div className="container mx-auto px-4">

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <p className="mb-6 text-gray-300 text-2xl">
                A Union of Agressov Group & Abbott Hotels. Both have been pioneers from almost 3 decades in Real Estate & Hospitality respectively. They have left a benchmark in their own fields & now have joined hands to make an alliance.
              </p>
              <p className="mb-6 text-gray-300 text-2xl">
                United Emperors is a perfect consolidation of Real Estate & Hospitality industry.
              </p>
              <div className="flex items-center mt-4">
                <span className="mr-2 text-white">Learn more</span>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 border-t border-gray-800 text-white">
            <div className="flex items-center py-8 border-b md:border-b-0 md:border-r border-gray-800">
              <div className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">1000</h3>
                <p className=" text-4xl">Room alloted</p>
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
                <p className="t text-4xl">Buildings</p>
              </div>
            </div>

            <div className="flex items-center py-8">
              <div>
                <h3 className="text-xl font-bold text-amber-700">And your happiness.</h3>
                <p className="text-amber-700 text-4xl">Priceless...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Pooja
import React, { memo } from 'react'



const PageLoader = memo(() => {
    return (
      <div className="flex w-full justify-center items-center h-screen bg-white">
        <iframe src="https://lottie.host/embed/d5937daa-f94c-4b0d-a879-a2a556d15226/QTP7IqZToo.lottie" loading='lazy' className='w-full h-full'></iframe>
      </div>
    );
  });
  
  export default PageLoader;
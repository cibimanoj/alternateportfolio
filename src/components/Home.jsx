import React from 'react';
import {
  FaGoogleDrive
} from 'react-icons/fa';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Cibi Manoj
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        Full-stack developer with a passion for developing scalable web
          applications. Iam looking forward to join
          the IT organizations to continue to grow my skill set while
          contributing a positive outcome for myself and to the company.
        </p>
        <div>
          <a href="https://drive.google.com/file/d/1CDjmiaiGtccJtzjmga8Z2wTVqOJn4k_N/view?usp=sharing" target="_blank">
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            Resume
            <FaGoogleDrive size={30}/>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Cibi manoj, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am a computer science graduate who started my career as an operation executive in Infosys Pvt Ltd,
After that started learning a full-stack developer course in guvi Pvt Ltd Chennai. I'm looking forward to joining
          the IT organizations to continue to grow my skill set while
          contributing a positive outcome for myself and to the company.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;

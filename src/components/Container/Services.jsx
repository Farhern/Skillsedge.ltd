import React from 'react';

const Services = () => {
  return (
    <div className='section' id='services'>
      <div className='text-center'>
        <div className="sm:text-3xl text-2xl font-bold mb-5">
           We offer the <span className='text-teal-500'>best Courses</span>
        </div>
          <p className="text-sm text-gray-700 leading-7 max-w-[700px] mx-auto">
            The AdvancedSkills Hub offers a curated selection of courses designed to help you master in-demand skills and
            advance your career. Whether you're looking to boost your technical expertise, refine your leadership abilities, 
            or unlock your creative potential, we have courses for you.
           </p>
           <p className="text-sm text-gray-700 leading-7 max-w-[700px] mx-auto mt-2">
           Ready to unlock your full potential? Browse our course catalog today and find the perfect fit for your career goals.
           </p>
           <button className="py-3 px-6 text-sm border border-solid border-teal-500 mt-3 rounded-lg font-bold hover:bg-teal-500 duration-100 ease-in-out">
            Know More
            </button>
      </div>
    </div>
  )
};

export default Services;
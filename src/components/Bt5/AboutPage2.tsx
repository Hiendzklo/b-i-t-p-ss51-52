import React from 'react';

const AboutPage2: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-orange-500">About Our Tea Shop</h2>
          <p className="text-gray-600 mt-4">
            Discover the journey of tea from leaf to cup and learn about our unique blends.
            We're dedicated to bringing you the finest teas and infusions with ethics and
            well-being at their core.
          </p>
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <img src="path_to_about_us_image.jpg" alt="About Us" className="rounded-lg shadow-xl"/>
        </div>
      </div>
    </div>
  );
};

export default AboutPage2;

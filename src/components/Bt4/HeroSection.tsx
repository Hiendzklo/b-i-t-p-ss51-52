import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="hero bg-cover bg-center py-20" style={{ backgroundImage: 'url(path_to_your_image.jpg)' }}>
      <div className="text-center text-red">
        <h1 className="text-3xl font-bold">We Will Keep You an Awesome Look</h1>
        <p className="mt-2">123 Street, New York, USA</p>
        <p className="mt-1">+012 345 67890</p>
      </div>
    </div>
  );
};

export default HeroSection;

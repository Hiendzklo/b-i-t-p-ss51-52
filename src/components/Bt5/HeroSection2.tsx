import React from 'react';

const HeroSection2: React.FC = () => {
  return (
    <div className="bg-cover bg-center py-20 text-center" style={{ backgroundImage: 'url(path_to_hero_background.jpg)' }}>
      <div className="text-yellow">
        <h1 className="text-4xl font-bold">Experience the Finest Tea</h1>
        <p>Embark on a journey of exquisite taste and aroma.</p>
      </div>
    </div>
  );
};

export default HeroSection2;

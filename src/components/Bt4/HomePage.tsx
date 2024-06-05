import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mt-6">Welcome to Haircut</h2>
      <p className="text-center mt-2">
        Explore our professional hair services and get the best look you deserve.
      </p>
      <div className="mt-4 text-center">
        <img src="path_to_homepage_image.jpg" alt="Salon" className="mx-auto" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};

export default HomePage;

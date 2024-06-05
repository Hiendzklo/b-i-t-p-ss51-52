import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mt-6">About Us</h2>
      <p className="text-center mt-2">
        At Haircut Salon, we offer a wide range of hairstyling services provided by a team of professional stylists.
      </p>
      <div className="mt-4 text-center">
        <img src="path_to_about_image.jpg" alt="About Haircut Salon" className="mx-auto" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <p className="mt-4">
        Our salon prides itself on creating the ultimate you in a contemporary, inspired atmosphere unlike any other. Come experience dedicated professionalism with our talented artists.
      </p>
    </div>
  );
};

export default AboutPage;

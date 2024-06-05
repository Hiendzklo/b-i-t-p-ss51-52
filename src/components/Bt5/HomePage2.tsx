import React from 'react';

const HomePage2: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-orange-500">About Our</h2>
          <p className="mt-2 text-gray-700">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">Read More</button>
        </div>
        <div>
          <img src="path_to_tea_image.jpg" alt="Tea Set" className="w-64"/>
        </div>
      </div>
    </div>
  );
};

export default HomePage2;

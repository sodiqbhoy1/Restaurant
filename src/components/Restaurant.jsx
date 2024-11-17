import React from 'react';
import Alata from '../assets/alata.png';

const Restaurant = () => {
  return (
    <div className="bg-white p-6 max-w-7xl mx-auto mt-20">
      {/* Restaurant container */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
        {/* Image section */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <img
            src={Alata}
            alt="Alata Milk & Honey Restaurant"
            className="w-full max-w-xs h-auto rounded-md shadow-lg"
          />
        </div>

        {/* Text section */}
        <div className="flex flex-col gap-4 w-full md:w-1/2 lg:w-2/3">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-900">
            Alata Milk & Honey Restaurant
          </h2>
          <p className="text-gray-500 text-sm md:text-base lg:text-lg">
            Eating out saves you time and effort compared to cooking at home.
            You can simply order your food, have it prepared, and enjoy it
            without the hassle at ALATA.
          </p>
          <button className="bg-[#e02a1d] hover:bg-[#c0241a] rounded-md px-4 py-2 text-white font-bold transition-colors duration-300">
            Browse Alata
          </button>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;

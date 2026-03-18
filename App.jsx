import React from 'react';

const TravelApp = () => {
  // Ee link lo backpack girl image undi
  const girlIcon = "https://cdn-icons-png.flaticon.com/512/3588/3588617.png";

  return (
    <div className="p-10 bg-orange-50 min-h-screen">
      <h2 className="text-2xl font-bold text-center text-orange-700 mb-10">
        Arunachalam Ki Prayanam... 👣
      </h2>

      {/* Road Layer */}
      <div className="relative w-full h-20 bg-gray-800 rounded-xl flex items-center overflow-hidden border-b-8 border-gray-900 shadow-2xl">
        
        {/* Road Meeda Dots (Milestones) */}
        <div className="absolute w-full h-1 border-t-4 border-dashed border-white opacity-30 top-1/2"></div>
        
        {/* Animated Girl Icon */}
        <div className="absolute animate-travel flex flex-col items-center">
          <img 
            src={girlIcon} 
            alt="Traveler Girl" 
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>

      {/* Animation Rules (CSS) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes walk {
          0% { left: -100px; }
          100% { left: 100%; }
        }
        .animate-travel {
          animation: walk 10s linear infinite;
        }
      `}} />

      <div className="flex justify-between mt-4 font-bold text-gray-600">
        <span>Current Place</span>
        <span>Arunachalam Temple 🕉️</span>
      </div>
    </div>
  );
};

export default TravelApp;

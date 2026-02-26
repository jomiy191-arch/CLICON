import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-400 bg-opacity-70 backdrop-blur-sm">
      {/* Outer pulsating ring */}
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-4 border-orange-400 border-opacity-50 animate-ping"></div>
        <div className="absolute inset-4 rounded-full border-4 border-yellow-400 border-t-transparent animate-spin"></div>
        <div className="absolute inset-8 rounded-full bg-orange-400 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loader;
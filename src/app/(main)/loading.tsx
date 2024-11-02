import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-72 text-center relative">
        <div className="text-gray-600 text-sm mb-4">
          Loading, please wait...
        </div>
        <div
          className="animate-spin h-10 w-10 border-4 border-blue-400 rounded-full border-t-transparent mx-auto"
          aria-label="loading now..."
        ></div>
        <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none">
          ✕
        </button>
      </div>
    </div>
  );
};

export default Loading;

import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="p-4 bg-gray-200 rounded animate-pulse">
          <div className="h-6 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
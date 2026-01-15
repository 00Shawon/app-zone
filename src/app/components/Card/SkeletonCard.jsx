import React from 'react';

const SkeletonCard = () => {
     return (
    <div className="rounded-xl border border-base-300 bg-base-100 p-4 animate-pulse">
      
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-lg bg-base-300" />

        <div className="flex-1 space-y-2">
          <div className="h-4 w-3/4 rounded bg-base-300" />
          <div className="h-3 w-1/2 rounded bg-base-300" />
        </div>
      </div>

      {/* Meta */}
      <div className="mt-4 flex justify-between">
        <div className="h-3 w-12 rounded bg-base-300" />
        <div className="h-3 w-16 rounded bg-base-300" />
      </div>

      {/* Button */}
      <div className="mt-4 h-8 rounded bg-base-300" />
    </div>
  );
};

export default SkeletonCard;
"use client";

import React, { useEffect, useState } from "react";

export const Loader = ({ duration = 2.5 }: { duration?: number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 100 / (duration * 40), 100));
      }, 25);
      return () => clearInterval(interval);
    }
  }, [progress, duration]);

  // Calculate the position of the animated dot
  const dotPosition = `${progress}%`;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white text-black dark:bg-black dark:text-white">
      <div className="flex flex-col items-center">
        <div className="relative w-64 h-3 bg-orange-200/40 dark:bg-orange-900/30 rounded-full overflow-hidden shadow-lg">
          {/* Progress bar */}
          <div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
          {/* Animated dot */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-orange-400 rounded-full shadow-lg border-2 border-orange-600 transition-all duration-200"
            style={{ left: `calc(${dotPosition} - 0.5rem)`, opacity: progress > 2 ? 1 : 0 }}
          />
        </div>
        {/* Optional: Add a subtle loading text below */}
        <span className="mt-6 text-orange-400 text-sm tracking-widest font-semibold animate-pulse uppercase">Loading...</span>
      </div>
    </div>
  );
};

export default Loader; 
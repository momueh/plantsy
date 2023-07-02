// SkeletonLoader.tsx
import React from "react";

const SkeletonLoader: React.FC = () => {
    return (
        <div className="p-4 bg-gray-200 rounded shadow">
            <div className="animate-pulse">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2 mb-4"></div>
                <div className="h-64 bg-gray-300 rounded mb-4"></div>
                <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-2/3"></div>
            </div>
        </div>
    );
};

export default SkeletonLoader;

import React from "react";

const SkeletonResultSection: React.FC = () => {
    return (
        <div className="w-full flex space-x-4 my-8">
            <div className="w-1/2 space-y-4">
                <div className="h-6 w-3/4">
                    We are identifying your plant, this will only take a few seconds.
                </div>
            </div>
            <div className="animate-pulse w-1/2 space-y-4">
                <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="h-24 bg-gray-300 rounded"></div>
                    <div className="h-24 bg-gray-300 rounded"></div>
                    <div className="h-24 bg-gray-300 rounded"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonResultSection;

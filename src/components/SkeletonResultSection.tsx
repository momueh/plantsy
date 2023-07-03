import React from "react";

type SkeletonProps = {
    mode: "id" | "ha" | "default";
};

const SkeletonResultSection: React.FC<SkeletonProps> = ({ mode }) => {
    return (
        <>
            {mode === "id" ? (
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
            ) : (
                <div className="w-full flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 my-8 ">
                    <div className="flex-1 lg:pr-8 space-y-4">
                        <div className="h-6 w-3/4">
                            We are assesing the condition of your plant, this will only take a few
                            seconds.
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center border p-6 rounded shadow-lg space-y-4 animate-pulse">
                        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-6 bg-gray-300 rounded w-3/4 mt-4"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <div className="h-32 bg-gray-300 rounded"></div>
                            <div className="h-32 bg-gray-300 rounded"></div>
                            <div className="h-32 bg-gray-300 rounded"></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SkeletonResultSection;

import React from "react";

type SkeletonProps = {
    mode: "id" | "ha" | "default";
};

const SkeletonResultSection: React.FC<SkeletonProps> = ({ mode }) => {
    // Create an array with a size that matches the average number of suggestions
    // you'd usually expect to see in the actual component
    const suggestionCount = new Array(3).fill(0);

    return (
        <>
            {mode === "id" ? (
                <div className="w-full flex space-x-4 my-8 px-4">
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
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 my-8 px-4">
                    <div className="flex-1 lg:pr-8 space-y-4">
                        <div className="h-6 w-3/4">
                            We are assessing the condition of your plant, this will only take a few
                            seconds.
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center border p-6 rounded shadow-lg animate-pulse">
                        <h3 className="h-5 bg-gray-300 rounded w-3/4 mb-2"></h3>
                        <p className="h-3 bg-gray-300 rounded w-1/2 mb-2"></p>
                        <h3 className="h-5 bg-gray-300 rounded w-2/4 mt-4 mb-2"></h3>
                        <div className="w-full overflow-y-auto max-h-96 space-y-4">
                            {suggestionCount.map((_, index) => (
                                <div key={index}>
                                    <h4 className="h-6 bg-gray-300 rounded w-3/4 mb-2"></h4>
                                    <p className="h-4 bg-gray-300 rounded w-1/2 mb-2"></p>
                                    <p className="h-4 bg-gray-300 rounded w-1/4 mb-2"></p>
                                    <div className="grid grid-cols-3 gap-4 mt-2">
                                        <div className="h-32 bg-gray-300 rounded"></div>
                                        <div className="h-32 bg-gray-300 rounded"></div>
                                        <div className="h-32 bg-gray-300 rounded"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SkeletonResultSection;

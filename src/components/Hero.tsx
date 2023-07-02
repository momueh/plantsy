import React from "react";

const Hero: React.FC = () => {
    return (
        <div className="relative w-full h-64">
            <img
                src="heroplant.jpg" // replace with your placeholder image
                className="w-full h-full object-cover"
                alt="Placeholder"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black flex items-center justify-center p-4 text-center text-white">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Welcome to Plantsy</h1>
                    <p className="text-xl">
                        Upload an image of a plant and we'll identify it for you using machine
                        learning.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;

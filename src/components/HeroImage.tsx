// HeroImage.tsx
import React from "react";

const HeroImage: React.FC = () => {
    return (
        <img
            className="w-full h-64 object-cover rounded-lg"
            src="/path-to-your-image.jpg"
            alt="Plant image"
        />
    );
};

export default HeroImage;

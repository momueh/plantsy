// HeroSection.tsx
import React from "react";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import Dropzone from "./Dropzone";
import ButtonGroup from "./ButtonGroup";

const HeroSection: React.FC = () => {
    const handleFiles = (files: FileList | null) => {
        if (files) {
            // handle files
            console.log(files);
        }
    };

    return (
        <section className="bg-light-bg p-6">
            <div className="flex justify-center items-center flex-col max-w-7xl mx-auto">
                <HeroImage />
                <HeroText />
                <Dropzone onDrop={handleFiles} accept="image/*" />
                <ButtonGroup />
            </div>
        </section>
    );
};

export default HeroSection;

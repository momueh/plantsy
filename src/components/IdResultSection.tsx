import React from "react";
import { Suggestion } from "../globalTypes";

type IdResultSectionProps = {
    suggestion: Suggestion;
};

const IdResultSection: React.FC<IdResultSectionProps> = ({ suggestion }) => {
    const { name, probability, similar_images } = suggestion;

    return (
        <div className="w-full flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 my-8">
            <div className="flex-1 lg:pr-8">
                <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
                    We identified your plant!
                </h2>
                <p className="text-lg">
                    You can see the result with the highest confidence here. You can add more images
                    to improve the result, if there is ambiguity. Or you can start over with
                    different images or identify your next plant!
                </p>
            </div>
            <div className="flex-1 flex flex-col items-center border p-6 rounded shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                <p className="text-lg">Confidence: {(probability * 100).toFixed(2)}%</p>
                <p className="text-lg">Similar Images:</p>
                <div className="flex gap-4 mt-4">
                    {similar_images.map((img, index) => (
                        <img
                            key={index}
                            src={img.url_small}
                            className="object-cover h-32"
                            alt={name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IdResultSection;

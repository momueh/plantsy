import React from "react";
import { PlantIdentificationResult } from "../globalTypes";

type IdResultSectionProps = {
    result: PlantIdentificationResult;
};

const IdResultSection: React.FC<IdResultSectionProps> = ({ result }) => {
    const { classification, is_plant } = result;
    const bestMatch = classification.suggestions[0];
    const { name, probability, similar_images } = bestMatch;

    return (
        <div className="w-full flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 my-8">
            <div className="flex-1 lg:pr-8">
                <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
                    We identified your plant!
                </h2>
                <p className="text-lg">
                    You can see the result with the highest confidence here. You can add more images
                    to improve the result, if there is ambiguity. You can start a health assesment
                    for this identified plant using the same or additional images, by clicking the
                    Button Assess Plant Health.
                    <br />
                </p>
                <p className="text-lg mt-4">
                    You can also reset and start over with different images or identify your next
                    plant!
                </p>
            </div>
            <div className="flex-1 flex flex-col items-center border p-6 rounded shadow-lg w-full overflow-y-auto max-h-96">
                <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                <p className="text-lg">Is Plant: {is_plant.binary}</p>
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

import React from "react";

import { PlantIdentificationResult } from "../globalTypes";

export type IdResultCardProps = {
    result: PlantIdentificationResult; // The result object of a plant identification api call
};

/**
 * This component displays the result from a plant identification analysis in a card.
 * It is used only in the HistoryList component.
 * It includes the name of the plant, the confidence of the identification, and similar images.
 */
const IdResultCard: React.FC<IdResultCardProps> = ({ result }) => {
    const { classification } = result;
    const bestMatch = classification.suggestions[0];
    const { name, probability, similar_images } = bestMatch;

    return (
        <div className="flex flex-col p-4 border rounded shadow-lg">
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <p>Confidence: {(probability * 100).toFixed(2)}%</p>
            <div className="my-auto">
                <p>Similar Images:</p>
                <div className="flex space-x-4 mt-4">
                    {similar_images.map((img, index) => (
                        <img
                            key={index}
                            src={img.url_small}
                            className="h-20 w-20 object-cover"
                            alt={name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IdResultCard;

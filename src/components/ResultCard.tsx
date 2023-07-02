import React from "react";

type SimilarImage = {
    url: string;
    url_small: string;
    similarity: number;
};

type Details = {
    language: string;
    entity_id: string;
};

type Suggestion = {
    id: string;
    name: string;
    probability: number;
    similar_images: SimilarImage[];
    details: Details;
};

export type ResultCardProps = {
    suggestion: Suggestion;
    size?: "small" | "large";
};

const ResultCard: React.FC<ResultCardProps> = ({ suggestion, size }) => {
    const { name, probability, similar_images } = suggestion;

    return (
        <div className="p-4 border rounded shadow-lg">
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <p>Confidence: {(probability * 100).toFixed(2)}%</p>
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
    );
};

export default ResultCard;

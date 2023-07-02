import React, { useState, useEffect } from "react";
import ResultCard from "./ResultCard";

interface SimilarImage {
    id: string;
    url: string;
    similarity: number;
    url_small: string;
}

interface Details {
    language: string;
    entity_id: string;
}

interface HistoryItem {
    id: string;
    name: string;
    probability: number;
    similar_images: SimilarImage[];
    details: Details;
}

interface HistoryListProps {
    history: HistoryItem[];
}

const HistoryList: React.FC<HistoryListProps> = ({ history }) => {
    return (
        <div className="w-full p-4 mt-8">
            <h2 className="text-lg font-semibold mb-2">Identification History</h2>
            <div className="flex my-4 space-x-4">
                {history.map((result, index) => (
                    <ResultCard key={index} suggestion={result} />
                ))}
            </div>
            <div className="text-grey-500">
                <p>
                    Disclaimer: At Plantsy we are not storing your images or any other data about
                    you. Your images are only used by the Plant.ID API to identify your plants or
                    make health assessments.
                </p>
            </div>
        </div>
    );
};

export default HistoryList;

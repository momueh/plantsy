import React from "react";

import IdResultCard from "./IdResultCard";
import HealthAssessmentCard from "./HealthAssesmentCard";

import { HistoryItem } from "../globalTypes";

interface HistoryListProps {
    history: HistoryItem[]; // An array of history items, containing the results of previous analyses
}

/**
 * This component displays a list of past results from plant identification and health assessment analyses.
 * It uses the IdResultCard and HealthAssessmentCard components to display each individual result.
 */
const HistoryList: React.FC<HistoryListProps> = ({ history }) => {
    return (
        <div className="w-full p-4 mt-8">
            <h2 className="text-lg font-semibold mb-2">History</h2>
            <div className="flex my-4 space-x-4">
                {history.map((result, index) =>
                    result.analysisType === "id" ? (
                        <IdResultCard key={index} result={result} />
                    ) : (
                        <HealthAssessmentCard key={index} result={result} />
                    )
                )}
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

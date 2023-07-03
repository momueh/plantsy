import React from "react";
import { HealthAssessmentResult } from "../globalTypes";

export type HaResultCardProps = {
    result: HealthAssessmentResult;
};

const HealthAssessmentCard: React.FC<HaResultCardProps> = ({ result }) => {
    const healthProbability = (result.is_healthy.probability * 100).toFixed(2);

    const diseaseList = result.disease.suggestions.map((disease, index) => (
        <li key={index}>
            {disease.name}: {(disease.probability * 100).toFixed(2)}%
        </li>
    ));

    return (
        <div className="p-4 border rounded shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Health Assessment</h3>
            <p>Probability of being healthy: {healthProbability}%</p>
            <p className="font-semibold my-1">Possible Diseases:</p>
            <ul>{diseaseList}</ul>
        </div>
    );
};

export default HealthAssessmentCard;

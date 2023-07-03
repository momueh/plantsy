import React from "react";
import { HealthAssessmentResult } from "../globalTypes";

type ResultSectionProps = {
    result: HealthAssessmentResult;
};

const HealthAssessmentResultSection: React.FC<ResultSectionProps> = ({ result }) => {
    const { disease, is_healthy } = result;

    // Calculate health probability as percentage
    const healthProbability = (is_healthy.probability * 100).toFixed(2);

    return (
        <div className="w-full px-4 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 my-8">
            <div className="flex-1 lg:pr-8">
                <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
                    Health Assessment Complete!
                </h2>
                <p className="text-lg">
                    Here is the result of our health assessment for your plant. Our algorithm has
                    identified possible diseases that might be affecting your plant. Please consult
                    with a plant health specialist to confirm this assessment.
                </p>
            </div>
            <div className="flex-1 flex flex-col items-center border p-6 rounded shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">Overall Health Indicator</h3>
                <p className="text-xl mt-2">Probability of being healthy: {healthProbability}%</p>
                <h3 className="w-full text-xl font-semibold mb-1 mt-4">Possible Diseases:</h3>
                <div className="w-full overflow-y-auto max-h-96">
                    {disease.suggestions.map((suggestion, index) => (
                        <div key={index} className="flex flex-col">
                            <h4 className="text-xl font-semibold mb-2 mt-6">{suggestion.name}</h4>
                            <p className="text-lg">
                                Probability: {(suggestion.probability * 100).toFixed(2)}%
                            </p>
                            <p className="text-lg">Similar Images:</p>
                            <div className="flex gap-6 mt-4">
                                {suggestion.similar_images.map((img, imgIndex) => (
                                    <img
                                        key={imgIndex}
                                        src={img.url_small}
                                        className="object-cover h-40 w-40"
                                        alt={suggestion.name}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HealthAssessmentResultSection;

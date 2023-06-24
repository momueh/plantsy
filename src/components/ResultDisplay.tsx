// ResultDisplay.tsx
import React from "react";

interface ResultProps {
    result: any; // The type of your result should be defined according to your API response
}

const ResultDisplay: React.FC<ResultProps> = ({ result }) => {
    return (
        <div className="p-4 rounded-md bg-primary text-body">
            <h2 className="font-bold text-xl mb-2">Result:</h2>
            {/* Show your result here. For example, if it's a string, you can do: */}
            <p>{result}</p>
        </div>
    );
};

export default ResultDisplay;

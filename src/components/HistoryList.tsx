import React, { useState, useEffect } from "react";
import ResultCard from "./ResultCard";

const HistoryList: React.FC = () => {
    const [history, setHistory] = useState<any[]>([]);

    useEffect(() => {
        const storedHistory = sessionStorage.getItem("history");
        if (storedHistory) {
            setHistory(JSON.parse(storedHistory));
        }
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Identification History</h2>
            {history.map((result, index) => (
                <ResultCard key={index} suggestion={result} />
            ))}
        </div>
    );
};

export default HistoryList;

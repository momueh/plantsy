// HistoryList.tsx
import React, { useEffect, useState } from "react";

interface HistoryItem {
    id: string;
    result: any; // Define the result type based on your API response
}

const HistoryList: React.FC = () => {
    const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);

    useEffect(() => {
        const savedHistory = sessionStorage.getItem("history");
        if (savedHistory) {
            setHistoryItems(JSON.parse(savedHistory));
        }
    }, []);

    return (
        <div className="p-4 rounded-md bg-primary text-body">
            <h2 className="font-bold text-xl mb-2">History:</h2>
            {historyItems.map((item) => (
                <div key={item.id}>
                    <p>{item.result}</p>
                </div>
            ))}
        </div>
    );
};

export default HistoryList;

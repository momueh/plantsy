// ButtonGroup.tsx
import React from "react";

const ButtonGroup: React.FC = () => {
    return (
        <div className="flex gap-4">
            <button className="bg-primary text-light-bg rounded-lg py-2 px-4">
                Identify Plant
            </button>
            <button className="bg-primary text-light-bg rounded-lg py-2 px-4">Assess Health</button>
        </div>
    );
};

export default ButtonGroup;

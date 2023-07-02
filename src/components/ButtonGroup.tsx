import React from "react";
interface ButtonGroupProps {
    onButtonClick: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ onButtonClick }) => {
    return (
        <div className="flex gap-4">
            <button
                className="bg-primary text-light-bg rounded-lg py-2 px-4"
                onClick={onButtonClick}
            >
                Identify Plant
            </button>
            <button className="bg-primary text-light-bg rounded-lg py-2 px-4">Assess Health</button>
        </div>
    );
};

export default ButtonGroup;

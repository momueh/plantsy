import React from "react";

const LOGO_URL = "plantsy_logo.png"; // replace with your logo URL

const Header: React.FC = () => {
    return (
        <header className="bg-background p-6">
            <div className="flex justify-center items-center max-w-7xl mx-auto">
                <img src={LOGO_URL} alt="Plantsy logo" className="h-16 w-auto text-logo" />
            </div>
        </header>
    );
};

export default Header;

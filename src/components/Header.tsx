import React from "react";

const LOGO_URL = "https://example.com/logo.png"; // replace with your logo URL

const Header: React.FC = () => {
    return (
        <header className="bg-background p-6">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center">
                    <img src={LOGO_URL} alt="Plantsy logo" className="h-10 w-auto mr-4 text-logo" />
                    <h1 className="text-3xl font-semibold text-primary">Plantsy</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;

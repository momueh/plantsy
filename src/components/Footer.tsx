import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark-bg p-4 text-center text-grey-500">
            <p>&copy; {new Date().getFullYear()} Plantsy. All rights reserved.</p>
        </footer>
    );
};

export default Footer;

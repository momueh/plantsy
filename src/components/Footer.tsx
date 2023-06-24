// Footer.tsx
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark-bg p-6 text-center text-logo">
            <p>&copy; {new Date().getFullYear()} Plantsy. All rights reserved.</p>
        </footer>
    );
};

export default Footer;

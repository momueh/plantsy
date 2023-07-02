import React from "react";
import Header from "./components/Header";
import InteractionWrapper from "./components/InteractionWrapper";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Hero />
            <InteractionWrapper />
            <Footer />
            <Toaster /> {/* Add Toaster here */}
        </>
    );
};

export default App;

import React from "react";
import Header from "./components/Header";
import InteractionWrapper from "./components/InteractionWrapper";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <div>
                <Header />
                <Hero />
                <InteractionWrapper />
                <Toaster />
            </div>
            <Footer />
        </div>
    );
};

export default App;

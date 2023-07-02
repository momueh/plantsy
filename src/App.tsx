import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ResultDisplay from "./components/ResultDisplay";
import HistoryList from "./components/HistoryList";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <ResultDisplay />
            <HistoryList />
            <Footer />
            <Toaster /> {/* Add Toaster here */}
        </>
    );
};

export default App;

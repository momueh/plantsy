// app.tsx
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ResultDisplay from "./components/ResultDisplay";
import HistoryList from "./components/HistoryList";
import Footer from "./components/Footer";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <ResultDisplay />
            <HistoryList />
            <Footer />
        </>
    );
};

export default App;

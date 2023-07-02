// HeroSection.tsx
import React, { useState, useEffect } from "react";
import Dropzone from "./Dropzone";
import ButtonGroup from "./ButtonGroup";
import ResultSection from "./ResultSection";
import HistoryList from "./HistoryList";
import SkeletonResultSection from "./SkeletonResultSection";

const InteractionWrapper: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false); // add this state
    const [identificationResult, setIdentificationResult] = useState<any>(null); // add this state
    const [resultHistory, setResultHistory] = useState<any[]>([]);

    useEffect(() => {
        const storedHistory = sessionStorage.getItem("history");
        if (storedHistory) {
            setResultHistory(JSON.parse(storedHistory));
        }
    }, []);

    const handleFiles = async (files: FileList | null) => {
        if (files) {
            const base64Images: string[] = [];
            for (let i = 0; i < files.length; i++) {
                const base64Image = await toBase64(files[i]);
                base64Images.push(base64Image);
            }
            setImages(base64Images);
        }
    };

    const toBase64 = (file: File) =>
        new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });

    const handleButtonClick = () => {
        setIsLoading(true); // set loading state to true when the request starts

        fetch("https://plant.id/api/v3/identification", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Api-Key": import.meta.env.VITE_PLANTID_APIKEY, // use environment variable here
            },
            body: JSON.stringify({
                images: images,
                latitude: 49.207, // you can replace these with actual values
                longitude: 16.608, // you can replace these with actual values
                similar_images: true,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const token = data.access_token;
                if (token) {
                    const currentTokens = JSON.parse(sessionStorage.getItem("tokens") || "[]");
                    currentTokens.push(token);
                    sessionStorage.setItem("tokens", JSON.stringify(currentTokens));
                }
                setIsLoading(false); // set loading state to false when the request is complete
                setIdentificationResult(data.result);
                setResultHistory((prev) => [...prev, data.result.classification.suggestions[0]]);
                sessionStorage.setItem(
                    "history",
                    JSON.stringify([...resultHistory, data.result.classification.suggestions[0]])
                );
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false); // also set loading state to false if there's an error
            });
    };

    const handleReset = () => {
        setImages([]);
    };

    console.log("result", identificationResult);
    console.log("history", resultHistory);
    return (
        <section className="bg-light-bg p-6">
            <div className="flex justify-center items-center flex-col max-w-7xl mx-auto">
                {/* Render the ResultCard component if identificationResult is not null */}
                {identificationResult && (
                    // <ResultSection
                    //     suggestion={identificationResult.classification.suggestions[0]}
                    // />
                    <ResultSection suggestion={resultHistory[0]} />
                )}
                {isLoading && <SkeletonResultSection />}
                <Dropzone onDrop={handleFiles} accept="image/*" />
                <ButtonGroup onButtonClick={handleButtonClick} />
                {identificationResult && (
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={handleReset}
                    >
                        Identify Another Plant
                    </button>
                )}
                {resultHistory.length > 0 && <HistoryList history={resultHistory} />}
            </div>
        </section>
    );
};

export default InteractionWrapper;

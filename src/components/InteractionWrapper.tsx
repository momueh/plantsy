// HeroSection.tsx
import React, { useState, useEffect } from "react";
import Dropzone from "./Dropzone";
import IdResultSection from "./IdResultSection";
import HealthAssesmentResultSection from "./HealthAssesmentResultSection";
import HistoryList from "./HistoryList";
import SkeletonResultSection from "./SkeletonResultSection";

const InteractionWrapper: React.FC = () => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]); // add this state
    const [mode, setMode] = useState<"id" | "ha" | "default">("default"); // add this state
    const [isLoading, setIsLoading] = useState(false); // add this state
    const [healthAssesmentResult, setHealthAssesmentResult] = useState<any>(null); // add this state
    const [identificationResult, setIdentificationResult] = useState<any>(null); // add this state
    const [resultHistory, setResultHistory] = useState<any[]>([]);

    useEffect(() => {
        const storedHistory = sessionStorage.getItem("history");
        if (storedHistory) {
            setResultHistory(JSON.parse(storedHistory));
        }
    }, []);

    const handleFiles = (files: FileList | null) => {
        if (files) {
            setSelectedFiles(Array.from(files));
        }
    };

    const handleIdentification = () => {
        setMode("id");
        setIsLoading(true); // set loading state to true when the request starts

        const formData = new FormData();
        selectedFiles.forEach((file, index) => {
            formData.append(`images[${index}]`, file);
        });
        formData.append("latitude", "52.52"); // Berlin
        formData.append("longitude", "13.404"); // Berlin
        formData.append("similar_images", "true");

        fetch("https://plant.id/api/v3/identification", {
            method: "POST",
            headers: {
                "Api-Key": import.meta.env.VITE_PLANTID_APIKEY, // use environment variable here
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
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

    const handleHealthAssesment = () => {
        setMode("ha");
        setIsLoading(true); // set loading state to true when the request starts

        const formData = new FormData();
        selectedFiles.forEach((file, index) => {
            formData.append(`images[${index}]`, file);
        });
        formData.append("latitude", "52.52"); // Berlin
        formData.append("longitude", "13.404"); // Berlin
        formData.append("similar_images", "true");

        fetch("https://plant.id/api/v3/health_assessment", {
            method: "POST",
            headers: {
                "Api-Key": import.meta.env.VITE_PLANTID_APIKEY, // use environment variable here
            },
            body: formData,
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
                setHealthAssesmentResult(data.result);
                setResultHistory((prev) => [...prev, data.result]);
                sessionStorage.setItem("history", JSON.stringify([...resultHistory, data.result]));
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false); // also set loading state to false if there's an error
            });
    };

    const handleReset = () => {
        //complete reset, so user can start over with new images
        setSelectedFiles([]);
        setMode("default");
        setIsLoading(false);
        setIdentificationResult(null);
        setHealthAssesmentResult(null);
    };

    console.log("idresult", identificationResult);
    console.log("haresult", healthAssesmentResult);
    console.log("history", resultHistory);
    console.log("mode", mode);
    console.log("selectedFiles", selectedFiles);

    return (
        <section className="bg-light-bg p-6">
            <div className="flex justify-center items-center flex-col max-w-7xl mx-auto">
                {/* Render the ResultCard component if identificationResult is not null */}
                {identificationResult && mode === "id" && (
                    // <ResultSection
                    //     suggestion={identificationResult.classification.suggestions[0]}
                    // />
                    <IdResultSection suggestion={resultHistory[0]} />
                )}
                {healthAssesmentResult && mode === "ha" && (
                    <HealthAssesmentResultSection result={healthAssesmentResult} />
                    // <HealthAssesmentResultSection result={resultHistory[0]} />
                )}
                {isLoading && mode !== "default" && <SkeletonResultSection mode={mode} />}
                <Dropzone
                    onDrop={handleFiles}
                    accept="image/*"
                    selectedFiles={selectedFiles}
                    setSelectedFiles={setSelectedFiles}
                />

                <div className="flex gap-4">
                    <button
                        className="bg-primary text-light-bg rounded-lg py-2 px-4 hover:bg-hoverPrimary"
                        onClick={handleIdentification}
                        disabled={selectedFiles.length === 0}
                    >
                        Identify Plant
                    </button>
                    <button
                        className="bg-primary text-light-bg rounded-lg py-2 px-4 hover:bg-hoverPrimary"
                        onClick={handleHealthAssesment}
                        disabled={selectedFiles.length === 0}
                    >
                        Assess Plant Health
                    </button>
                </div>
                {mode !== "default" && (
                    <button
                        className="bg-primary text-light-bg rounded-lg py-2 px-4 mt-6 hover:bg-hoverPrimary"
                        onClick={handleReset}
                    >
                        Reset Images and Results
                    </button>
                )}

                {/* {resultHistory.length > 0 && <HistoryList history={resultHistory} />} */}
            </div>
        </section>
    );
};

export default InteractionWrapper;

type LoadingSpinnerProps = { mode: string };

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ mode }) => {
    return (
        <div className="flex items-center justify-center p-4 bg-hoverPrimary text-white rounded">
            <svg className="animate-spin h-5 w-5 mr-3 text-white" fill="none" viewBox="0 0 24 24">
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg>
            <span className="animate-pulse">
                Processing {mode === "ha" ? "Health Assesment" : "Identification"}...
            </span>
        </div>
    );
};

export default LoadingSpinner;

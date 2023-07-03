export type Classification = {
    suggestions: Suggestion[];
};

export type PlantIdentificationResult = {
    is_plant: IsPlant;
    classification: Classification;
    analysisType?: "id";
};

export type SimilarImage = {
    id: string;
    url: string;
    similarity: number;
    url_small: string;
    license_name?: string;
    license_url?: string;
    citation?: string;
};

export type Details = {
    language: string;
    entity_id: string;
};

export type Suggestion = {
    id: string;
    name: string;
    source?: string; 
    probability: number;
    similar_images: SimilarImage[];
    redundant?: boolean;
    details?: Details;
};

export type IsHealthy = {
    probability: number;
    binary: boolean;
    threshold: number;
};

export type IsPlant = {
    probability: number;
    binary: boolean;
    threshold: number;
};

export type Disease = {
    suggestions: Suggestion[];
};

export type HealthAssessmentResult = {
    is_healthy: IsHealthy;
    disease: Disease;
    analysisType?: "ha";
};


export type PlantIdentificationResultWithAnalysisType = PlantIdentificationResult & {
    analysisType: "id";
};

export type HealthAssessmentResultWithAnalysisType = HealthAssessmentResult & {
    analysisType: "ha";
};

export type HistoryItem = PlantIdentificationResultWithAnalysisType | HealthAssessmentResultWithAnalysisType;
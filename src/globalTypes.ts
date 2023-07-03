export type Classification = {
    suggestions: Suggestion[];
};

export type PlantIdentificationResult = {
    is_plant: IsHealthy; // We can reuse IsHealthy here, as the structure is the same
    classification: Classification;
};

export type SimilarImage = {
    id: string;
    url: string;
    similarity: number;
    url_small: string;
    license_name?: string; // Add optional properties which exist in the new structure
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
    source: string; // New property
    probability: number;
    similar_images: SimilarImage[];
    redundant: boolean; // New property
    details: Details;
};

export type IsHealthy = {
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
};

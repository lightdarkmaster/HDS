
  export type Advice = {
    minScore: number;
    maxScore: number;
    severity: string;
    recommendation: string;
  };

 export interface Question {
    category: string;
    description?: string;
    ratings: { label: string; score: number }[];
  }
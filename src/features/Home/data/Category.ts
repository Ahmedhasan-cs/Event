export interface Category {
    id: number;
    title: string;
    image: string;
    minBudget?: number;
    maxBudget?: number;
    avgBudget?: number;
    parentID?: number;
}
import { create } from 'zustand';

interface IReviewState {
    rating: number;
    setReviewRating: (value: number) => void;
}

export const useReviewStore = create<IReviewState>((set) => ({
    rating: 0,
    setReviewRating: (data: number) =>
        set((state) => ({ ...state, rating: data })),
}));

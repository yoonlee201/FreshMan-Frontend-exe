import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IBottomSheetState {
    isOpen: {
        bg: boolean;
        bottomSheet: boolean;
    };
    setIsOpenBottomSheet: (value: boolean) => void;
    setIsOpenBg: (value: boolean) => void;
}

export const useBottomSheetStore = create(
    persist<IBottomSheetState>(
        (set) => ({
            isOpen: {
                bg: false,
                bottomSheet: false,
            },
            setIsOpenBottomSheet: (value: boolean) =>
                set((state) => ({
                    isOpen: {
                        ...state.isOpen,
                        bottomSheet: value,
                    },
                })),
            setIsOpenBg: (value: boolean) =>
                set((state) => ({
                    isOpen: {
                        ...state.isOpen,
                        bg: value,
                    },
                })),
        }),
        {
            name: 'bottomSheetStorage',
        },
    ),
);

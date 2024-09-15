import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IUserState {
    user: {
        name: string;
        email: string;
        address: string;
    };
    setUserInfo: (data: IUserState['user']) => void;
}

export const useAuthStore = create(
    persist<IUserState>(
        (set) => ({
            user: {
                name: '',
                email: '',
                address: '',
            },
            setUserInfo: (data: IUserState['user']) => set({ user: data }),
        }),
        {
            name: 'userAuthStorage',
        },
    ),
);

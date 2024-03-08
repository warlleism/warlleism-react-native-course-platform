import { create } from 'zustand';

type ColorModeStore = {
    colorMode: 'light' | 'dark';
    alterColorMode: (color: 'light' | 'dark') => void;
};

const useColorMode = create<ColorModeStore>((set) => ({
    colorMode: 'dark',
    alterColorMode: (color: 'light' | 'dark') => set(() => ({ colorMode: color })),
}));

export default useColorMode;

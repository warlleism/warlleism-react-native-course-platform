import useColorMode from "../context/darkModeStore";

interface Styles {
    backgroundColor: string;
    colorText: string;
}

interface ThemeStyles {
    colorMode: 'light' | 'dark';
    styles: Styles;
}

const useTheme = (): ThemeStyles => {
    const colorMode = useColorMode((state) => state.colorMode);

    const styles: Styles = {
        backgroundColor: colorMode === 'dark' ? "#131313" : "#f2f2f2",
        colorText: colorMode === 'dark' ? "#fff" : "#131313",
    };

    return { colorMode: colorMode as 'light' | 'dark', styles };
};

export default useTheme;

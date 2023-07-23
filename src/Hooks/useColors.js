import { useTheme } from "../Context/Theme";
import { darkTheme, lightTheme } from "../Theme";

export const useColors = () => {
    const { theme } = useTheme();

    return theme === 'dark' ? darkTheme : lightTheme;
};
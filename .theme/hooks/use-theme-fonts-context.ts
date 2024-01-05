import {useThemeContext} from "./use-theme-context";
import {ThemeFonts} from "../contracts/theme";

export const useThemeFontsContext = () : ThemeFonts => {
    const theme = useThemeContext();
    return theme.typography;
};
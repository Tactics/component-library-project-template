import {useContrastContext} from "./use-contrast-context";
import {useThemeContext} from "./use-theme-context";
import {Contrast} from "../enum/contrast";
import {ThemeColors} from "../contracts/theme";

export const useThemeColorContext = () : ThemeColors => {

    const contrast = useContrastContext();
    const theme = useThemeContext();

    const mapping: Record<Contrast, ThemeColors> = {
        [Contrast.LIGHT]: theme.colors.light,
        [Contrast.DARK]: theme.colors.dark,
        [Contrast.HIGH_CONTRAST]: theme.colors.contrast,
    };

    return mapping[contrast] || theme.colors.light;
};
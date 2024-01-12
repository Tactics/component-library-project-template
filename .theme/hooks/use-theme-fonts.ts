import {useTheme} from "./use-theme";
import {TypographyFontsI} from "../typography/contracts/fonts";

export const useThemeFonts = () : TypographyFontsI => {
    const theme = useTheme();
    return theme.typography.fonts;
};
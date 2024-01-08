import {useThemeContext} from "./use-theme-context";
import {TypographyI} from "../typography/contracts/typography";
import {TypographyFontsI} from "../typography/contracts/fonts";

export const useThemeFontsContext = () : TypographyFontsI => {
    const theme = useThemeContext();
    return theme.typography.fonts;
};
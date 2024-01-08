import {ContrastColorsI, PartialContrastColorsI} from "../../colors/contracts/contrast-color";
import {PartialTypographyI, TypographyI} from "../../typography/contracts/typography";

export interface ThemeI {
    colors: ContrastColorsI,
    typography: TypographyI,
}

export interface PartialThemeI {
    colors?: PartialContrastColorsI,
    typography?: PartialTypographyI,
}

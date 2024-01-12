import {AlternateConfigI} from "../../alternate/contracts/alternate";
import {ColorsConfigI} from "../../colors/contracts/colors";
import {TypographyConfigI} from "../../typography/contracts/typography";

export interface ThemeConfigI {
    alternate?: AlternateConfigI,
    colors?: ColorsConfigI,
    typography?: TypographyConfigI,
    spacing?: object,
    rounding?: object
}

export interface ThemeVariantConfigI {
    standard?: ThemeConfigI,
    inverted?: ThemeConfigI,
    contrast?: ThemeConfigI
}


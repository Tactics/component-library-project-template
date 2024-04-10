import {ColorsConfigI} from "../../colors/contracts/colors";
import {TypographyConfigI} from "../../typography/contracts/typography";
import {AlternateConfigI, AlternateI, AlternateItem} from "../../alternate/contracts/alternate";

export interface ThemeConfigI {
    alternate?: AlternateItem[],
    colors?: ColorsConfigI,
    typography?: TypographyConfigI,
}

export interface ThemeVariantConfigI {
    standard?: ThemeConfigI,
    inverted?: ThemeConfigI,
    contrast?: ThemeConfigI
}
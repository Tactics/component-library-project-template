import {TypographyConfigI, TypographyI} from "../../typography/contracts/typography";
import {ColorsConfigI, ColorsI} from "../../colors/contracts/colors";
import {AlternateConfigI, AlternateI} from "../../alternate/contracts/alternate";

export type ThemeVariantsKeyT = 'standard' | 'inverted' | 'contrast';

export interface ThemeVariantsI {
    standard: ThemeI,
    inverted: ThemeI,
    contrast: ThemeI
}

export interface ThemeI {
    alternate: AlternateI,
    colors: ColorsI,
    typography: TypographyI,
}

export interface ThemeConfigI {
    alternate?: AlternateConfigI,
    colors?: ColorsConfigI,
    typography?: TypographyConfigI,
    spacing?: object,
    rounding?: object
}

export interface ThemeVariantsConfigI {
    standard?: ThemeConfigI,
    inverted?: ThemeConfigI,
    contrast?: ThemeConfigI
}

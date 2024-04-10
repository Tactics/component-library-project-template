import {TypographyConfigI, TypographyI} from "../../typography/contracts/typography";
import {ColorsConfigI, ColorsI} from "../../colors/contracts/colors";
import {AlternateConfigI, AlternateI, AlternateItem} from "../../alternate/contracts/alternate";

export type ThemeVariantsKeyT = 'standard' | 'inverted' | 'contrast';

export interface ThemeVariantsI {
    label: string,
    standard: ThemeI,
    inverted: ThemeI,
    contrast: ThemeI
}

export interface ThemeI {
    alternate: AlternateItem[],
    colors: ColorsI,
    typography: TypographyI,
}

export interface ThemeConfigI {
    alternate?: AlternateItem[],
    colors?: ColorsConfigI,
    typography?: TypographyConfigI,
}

export interface ThemeVariantsConfigI {
    standard?: ThemeConfigI,
    inverted?: ThemeConfigI,
    contrast?: ThemeConfigI
}

import {TypographyConfigI, TypographyI} from "../../typography/contracts/typography";
import {ColorsConfigI, ColorsI} from "../../colors/contracts/colors";
import {AlternateItem} from "../../alternate/contracts/alternate";
import {SpacingI} from "../../spacing/contracts/spacing";
import {OpacityI} from "../../opacity/contracts/opacity";

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
    tools: ToolI
}

export interface ThemeConfigI {
    alternate?: AlternateItem[],
    colors?: ColorsConfigI,
    typography?: TypographyConfigI,
}

export interface ToolI {
    spacing: SpacingI
    opacity: OpacityI
}
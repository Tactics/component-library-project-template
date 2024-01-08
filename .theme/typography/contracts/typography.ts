import {TypographyResourcesI} from "./resources";
import {TypographyFontsI} from "./fonts";

export interface TypographyI {
    resources: TypographyResourcesI,
    fonts: TypographyFontsI
}

export interface PartialTypographyI {
    resources?: TypographyResourcesI,
    fonts?: PartialTypographyConfigFontsI
}

export interface PartialTypographyConfigFontsI {
    'font-family'?: PartialTypographyConfigFontFamilyI,
    'line-height'?: PartialTypographyConfigLineHeightI
    'font-size'?: PartialTypographyConfigFontSizeI
}

export interface PartialTypographyConfigFontFamilyI {
    main?: string,
    secondary?: string,
    tertiary?: string
}

export interface PartialTypographyConfigLineHeightI {
    xs?: string|number,
    sm?: string|number,
    base?: string|number,
    lg?: string|number,
    xl?: string|number,
    '2xl'?: string|number,
    '3xl'?: string|number,
    '4xl'?: string|number,
    '5xl'?: string|number,
    '6xl'?: string|number,
    '7xl'?: string|number,
    '8xl'?: string|number,
    '9xl'?: string|number,
}

export interface PartialTypographyConfigFontSizeI {
    xs?: string,
    sm?: string,
    base?: string,
    lg?: string,
    xl?: string,
    '2xl'?: string,
    '3xl'?: string,
    '4xl'?: string,
    '5xl'?: string,
    '6xl'?: string,
    '7xl'?: string,
    '8xl'?: string,
    '9xl'?: string,
}
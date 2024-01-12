import {TypographyResourcesConfigI, TypographyResourcesI} from "./resources";
import {TypographyFontsI} from "./fonts";

export interface TypographyI {
    resources: TypographyResourcesI,
    fonts: TypographyFontsI
}

export interface TypographyConfigI {
    resources?: TypographyResourcesConfigI,
    fonts?: TypographyFontsConfigI
}

export interface TypographyFontsConfigI {
    fontFamily?: TypographyFontFamilyConfigI,
    lineHeight?: TypographyLineHeightConfigI
    fontSize?: TypographyFontSizeConfigI
}

export interface TypographyFontFamilyConfigI {
    main?: string,
    second?: string,
    third?: string
}

export interface TypographyLineHeightConfigI {
    xs?: string|number,
    sm?: string|number,
    standard?: string|number,
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

export interface TypographyFontSizeConfigI {
    xs?: string,
    sm?: string,
    standard?: string,
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
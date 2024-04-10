import {TypographyFontsConfigI, TypographyFontsI} from "./fonts";

export interface TypographyI {
    resources: string[],
    fonts: TypographyFontsI
}

export interface TypographyConfigI {
    resources?: string[],
    fonts?: TypographyFontsConfigI
}

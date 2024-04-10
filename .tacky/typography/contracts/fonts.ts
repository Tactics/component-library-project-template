import {TypographyFontI} from "./font";
import {TypographyFontsScaleConfigI} from "./scale";
import {TypographyFontsFamilyConfigI} from "./family";

export interface TypographyFontsI {
    primary : TypographyFontI
    accent : TypographyFontI
    supporting: TypographyFontI
}

export interface TypographyFontsConfigI {
    family?: TypographyFontsFamilyConfigI,
    scale?: TypographyFontsScaleConfigI,
}



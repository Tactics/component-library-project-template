import {ColorsI, PartialColorsI} from "./colors";

export interface ContrastColorsI {
    light: ColorsI,
    dark: ColorsI,
    contrast: ColorsI
}

export interface PartialContrastColorsI {
    light?: PartialColorsI,
    dark?: PartialColorsI,
    contrast?: PartialColorsI
}

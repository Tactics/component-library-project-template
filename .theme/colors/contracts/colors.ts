import {ColorVariantI, PartialColorVariantI} from "./color-variant";

export interface ColorsI {
    main : ColorVariantI
    secondary : ColorVariantI,
    tertiary : ColorVariantI
}

export interface PartialColorsI {
    main?: PartialColorVariantI
    secondary? : PartialColorVariantI,
    tertiary? : PartialColorVariantI
}

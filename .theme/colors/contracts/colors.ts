import {ColorVariantConfigI, ColorVariantI} from "./color-variant";

export interface ColorsI {
    main : ColorVariantI
    second : ColorVariantI,
    third : ColorVariantI
}

export interface ColorsConfigI {
    main?: ColorVariantConfigI
    second? : ColorVariantConfigI,
    third? : ColorVariantConfigI
}

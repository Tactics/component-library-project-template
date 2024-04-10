import {ColorVariantConfigI, ColorVariantI} from "./color-variant";

export interface ColorsI {
    danger: ColorVariantI,
    warning: ColorVariantI,
    success: ColorVariantI,
    info: ColorVariantI,
    neutrals: ColorVariantI,
    primary: ColorVariantI,
    accent: ColorVariantI,
    supporting: ColorVariantI
}

export interface ColorsConfigI {
    danger?: ColorVariantConfigI,
    warning?: ColorVariantConfigI,
    success?: ColorVariantConfigI,
    info?: ColorVariantConfigI,
    neutrals?: ColorVariantConfigI,
    primary?: ColorVariantConfigI,
    accent?: ColorVariantConfigI,
    supporting?: ColorVariantConfigI
}

import {HexColor} from "./hex-color";

export interface ColorVariantI {
    tint_1 : HexColor
    tint_2 : HexColor
    tint_3 : HexColor
    tint_4 : HexColor
    regular : HexColor
    tint_6 : HexColor
    tint_7 : HexColor
    tint_8 : HexColor
    tint_9 : HexColor
}

export interface PartialColorVariantI {
    tint_1? : HexColor
    tint_2? : HexColor
    tint_3? : HexColor
    tint_4? : HexColor
    regular? : HexColor
    tint_6? : HexColor
    tint_7? : HexColor
    tint_8? : HexColor
    tint_9? : HexColor
}
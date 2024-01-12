import { ColorVariantI } from "./contracts/color-variant";
import {orDefault} from "../tools/orDefault";

export const ColorVariant = ({ base, config } : {
    base: ColorVariantI
    config: Partial<ColorVariantI>,
}) : ColorVariantI => {

    const regular = orDefault(
        config,
        base.regular,
        ['regular']
    );

    const tint4 = orDefault(
        config,
        regular,
        ['tint4']
    );

    const tint3 = orDefault(
        config,
        tint4,
        ['tint3']
    );

    const tint2 = orDefault(
        config,
        tint3,
        ['tint2']
    );

    const tint1 = orDefault(
        config,
        tint2,
        ['tint1']
    );

    const tint6 = orDefault(
        config,
        regular,
        ['tint6']
    );

    const tint7 = orDefault(
        config,
        tint6,
        ['tint7']
    );

    const tint8 = orDefault(
        config,
        tint7,
        ['tint8']
    );

    const tint9 = orDefault(
        config,
        tint8,
        ['tint9']
    );

    return {
        tint_1: tint1,
        tint_2: tint2,
        tint_3: tint3,
        tint_4: tint4,
        regular: regular,
        tint_6: tint6,
        tint_7: tint7,
        tint_8: tint8,
        tint_9: tint9,
    }
}
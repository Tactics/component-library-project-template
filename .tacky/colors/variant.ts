import {
    ColorVariantConfigI,
    ColorVariantI
} from "./contracts/color-variant";
import {orDefault} from "../tools/orDefault";

export const ColorVariant = ({ base, config } : {
    base: ColorVariantI
    config: ColorVariantConfigI,
}) : ColorVariantI => {

    const tint_500 = orDefault(
        config,
        base.tint_500,
        ['tint_500']
    );

    const isCustom = (base.tint_500 != tint_500);

    const tint_400 = orDefault(
        config,
        isCustom ? tint_500 : base.tint_400,
        ['tint_400']
    );

    const tint_300 = orDefault(
        config,
        isCustom ? tint_400 : base.tint_300,
        ['tint_300']
    );

    const tint_200 = orDefault(
        config,
        isCustom ? tint_300 : base.tint_200,
        ['tint_200']
    );

    const tint_100 = orDefault(
        config,
        isCustom ? tint_200 : base.tint_100,
        ['tint_100']
    );

    const tint_50 = orDefault(
        config,
        isCustom ? tint_100 : base.tint_50,
        ['tint_50']
    );

    const tint_600 = orDefault(
        config,
        isCustom ? tint_500 : base.tint_600,
        ['tint_600']
    );

    const tint_700 = orDefault(
        config,
        isCustom ? tint_600 : base.tint_700,
        ['tint_700']
    );

    const tint_800 = orDefault(
        config,
        isCustom ? tint_700 : base.tint_800,
        ['tint_800']
    );

    const tint_900 = orDefault(
        config,
        isCustom ? tint_800 : base.tint_900,
        ['tint_900']
    );

    const tint_950 = orDefault(
        config,
        isCustom ? tint_900 : base.tint_950,
        ['tint_950']
    );

    return {
        tint_50: tint_50,
        tint_100: tint_100,
        tint_200: tint_200,
        tint_300: tint_300,
        tint_400: tint_400,
        tint_500: tint_500,
        tint_600: tint_600,
        tint_700: tint_700,
        tint_800: tint_800,
        tint_900: tint_900,
        tint_950: tint_950,
    }
}
import React from 'react';

import {ColorVariantI} from "@tactics/tacky/src/colors/contracts/color-variant";
import {ThemeColor} from "./../theme-color/theme-color";
import {ThemeColorsGroupSC, ThemeColorsGroupTitleSC} from "./../theme-color-group/theme-color-group.style";
import {useThemeFonts} from "@tactics/tacky/src/hooks/use-theme-fonts";

export const ThemeColorVariant = (
    { colors, label } : { colors : ColorVariantI, label : string }
) => {

    const typography = useThemeFonts();

    return (
        <ThemeColorsGroupSC>
            <ThemeColorsGroupTitleSC font={typography.primary.md}>{ label }</ThemeColorsGroupTitleSC>
            <ThemeColor color={ colors.tint_50 } label="50"></ThemeColor>
            <ThemeColor color={ colors.tint_100 } label="100"></ThemeColor>
            <ThemeColor color={ colors.tint_200 } label="200"></ThemeColor>
            <ThemeColor color={ colors.tint_300 } label="300"></ThemeColor>
            <ThemeColor color={ colors.tint_400 } label="400"></ThemeColor>
            <ThemeColor color={ colors.tint_500 } label="500"></ThemeColor>
            <ThemeColor color={ colors.tint_600 } label="600"></ThemeColor>
            <ThemeColor color={ colors.tint_700 } label="700"></ThemeColor>
            <ThemeColor color={ colors.tint_800 } label="800"></ThemeColor>
            <ThemeColor color={ colors.tint_900 } label="900"></ThemeColor>
            <ThemeColor color={ colors.tint_950 } label="950"></ThemeColor>
        </ThemeColorsGroupSC>
    );
};

